import service from '@/api/index'
export const setMenuList = () => {
    return service({
        url: '/menus'
    })
}