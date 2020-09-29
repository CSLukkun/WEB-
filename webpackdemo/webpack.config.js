module.exports = {
  mode:'development', // 当前的开发模式
  entry:  __dirname + "/src/main.js",// 入口文件
  output: {
    path: __dirname + "/dist",// 打包后的文件存放的地方
    filename: "bundle.js" // 打包后输出文件的文件名
  },
  module:{
    rules:[
        {
            test:/\.css$/,
            // webpack的loader执行顺序是反的,先执行css-loader后执行style-loader
            use:[
                'style-loader',
                'css-loader'
            ]
        },
        {
                           test: /\.(png|svg|jpg|gif)$/,
                           use: [
                               'file-loader'
                                ]
                       }

        ,
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
             'file-loader'
            ]
        }
    ]
    
}

}
