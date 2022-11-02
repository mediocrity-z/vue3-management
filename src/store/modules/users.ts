import { ref } from "vue";

export default {
    namespaced: true,
    state: () => ({
        editUserData: ref({})
    }),
    mutations: {
        editUser(state, data) {
            state.editUserData.value = {
                id: data.id,
                email: data.email,
                mobile: data.mobile
            }

        }
    }
}