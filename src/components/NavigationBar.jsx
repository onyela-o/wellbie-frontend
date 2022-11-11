import React from 'react'
import { Link } from 'react-router-dom'

const Title = () => {
  return (
    <div>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <h1>Wellbie</h1>
      </Link>
    </div>
  )
}

const linkStyle = {
  display: 'inline-block',
  marginLeft: '1em',
  marginRight: '1em',
  textDecoration: 'none',
}

const lastLinkStyle = {
  borderLeft: '1px solid rgba(255, 255, 255, 0.3)',
  paddingLeft: '1em',
  textDecoration: 'none',
}
const NavigationOptions = () => {
  return (
    <div>
      <nav>
        <ul className='header-nav nav-links'>
          <Link className='targetDiv' to='/' style={linkStyle}>
            Home
          </Link>
          <Link to='/about' style={linkStyle}>
            About Wellbie
          </Link>
          <Link to='/contact-us' style={lastLinkStyle}>
            Contact Us
          </Link>
        </ul>
      </nav>
    </div>
  )
}

const UserOptions = () => {
  return (
    <div>
      <nav>
        <ul className='user-bar nav-links'>
          <Link to='/register' style={linkStyle}>
            Register
          </Link>
          <Link to='/log-in' style={linkStyle}>
            Log in
          </Link>
          <Link to='/check-in' style={linkStyle}>
            Daily Check-in
          </Link>
          <Link to='/dashboard' style={lastLinkStyle}>
            Dashboard
          </Link>
        </ul>
      </nav>
    </div>
  )
}

const ColourStrip = () => {
  return <div id='colourstrip'></div>
}

const NavigationBar = () => {
  return (
    <div>
      <Title />
      <NavigationOptions />

      <ColourStrip />
      <div>
        <UserOptions />
      </div>
    </div>
  )
}

export default NavigationBar
