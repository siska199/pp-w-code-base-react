import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "node:url"

export default defineConfig(()=>{
  return {
    plugins: [vue()],
    resolve : {
      alias: {
          "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    css: {
        preprocessorOptions: {
          scss: {
            quietDeps: true
          }
        }
      }
  }
})
