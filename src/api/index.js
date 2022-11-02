import axios from 'axios'
import { ElMessage } from 'element-plus'
import { diffTokenTime } from '@/utils/auth'
import store from '@/store'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

service.interceptors.request.use(config => {
    if (localStorage.getItem('token')) {
        if (diffTokenTime()) {
            store.dispatch('app/logout')
        }
    }
    config.headers.Authorization = localStorage.getItem('token')
    return config
}, err => {
    return ElMessage.error(err + '！')
})

service.interceptors.response.use(
    (response) => {
        const { data, meta } = response.data
        if (meta.status === 200 || meta.status === 201) {
            ElMessage({
                message: meta.msg + '！',
                type: 'success',
            })
            return data
        } else {
            return ElMessage.error(meta.msg + '！')
        }
    },
    (error) => {
        return error.response && ElMessage.error(error.response.data)
    }
)

export default service