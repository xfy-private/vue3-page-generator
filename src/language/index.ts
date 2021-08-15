import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'zh',
  fallbackLocale: 'zh',
  silentFallbackWarn: true,
  messages: {
    zh: require('./zh'),
    en: require('./en.js'),
  },
});
export default i18n;
