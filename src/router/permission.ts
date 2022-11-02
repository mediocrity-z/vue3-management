import router from './index'
import store from '@/store'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
    if (store.getters.token) {
        if (to.path == '/login') next('/')
        if (!to.matched || !to.matched.length) next('/notfound')
        else next()
    }
    else {
        if (whiteList.includes(to.path)) next()
        else next('/login')
    }
})