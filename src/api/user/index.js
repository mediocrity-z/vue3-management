import service from '@/api/index'
export const getUserList = (params) => {
    return service({
        url: '/users',
        params
    })
}

export const changeState = ({ id, status }) => {
    return service({
        url: `/users/${id}/state/${status}`,
        method: 'put'
    })
}

export const addUser = (data) => {
    return service({
        url: '/users',
        method: 'post',
        data
    })
}

export const editUser = (data) => {
    const { id, email, mobile } = data
    return service({
        url: "/users/" + id,
        method: 'put',
        data: { email, mobile }
    })
}

export const deleteUser = (id) => {
    return service({
        url: '/users/' + id,
        method: 'delete'
    })
}

export const getUserInfo = (id) => {
    return service({
        url: "/users/" + id
    })
}

export const getRolesList = () => {
    return service({
        url: '/roles'
    })
}

export const editUserRole = (data) => {
    const { id, rid } = data
    return service({
        url: `/users/${id}/role`,
        method: 'put',
        data: { rid }
    })
}