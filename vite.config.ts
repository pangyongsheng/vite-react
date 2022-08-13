import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    // vitePluginImp({
    //   libList: [
    //     {
    //       libName: "antd",
    //       style: (name) => `antd/lib/${name}/style/index.less`,
    //     },
    //   ],
    // })
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript，支持 less 内联 JS
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
        // modifyVars: themeVariables,
      },
    },
  },
  server: {
    port: 8000, // 开发环境启动的端口
    proxy: {
    }
  }
})
