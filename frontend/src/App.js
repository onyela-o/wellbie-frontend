import './App.css'

import NavigationBar from './components/NavigationBar'

import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ContactUs from './pages/ContactUs'

import SignUp from './pages/Register'
import LogIn from './pages/LogIn'

import Dashboard from './pages/Dashboard'
import Pain from './pages/Pain'
import Fatigue from './pages/Fatigue'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div>
        <div className='App'>
          <header className='App-header'>
            <NavigationBar />
          </header>
        </div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<AboutPage />} />
          <Route exact path='/contact-us' element={<ContactUs />} />
          <Route exact path='/register' element={<SignUp />} />
          <Route exact path='/log-in' element={<LogIn />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/dashboard/pain' element={<Pain />} />
          <Route exact path='/dashboard/fatigue' element={<Fatigue />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
