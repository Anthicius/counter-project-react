import React from 'react'

const Button = (props) => {
  return (
    <>
    <button onClick={()=>props.onChange(props.label)}>{props.label}</button>
    </>
  )
}

export default Button