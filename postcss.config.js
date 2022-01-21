module.exports = {
    plugins: [
        require("postcss-pxtorem")({
            rootValue: 32,
            unitPrecision: 5,
            selectorBlackList: [],
            propList: ["*"],
            exclude: /node_modules/i,
            miniPixelValue: 2,
        }),
        require("autoprefixer"),
        // ({
        //     overrideBrowserslist: [
        //         'Android 4.1',
        //         'iOS 7.1',
        //         'Chrome > 31',
        //         'not ie <= 11',  //不考虑IE浏览器
        //         'ff >= 30', //仅新版本用“ff>=30
        //         '> 1%',//  全球统计有超过1%的使用率使用“>1%”;
        //         'last 2 versions', // 所有主流浏览器最近2个版本
        //     ],
        //     grid: true,// 开启grid布局的兼容(浏览器IE除外其他都能兼容grid，可以关闭开启)
        // }),
    ]
}