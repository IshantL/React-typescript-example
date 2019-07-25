const path = require('path');
const rules= [
  {
    test:/\.tsx?/,
    exculde: /node_modules/,
    loader: 'babel-loader'
  }
]
module.exports = {
  target:'web',
  mode:'development',
  entry:'./src/index.tsx',
  output:{
    path:path.resolve(__dirname,'build'),
    filename:'bundle.js'
  },
  module:{rules},
  resolve: {extentions:['.ts','.tsx','.js']},
  devServer:{
    contentBase:'./',
    port:5000
  }
}