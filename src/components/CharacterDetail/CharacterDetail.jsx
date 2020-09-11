import './CharacterDetail.css'
import React from 'react'

const CharacterDetail = ({
  image,
  name,
  status,
  species,
  location = {},
}) => {
  const {
    name: locationName,
  } = location

  return (
    <div className='CharacterDetail'>
      <div className='content'>
        <img src={image} />

        <div className='name'>{name}</div>

        <ul className='details'>
          <li>
            <label>Status</label>

            <div>{status}</div>
          </li>

          <li>
            <label>Species</label>

            <div>{species}</div>
          </li>

          <li>
            <label>Location</label>

            <div>{locationName}</div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CharacterDetail
