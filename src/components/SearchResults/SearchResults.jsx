import './SearchResults.css'
import React, { useContext } from 'react'
import SearchRow from '../SearchRow/SearchRow'
import CharactersContext from '../../reducers/charactersReducer'

const SearchResults = () => {
  const { state = {} } = useContext(CharactersContext)

  const { characters = [] } = state

  console.log(characters)

  return (
    <div className='SearchResults'>
      {
        characters.map(elem => {
          const { id, name, image } = elem

          return (
            <SearchRow
              key={id}
              name={name}
              imageUrl={image}
            />
          )
        })
      }
    </div>
  )
}

export default SearchResults
