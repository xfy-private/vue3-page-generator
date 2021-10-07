import { createApp } from 'vue';
import antd from 'ant-design-vue';
import SvgIcon from '@/icons/SvgIcon';
import App from './App.vue';
import router from './router';
import VueI18n from './language';
import 'virtual:svg-icons-register';

if (process.env.NODE_ENV !== 'production') {
  import('ant-design-vue/dist/antd.css');
}

const app = createApp(App);
app.component('svg-icon', SvgIcon);
app.use(antd);
app.use(router);
app.use(VueI18n);
app.mount('#app');
