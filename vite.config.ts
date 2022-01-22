import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import eslint from '@rollup/plugin-eslint';

import { qrcode } from 'vite-plugin-qrcode';

import path from "path";
import packageJson from './package.json'
// https://vitejs.dev/config/
console.log(process.env.BROWSER);

export default defineConfig({
  root: process.cwd(),
  base: './',
  publicDir: path.resolve(__dirname, "public"),
  cacheDir: path.resolve(__dirname, "node_modules/.vite"),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  css: {
    postcss: path.resolve(__dirname, "postcss.config.js"),
    preprocessorOptions: {
      scss: {
        includePaths: [path.resolve(__dirname, "src/styles")],
      },
    }

  },
  plugins: [
    vue(),
    qrcode()
    // eslint({
    //   fix:true
    // })
  ],
  build: {
    outDir: path.resolve(__dirname, packageJson.name),
    assetsDir: 'public',
    cssCodeSplit: true,
    sourcemap: "inline",
    minify: 'esbuild',
    assetsInlineLimit: 4096,
    dynamicImportVarsOptions: {
      include: [],
      exclude: [],
      warnOnError: false,
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
  },
  logLevel: "info",
  envDir: path.resolve(__dirname, "config"),
  envPrefix: ["VITE_"],
  server: {
    host: "127.0.0.1",
    port: 9527,
    strictPort: false,
    https: false,
    open: false,
    // https://vitejs.dev/config/#server-proxy
    proxy: {
      '/dev-api': {
        target: 'http://example.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev-api/, '')
      },
    },
    fs: {
      deny: ['.env', '.env.*', '*.{pem,crt}']
    },
    origin: "http://127.0.0.1:9527",
  },
  preview:{
    port:8080,
    open:true,
  }
});
