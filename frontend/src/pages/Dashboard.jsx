import React from 'react'
import Button from '../components/Button'

const Dashboard = () => {
  return (
    <div>
      <h3>This is your personalised dashboard</h3>
      <a href='/dashboard/pain'>
        <Button>Pain dashboard</Button>
      </a>
      <a href='/dashboard/fatigue'>
        <Button>Fatigue dashboard</Button>
      </a>
    </div>
  )
}

export default Dashboard
