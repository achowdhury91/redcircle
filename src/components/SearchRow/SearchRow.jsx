import React, { useContext } from 'react'
import './SearchRow.css'
import CharactersContext from '../../reducers/charactersReducer'
import { SELECT_CHARACTER } from '../../constants/actionConstants'

const SearchRow = ({
  name,
  image,
  id,
}) => {
  const { dispatch } = useContext(CharactersContext)

  const handleClick = () => {
    dispatch({
      type: SELECT_CHARACTER,
      payload: id,
    })
  }

  return (
    <div
      className='SearchRow'
      onClick={handleClick}
    >
      <img src={image} alt={name} />

      <div className='name'>{name}</div>
    </div>
  )
}

export default SearchRow
