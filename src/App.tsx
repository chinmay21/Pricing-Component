import { Route, Routes } from 'react-router-dom'
import Home from "./Component/Home";
import './App.css'

function App() {
  return (
    <div className='w-[100vw] h-[100vh]'>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
