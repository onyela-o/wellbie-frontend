import React from 'react'
import Button from '../components/Button'

const Dashboard = () => {
  return (
    <div>
      <h3>This is your personalised dashboard</h3>
      <p style={{ fontSize: '2vh' }}>
        You can investigate how your symptoms of pain and fatigue change over
        time, and how they are impacted by life style factors.
      </p>
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
