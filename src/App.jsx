import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReferEarn from './Components/ReferEarn'
import ReferralForm from './Components/RefferalForm'
import Header from './Components/header'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
      <ReferEarn />
      <Routes>
        <Route path='/RefferalForm' element={<ReferralForm />} />
      </Routes>
        
    </>
  )
}

export default App
