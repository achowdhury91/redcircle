import React, { useState, useContext } from 'react'
import CharactersContext from '../../reducers/charactersReducer'
import { UPDATE_CHARACTERS } from '../../constants/actionConstants'

const SearchBar = () => {
  const { state, dispatch } = useContext(CharactersContext)

  const [inputValue, setInputValue] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      getCharacterData()
    }
  }

  const getCharacterData = async () => {
    const url = `https://rickandmortyapi.com/api/character/?name=${inputValue}`

    const rawRes = await fetch(url)
    const resJson = await rawRes.json()

    const { results } = resJson

    dispatch({
      type: UPDATE_CHARACTERS,
      payload: results,
    })
  }

  return (
    <div className='SearchBar'>
      <input
        type='text'
        placeholder='Enter character name'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button
        onClick={getCharacterData}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
