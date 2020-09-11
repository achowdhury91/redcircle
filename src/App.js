import React, { useReducer } from 'react'
import 'App.css'
import SearchContainer from './components/SearchContainer/SearchContainer'

import {
  charactersReducer,
  initialState,
  CharactersContextProvider,
} from './reducers/charactersReducer'

// const getAllCharacters = async () => {
//   const raw = await fetch('https://rickandmortyapi.com/api/character/')
//   const jsonResponse = await raw.json()
//
//   console.log(jsonResponse)
//
//   return jsonResponse
// }
//
// class App extends React.Component {
//   componentDidMount() {
//     console.log('hi')
//
//     fetch('https://rickandmortyapi.com/api/character/')
//       .then(res => res.json())
//       .then(res => console.log(res))
//   }
//
//   render() {
//     return (
//       <div className='App'>
//         test
//       </div>
//     )
//   }
// }

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
            test
          </div>
        </div>
      </div>
    </CharactersContextProvider>
  )
}

export default App;
