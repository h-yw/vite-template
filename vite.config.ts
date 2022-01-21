import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),
  base: "/",
  publicDir: path.resolve(__dirname, "public"),
  cacheDir: path.resolve(__dirname, "node_modules/.vite"),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  css: {
    postcss: {
      plugins: [
        require("postcss-pxtorem")({
          rootValue: 32,
          unitPrecision: 5,
          selectorBlackList: [],
          propList: ["*"],
          exclude: /node_modules/i,
          miniPixelValue: 2,
        }),
        require("autoprefixer")({
          overrideBrowserslist: [
            'Android 4.1',
            'iOS 7.1',
            'Chrome > 31',
            'not ie <= 11',  //不考虑IE浏览器
            'ff >= 30', //仅新版本用“ff>=30
            '> 1%',//  全球统计有超过1%的使用率使用“>1%”;
            'last 2 versions', // 所有主流浏览器最近2个版本
          ],
          grid: true,// 开启grid布局的兼容(浏览器IE除外其他都能兼容grid，可以关闭开启)
        }),
      ],
    },
    preprocessorOptions: {
      scss: {
        includePaths: [path.resolve(__dirname, "src/styles")],
      },
    }

  },
  plugins: [vue()],
  build: {
    outDir: path.resolve(__dirname, "dist"),
    assetsDir: 'public',
    cssCodeSplit: true,
    sourcemap: true,
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },

  logLevel: "info",
  envDir: path.resolve(__dirname, "config"),
  envPrefix: ["VITE_"],
  server: {
    host: "127.0.0.1",
    port: 9527,
    strictPort: false,
    https: false,
    open: process.env.BROWSER !== "none",
    
    // https://vitejs.dev/config/#server-proxy
    proxy:{
       '/dev-api': {
        target: 'http://example.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev-api/, '')
      },
    },
   
    origin: "http://127.0.0.1:9527",
  }
});
