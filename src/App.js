import React, { useReducer } from 'react'
import 'App.css'
import SearchContainer from './components/SearchContainer/SearchContainer'
import Details from './components/Details/Details'

import {
  charactersReducer,
  initialState,
  CharactersContextProvider,
} from './reducers/charactersReducer'

const App = () => {
  const [state, dispatch] = useReducer(charactersReducer, initialState)

  return (
    <CharactersContextProvider value={{ state, dispatch }}>
      <div className='App'>
        <div className='content'>
          <div className='panel'>
            <SearchContainer />
          </div>

          <div className='panel'>
            <Details />
          </div>
        </div>
      </div>
    </CharactersContextProvider>
  )
}

export default App;
