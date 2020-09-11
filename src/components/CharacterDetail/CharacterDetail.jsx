import './CharacterDetail.css'
import React from 'react'

const CharacterDetail = ({
  image,
  name,
  status,
  species,
  location,
}) => {
  return (
    <div className='CharacterDetail'>
      <div className='content'>
        <img src={image} />

        <div className='name'>{name}</div>
      </div>
    </div>
  )
}

export default CharacterDetail
