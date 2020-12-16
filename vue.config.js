// const CompressionPlugin = require('compression-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
    publicPath: './', //本地路径
    assetsDir: 'static',
    productionSourceMap: false,
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: "医键投供应商平台",
        resolve: {
          alias: {
            '@': resolve('src')
          }
        },
        //不打包编辑器
        plugins: [
            new CompressionPlugin({
              /* [file]被替换为原始资产文件名。
                 [path]替换为原始资产的路径。
                 [dir]替换为原始资产的目录。
                 [name]被替换为原始资产的文件名。
                 [ext]替换为原始资产的扩展名。
                 [query]被查询替换。*/
              // filename: '[path].gz[query]',
              //压缩算法
              algorithm: 'gzip',
              //匹配文件
              test: /\.js$|\.css$|\.jpg$/,
              //压缩超过此大小的文件,以字节为单位
              threshold: 5200,
              minRatio: 0.8,
              //删除原始文件只保留压缩后的文件
              deleteOriginalAssets: false
            }),
          ],
        
        
      },
    
    // devServer: {
    //     proxy: {
    //         '/api':{
    //             target:'http://jsonplaceholder.typicode.com',
    //             changeOrigin:true,
    //             pathRewrite:{
    //                 '/api':''
    //             }
    //         }
    //     }
    // }
}