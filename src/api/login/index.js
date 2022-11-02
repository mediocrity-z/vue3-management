import service from '@/api/index'
export const login = (data) => {
    return service({
        url: '/login',
        method: 'POST',
        data
    })
}