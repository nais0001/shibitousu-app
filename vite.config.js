import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    // 1. 先ほどエラーになったHMRの変数を安全な文字列にする
    '__HMR_CONFIG_NAME__': '"shibi-hmr"',
    '__BASE__': '"/"',
    
    // 2. env.mjs 内で漏れている __DEFINES__ を安全なオブジェクトにする
    '__DEFINES__': '{}',
    'global.__DEFINES__': '{}',
    'process.env': {}
  }
})