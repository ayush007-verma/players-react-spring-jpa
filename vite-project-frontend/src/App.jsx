
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootRoute from './RootRoute'
import PlayerId from './PlayersApiEndpoints/PlayerId'
import Players from './PlayersApiEndpoints/Players'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootRoute/>}/>
          <Route path="/players/id" element={<PlayerId/>}/>
          <Route path="/players" element={<Players/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
