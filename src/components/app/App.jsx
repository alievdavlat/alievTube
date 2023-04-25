import React, { useState ,useEffect} from 'react'
import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { Channel, Main, NavBar, Search, VideoDetails } from '../Index'

function App() {
  const [timer, setTimer ] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setTimer(false) 
    }, 2000);
  }, [])
  return (
    <Box>
      <NavBar timer={timer} />
      <Routes>
        <Route exact path='/' element={<Main timer={timer} />} />
        <Route path='/channel/:id' element={<Channel/>} />
        <Route path='/video/:id' element={<VideoDetails/>} />
        <Route path='/Search/:id' element={<Search/>} />

      </Routes>
    </Box>
  )
}

export default App
