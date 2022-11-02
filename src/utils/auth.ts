import { TOKEN_TIME, TOKEN_TIME_VALUE } from '@/utils/constant'

// 登陆时设置时间
export const setTokenTime = () => {
    localStorage.setItem(TOKEN_TIME, '' + Date.now())

}

// 获取
export const getTokenTime = () => {
    return Number(localStorage.getItem(TOKEN_TIME))
}

// 比较是否过期
export const diffTokenTime = () => {
    const current = Date.now()
    const token = getTokenTime()
    // 返回true代表已失效
    return current - token > TOKEN_TIME_VALUE
}