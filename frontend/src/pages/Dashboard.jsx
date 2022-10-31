import React from 'react'
import Button from '../components/Button'

const Dashboard = () => {
  return (
    <div>
      <h3>This is your personalised dashboard</h3>
      <a href='/dashboard/pain'>
        <Button>Your pain overview</Button>
      </a>
      <a href='/dashboard/fatigue'>
        <Button>Your fatigue overview</Button>
      </a>
    </div>
  )
}

export default Dashboard
