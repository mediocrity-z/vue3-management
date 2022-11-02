import { createI18n } from 'vue-i18n'
import EN from './en'
import ZH from './zh'

const messages = {
    en: {
        ...EN
    },
    zh: {
        ...ZH
    }
}

const getCurrentLang = () => {
    const lang = localStorage.getItem('lang') || navigator.language || 'zh'
    const langCode = lang.indexOf('zh') !== -1 ? 'zh' : 'en'
    localStorage.setItem('lang', langCode)
    return langCode
}

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: getCurrentLang() || 'zh',
    messages: messages
})

export default i18n