export const isFunction = (value: any): boolean => {
    return typeof value === 'function';
}

export const isObject = (value: any): boolean => {
    return typeof value === 'object';
}

export function isMobile(value: string): boolean {
    value = value.replace(/[^-|\d]/g, '');
    return (
        /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value)
    );
}

export const isAndroid = navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("Adr") > -1; //android终端
export const isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
export const isWeixin = navigator.userAgent.toLowerCase().indexOf('micromessenger') > -1;
export const isWeibo = navigator.userAgent.toLowerCase().indexOf('weibo') > -1;
export const isMobileClient = isAndroid || isiOS;
export const isAPP = navigator.userAgent.indexOf('App/Internal') > -1;