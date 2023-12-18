import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/homepage'
import About from './pages/about'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import NavBar from './components/navbar'
import Footer from './components/footer'
import React from 'react'
import { routes } from './helpers/routing'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Router>
      <NavBar  />
      <Routes>
        {routes.map((route) => (
          <Route
          key={route.path}
          path={route.path}
          element={route.element}
          />
        ))
        }
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
