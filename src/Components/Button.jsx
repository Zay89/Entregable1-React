import React from 'react'

const Button = ({styleButton, clickButton}) => {
  return (
    <button style={styleButton} className='button' onClick={clickButton}>&#62;</button>
  )
}

export default Button