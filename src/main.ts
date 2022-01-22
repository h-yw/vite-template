import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/utils/rem'
import { toast } from '@/components/index'
// 打包时需要注释掉
import Vconsole from 'vconsole'
if (import.meta.env.MODE === 'dev') {
    new Vconsole()
}
const app = createApp(App)
app.use(router).use(toast).mount('#app')