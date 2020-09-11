import React from 'react'
import { UPDATE_CHARACTERS, REMOVE_CHARACTERS } from '../constants/actionConstants'

export const initialState = {
  characters: [],
  selectedCharacterId: null,
}

export function charactersReducer(state, action) {
  switch (action.type) {
    case UPDATE_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      }

    case REMOVE_CHARACTERS:
      return initialState

    default:
      throw new Error()
  }
}

const CharactersContext = React.createContext({})

export const CharactersContextProvider = CharactersContext.Provider

export default CharactersContext
