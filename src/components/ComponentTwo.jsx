import React from 'react'

const ComponentTwo = ({count, onClickandler}) => {
    const handleClick = () => onClickandler();

  return (
    <div>
    <p>{count}</p>
    <button onClick={handleClick}>Increment</button>
</div>
  )
}

export default ComponentTwo