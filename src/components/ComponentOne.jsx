import React from 'react'

const ComponentOne = ({count, onClickandler}) => {
    const handleClick = () => onClickandler();
  return (
    <div>
        <p>{count}</p>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default ComponentOne