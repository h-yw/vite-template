import { App } from 'vue';
import Toast from './Toast.vue';
export const toast= {
    install:(app:App)=>{
        app.component("Toast",Toast);
    }
};