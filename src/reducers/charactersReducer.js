import React from 'react'

export const initialState = {
}

export function charactersReducer(state, action) {
  switch (action.type) {
    case 'update':
      return {
        ...state,
        ...action.payload,
      }

    case 'remove':
      return initialState

    default:
      throw new Error()
  }
}

const CharactersContext = React.createContext({})

export const CharactersContextProvider = CharactersContext.Provider

export default CharactersContext
