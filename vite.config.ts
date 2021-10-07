import { defineConfig, UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import viteSvgIcons from 'vite-plugin-svg-icons';
import compressionPlugin from 'vite-plugin-compression';
import styleImportstyleImport from 'vite-plugin-style-import';
import { visualizer } from 'rollup-plugin-visualizer';
import html from 'vite-plugin-html';
import { resolve } from 'path';

import dotenv from 'dotenv';

const pathResolve = (pathStr: string) => resolve(__dirname, pathStr);

const plugins = [vue(), vueJsx(), html(),
  styleImportstyleImport({
    libs: [{
      libraryName: 'ant-design-vue',
      esModule: true,
      ensureStyleFile: true,
      resolveStyle: (name) => `ant-design-vue/es/${name}/style`,
    }],
  }),
  compressionPlugin({
    ext: '.gz',
    deleteOriginFile: false,
    algorithm: 'gzip',
    threshold: 10240,
  }), viteSvgIcons({
    iconDirs: [resolve(process.cwd(), 'src/icons/svg')],
    symbolId: 'icon-[name]',
    svgoOptions: {
      plugins: [{
        name: 'removeAttrs',
        params: {
          attrs: ['fill', 'fill-rule', 'class', 'xmlns'],
        },
      }],
    },
  }), visualizer({
    filename: './dist/stats.html',
    title: '打包分析',
    sourcemap: true,
    gzipSize: true,
    open: true,
  })];

export default (config: {
  mode: string
}): UserConfigExport => {
  dotenv.config({ path: './.env' });
  dotenv.config({ path: `./.env.${config.mode}` });
  const alias = process.env.NODE_ENV === 'production' ? {
    vue: 'https://esm.sh/vue@3.2.4',
    'ant-design-vue': 'https://esm.sh/ant-design-vue@2.2.6',
    axios: 'https://esm.sh/axios@0.20.0-0',
    'vue-router': 'https://esm.sh/vue-router@4.0.11',
    vuex: 'https://esm.sh/vuex@4.0.2',
    'vue-i18n': 'https://esm.sh/vue-i18n@9.1.7',
    vuedraggable: 'https://esm.sh/vuedraggable@4.0.3',
    moment: 'https://esm.sh/moment@2.29.1',
  } : {};
  return defineConfig({
    plugins,
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
        '@': pathResolve('./src'),
        ...alias,
      },
    },
    build: {
      target: 'es2015',
      outDir: 'dist',
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: true,
          drop_debugger: true,
        },
      },
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
    },
    server: {
      port: 8080, // 端口
      open: false, // 自动开启浏览器
      host: '0.0.0.0',
      https: false,
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true,
        },
      },
    },
  });
};
