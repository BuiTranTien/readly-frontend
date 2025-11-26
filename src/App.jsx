import './App.css'

import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <main className="min-h-screen max-w-screen-4xl mx-auto px-40 py-6 font-primary">
          <Outlet></Outlet>
        </main>
      </AuthProvider>



    </>
  )
}

export default App
