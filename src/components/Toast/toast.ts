import { App, createApp } from "vue";
import toast from "./toast.vue";
type ToastType = 'success' | 'error' | 'warning' | 'info' | 'loading';
type PositionType = 'top' | 'middle' | 'bottom';
interface Option {
    type?: ToastType,
    message?: string,
    duration?: number,
    to?: string,
    position?: PositionType,
    icon?: string,
    close?: () => void
}
// 单例组件
export class ToastInstance {
    private static instance: ToastInstance;
    private app: App;
    constructor(options: Option) {
        const { type, message, duration, to, position, icon } = options;
        this.app = createApp(toast, {
            type,
            message,
            duration,
            to,
            position,
            icon
        });
        this.app.mount(document.createElement('div'));
    }
    static getInstance(options: Option) {
        if (!ToastInstance.instance) {
            ToastInstance.instance = new ToastInstance(options);
        }
        return ToastInstance.instance;
    }
    static install(app: App) {
        app.component('HToast', toast);
    }
}

/* const  Toast = function(option: Option) {
    const { type, message, duration,to,position,icon} = option;
    const vm = createApp(toast,{
        type,
        to,
        message,
        position,
        icon,
        duration,
        close:()=>{
            console.log('close');
            vm.unmount()
        }
    })
    vm.mount(document.createElement('div'));
}
Toast.install = function(app: App) {
    app.component('HToast', toast);
} */
export const Toast =ToastInstance.getInstance;
