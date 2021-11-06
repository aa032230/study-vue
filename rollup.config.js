// rollup配置
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve';
export default {
    input: './src/index.js', // 打包入口
    output: {
        file: 'dist/vue.js',
        // 常见的打包格式 IIFE(script直接引入)、ESM(webpack)、CJS(node)、UMD(AMD + CJS)
        format: 'umd',
        name: 'Vue', // UMD模块需要配置name，会将导出的模块放入window
        sourcemap: true, // 可以进行源代码调试
    },
    plugins: [
        resolve(), // 自动导入index
        // babel配置
        babel({
            exclude: 'node_modules/**', //去掉node_modules所有文件夹得所有文件
        }),
    ]
}
