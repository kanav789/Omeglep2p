import { useState } from 'react'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Landing } from './Components/Landing'
import { Room } from './Components/Room'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<Landing/>} />
    <Route path='/room' element={<Room/>} />

   </Routes>
  </BrowserRouter>
  )
}

export default App
