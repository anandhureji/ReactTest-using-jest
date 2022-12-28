import React from 'react'

type GreetProps ={
    name?:string 
}

const Greet = (props:GreetProps) => {
  return (
  <>Greet {props.name}</>
  )
}

export default Greet