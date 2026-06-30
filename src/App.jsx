import './App.css'
import Home from "./pages/home_page/Home";
import Player_Scout from "./pages/player_scout/Player_Scout";
import Players from "./pages/players/Players";
import Player_Profile from "./pages/player_profile/Player_Profile";
import {Routes ,Route} from 'react-router-dom'


function App() {

  return (
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='player-scout' element={<Player_Scout/>} />
    <Route path="/players" element={<Players />} />
    <Route path="/players/:id" element={<Player_Profile />} />
   </Routes>
      
    
  )
}

export default App
