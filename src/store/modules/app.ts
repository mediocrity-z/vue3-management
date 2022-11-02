import { login as loginApi } from "@/api/login/index";
import router from '@/router'
import { setTokenTime } from '@/utils/auth'

export default {
    namespaced: true,
    state: () => ({
        token: localStorage.getItem('token') || '',
        isCollapse: false,
        lang: localStorage.getItem('lang') || navigator.language || 'zh'
    }),
    mutations: {
        setToken(state: any, token: string) {
            state.token = token
            localStorage.setItem('token', token)
        },
        changeCollapse(state) {
            state.isCollapse = !state.isCollapse
        },
        changeLang(state, lang) {
            state.lang = lang
            localStorage.setItem("lang", lang);
        }
    },
    actions: {
        login({ commit }, userInfo: any) {
            return new Promise(((resolve, reject) => {
                loginApi(userInfo).then((res) => {
                    commit('setToken', res.token)
                    setTokenTime()
                    router.replace('/')
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            }))
        },
        logout(context) {
            context.commit('setToken', '')
            localStorage.clear()
            sessionStorage.removeItem('path')
            router.replace('/login')
        }
    }

}