import React from 'react'

const ComponentTwo = ({count, onClickandler}) => {
    const handleClick = () => onClickandler();

  return (
    <div>
    <p>{count}</p>
    <button onClick={handleClick}>Decrement</button>
</div>
  )
}

export default ComponentTwo