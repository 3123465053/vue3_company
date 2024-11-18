import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

//引入加载svg的插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(),'src/assets/icons')],   //以后svg图标就放在assets/icons下
      symbolId: 'icon-[dir]-[name]',
    })
  ],
  resolve:{
    alias:{
      "@":path.resolve('./src')  //相对路径别名配置，以后使用@代替src （@就表示src位置下）
    }
  }
})
