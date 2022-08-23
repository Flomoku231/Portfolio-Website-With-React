import React from 'react'

const Button = (props) => {
  return (
    <div className={`Container__button ${props.className}`}>
        <button id='button' type='submit'>{props.name}</button>
    </div>
  )
}

export default Button