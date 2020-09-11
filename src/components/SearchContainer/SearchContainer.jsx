import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'

const SearchContainer = () => {
  return (
    <div className='SearchContainer'>
      <SearchBar />

      <SearchResults />
    </div>
  )
}

export default SearchContainer
