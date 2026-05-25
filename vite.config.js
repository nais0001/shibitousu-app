import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    // 1. すでに撃破したもの
    '__HMR_CONFIG_NAME__': '"shibi-hmr"',
    '__BASE__': '"/"',
    '__DEFINES__': '{}',
    'global.__DEFINES__': '{}',
    'process.env': {},

    // 2. 今回と今後漏れる可能性のある開発用変数をすべて先回りして無害化
    '__SERVER_HOST__': '"localhost"',
    '__HMR_PROTOCOL__': '""',
    '__HMR_HOSTNAME__': '""',
    '__HMR_PORT__': '""',
    '__HMR_DIRECT_TARGET__': '""',
    '__HMR_BASE__': '"/"',
    '__HMR_TIMEOUT__': '30000',
    '__HMR_ENABLE_OVERLAY__': 'false',
    '__WS_TOKEN__': '""',
    '__SERVER_FORWARD_CONSOLE__': 'false',
    '__BUNDLED_DEV__': 'false'
  }
})