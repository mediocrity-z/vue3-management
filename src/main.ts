import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
// import '@/router/permission'
import i18n from '@/i18n'
import filters from './utils/filters'

const app = createApp(App)

filters(app)

app.use(store).use(router).use(i18n).mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
