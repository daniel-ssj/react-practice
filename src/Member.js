import React from 'react'

const Member = ({ img, name, age, birthPlace }) => {
  return (
    <div>
      <img src={img} alt='Jisoo' width='300px' />
      <h1>{name}</h1>
      <h4>{age}</h4>
      <h4>{birthPlace}</h4>
    </div>
  )
}

export default Member
