import './App.css'

import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-screen-4xl mx-auto px-40 py-6 font-primary">
        <Outlet></Outlet>
      </main>
      

    </>
  )
}

export default App
