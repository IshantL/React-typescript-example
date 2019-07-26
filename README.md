

# Typescript in Create-react-app:

npm i typescript @types/node @types/react @types/react-dom
-typescript definition for node , react and react-dom

## Typescript in react project from stratch:
- To create new project 
```
npm init – y
```
- Create index.html, webpack.config.js & .babelrc

- Shortcuts vs code (just for reference)

Html page->
! tab 
Div#app-root tab
Rfc tab

```
export default function App():JSX.Element {
  return (
    <div>
      
    </div>
  )
}

```
Webpack.config.js

```
module.exports = {
  target:'web',
  mode:'development',
  entry:'./src/index.tsx',
  output:{
    path:null,
    filename:'bundle.js'
  }
}

```

For importing if we don’t want to specify the extenstions then 
```
resolve:{extentions:['.ts','.tsx','.js']}
```

For production ready code we need to do this to store it in build folder, we can either give dist as well.
Also we are adding rules 
```
const path = require('path');
const rules= [
  {
    test:/\.tsx?/,
    exclude: /node_modules/,
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
  resolve: {extensions:['.ts','.tsx','.js']},
  devServer:{
    contentBase:'./',
    port:5000
  }
}
```
In .babelrc
For babel to use
```
{
  "presets": ["@babel/env","@babel/react","@babel/typescript"]
}

```

In package.json
```
"scripts": {
    "start": "webpack-dev-server --open",
    "build": "webpack"
  },
```
We have to install dependencies
npm i @babel/core @babel/preset-env @babel/preset-typescript webpack webpack-cli webpack-dev-server babel-loader react react-dom @types/react @types/react-dom

-- use typescript for type checking


