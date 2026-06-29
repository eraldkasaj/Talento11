import './App.css'
import Home from "./pages/home_page/Home";
import Player_Scout from "./pages/player_scout/Player_Scout";
import Players from "./pages/players/Players";
import {Routes ,Route} from 'react-router-dom'


function App() {

  return (
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='player-scout' element={<Player_Scout/>} />
    <Route path="/players" element={<Players />} />
   </Routes>
      
    
  )
}

export default App
