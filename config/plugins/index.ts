import vue from '@vitejs/plugin-vue';
import unocss from 'unocss/vite';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import setupExtend from 'vite-plugin-vue-setup-extend';
import removeConsole from 'vite-plugin-remove-console';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { viteMockServe } from 'vite-plugin-mock';

// import commonjsExternals from 'vite-plugin-commonjs-externals';
const getPlugins = (mode: string) => {
  return [
    vue(),
    viteCompression(),
    unocss(path.resolve(process.cwd(), 'uno.config.ts')),
    viteMockServe({
      mockPath: '/mock',
      localEnabled: true, // 开发打包开关
      prodEnabled: true, // 生产打包开关
      // 这样可以控制关闭mock的时候不让mock打包到最终代码内
      injectCode: `
        import { setupProdMockServer } from './mockProdServer';
        setupProdMockServer();
      `,
      logger: false, //是否在控制台显示请求日志
    }),
    setupExtend(), // 为setup添加名字
    AutoImport({
      dts: 'types/auto-imports.d.ts',
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json', // 生成json文件
        globalsPropValue: true,
      },
      // 'pinia', 'vue-router', 'vue-i18n', 'vue', '@vueuse/core'
      imports: ['vue', '@vueuse/core', 'pinia', 'vue-router'],
      // 可以使用element plus 等组件库在这里注册
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    removeConsole({
      external: ['src/main.ts'],
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      symbolId: 'icon-[dir]-[name]',
      svgoOptions: false,
    }),
    // 生产报告 放在最后一个
    visualizer({
      open: mode === 'production',
      gzipSize: true,
      brotliSize: true,
      filename: path.resolve(process.cwd(), 'dist/report.html'),
    }),
  ];
};

export { getPlugins };
