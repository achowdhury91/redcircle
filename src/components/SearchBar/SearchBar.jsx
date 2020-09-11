import React, { useState } from 'react'

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('clicked enter')
      console.log(inputValue)
    }
  }

  const getCharacterData = async () => {

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

      <button>
        Search
      </button>
    </div>
  )
}

export default SearchBar
