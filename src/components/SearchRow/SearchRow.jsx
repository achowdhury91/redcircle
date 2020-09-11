import React from 'react'
import './SearchRow.css'

const SearchRow = ({
  name,
  imageUrl,
}) => {
  console.log(name)

  return (
    <div className='SearchRow'>
      <img src={imageUrl} alt={name} />

      <div className='name'>{name}</div>
    </div>
  )
}

export default SearchRow
