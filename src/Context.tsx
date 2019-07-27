import React from 'react'

const {Provider, Consumer }= React.createContext();

export default function Context(props) {
 const text ="random text";

  return (
    <Provider value={text}>{props.children}</Provider>
  )
}
