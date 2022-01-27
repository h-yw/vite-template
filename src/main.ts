import { createApp} from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/utils/rem'
// import { request } from './utils'
// import Toast from '@/components/Toast/toast'
import 'virtual:svg-icons-register'

// 打包时需要注释掉
import Vconsole from 'vconsole'
if (import.meta.env.MODE === 'dev') {
    new Vconsole()
}
const app = createApp(App)
app.use(router).mount('#app')


