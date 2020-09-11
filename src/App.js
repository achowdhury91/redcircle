import React from 'react'
import 'App.css'
import SearchContainer from './components/SearchContainer/SearchContainer'

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
  return (
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
  )
}

export default App;
