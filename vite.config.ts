import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

//引入加载svg的插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'

// https://vite.dev/config/
export default defineConfig((command) => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],   //以后svg图标就放在assets/icons下
        symbolId: 'icon-[dir]-[name]',
      }),
      
      viteMockServe({
        //@ts-ignore
        localEnabled: command === 'serve'   //保证开发阶段可以使用mock接口
      })

    ],
    resolve: {
      alias: {
        "@": path.resolve('./src')  //相对路径别名配置，以后使用@代替src （@就表示src位置下）
      }
    },

    //scss全局变量配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/style/variable.scss";'
        }

      },
    }
  }
})
