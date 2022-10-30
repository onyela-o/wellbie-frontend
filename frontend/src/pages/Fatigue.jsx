import Button from '../components/Button'
import React, { useState, useEffect } from 'react'

const Fatigue = () => {
  const [allEntries, setEntries] = useState([])

  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:8000/api/'
    fetch(apiUrl)
      .then((response) => response.json())
      .then((response) => setEntries(response))
  }, [])

  const userID = 1
  const userEntries = allEntries.filter((entry) => entry.author === userID)
  const fatigueEntries = userEntries.filter(
    (entry) => entry.category === 'FATIGUE'
  )

  return (
    <div>
      <h3>This is your personalised dashboard</h3>
      <a href='/dashboard/pain'>
        <Button>Pain dashboard</Button>
      </a>
      <a href='/dashboard/fatigue'>
        <Button style={{ backgroundColor: '#3d7d80' }}>
          Fatigue dashboard
        </Button>
      </a>
      <div>
        {fatigueEntries?.map((entry) => (
          <p>This is an entry {entry.category} </p>
        ))}
      </div>
    </div>
  )
}

export default Fatigue
