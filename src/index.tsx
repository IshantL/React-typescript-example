import React from 'react'
import ReactDom from 'react-dom';

const sum = (a: number, b: number):number => {
  return a+b;
}
export default function App(): JSX.Element {
  return (
    <h1>
      Hello!! {sum(10,5)}
    </h1>
  )
}
const root = document.getElementById('app-root');

ReactDom.render(<App />, root);