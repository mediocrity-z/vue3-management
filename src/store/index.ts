import { createStore } from 'vuex'
import app from './modules/app'
import users from './modules/users'
import getters from './getters'

export default createStore({
  modules: {
    app,
    users
  },
  getters
})
