// src/i18n/index.ts
import { createI18n } from 'vue-i18n';
import cn from './locale/cn';
import en from './locale/en';
const i18n = createI18n({
  locale: 'cn', // set locale
  messages: {
    cn,
    en,
  },
  legacy: false,
});

export default i18n;
