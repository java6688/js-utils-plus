// rollup.config.js
import babel from '@rollup/plugin-babel';

export default { 
  input: 'index.js', // 入口文件
  output: [
    {
      file: './es/index.js',
      format: 'esm',  // 将软件包保存为 ES 模块文件
      name: 'js-utils'
    },
    {
      file: './dist/index.js',
      format: 'cjs',  // CommonJS，适用于 Node 和 Browserify/Webpack
      name: 'js-utils',
      exports: 'default'
    }
  ],
  watch: {  // 配置监听处理
    exclude: 'node_modules/**'
  },
  plugins: [
    // 使用插件 @rollup/plugin-babel
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    })
  ]
};