import React, { useContext } from 'react'
import CharactersContext from '../../reducers/charactersReducer'
import CharacterDetail from '../CharacterDetail/CharacterDetail'

const Details = () => {
  const { state } = useContext(CharactersContext)

  const {
    characters = [],
    selectedCharacterId = null,
  } = state

  const matchingCharacter = characters.find(character => character.id === selectedCharacterId)

  return (
    <div className='Details'>
      {
        !characters.length && <span>Please search for a character</span>
      }

      {
        !!characters.length && !matchingCharacter && (
          <span>Select a character for more details</span>
        )
      }

      {
        matchingCharacter && (
          <CharacterDetail {...matchingCharacter} />
        )
      }
    </div>
  )
}

export default Details
