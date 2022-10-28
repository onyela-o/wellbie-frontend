import './App.css'
import NavigationBar from './components/NavigationBar'

import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ContactUs from './pages/ContactUs'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

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
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
