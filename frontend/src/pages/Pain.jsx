import Button from '../components/Button'
import React, { useState, useEffect } from 'react'

const Pain = () => {
  const [allEntries, setEntries] = useState([])

  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:8000/api/'
    fetch(apiUrl)
      .then((response) => response.json())
      .then((response) => setEntries(response))
  }, [])

  const userID = 1
    const userEntries = allEntries.filter((entry) => entry.author === userID)
    const painEntries = userEntries.filter((entry) => entry.category === 'PAIN')

  return (
    <div>
      <h3>This is your personalised dashboard</h3>
      <a href='/dashboard/pain'>
        <Button style={{ backgroundColor: '#3d7d80' }}>Pain dashboard</Button>
      </a>
      <a href='/dashboard/fatigue'>
        <Button>Fatigue dashboard</Button>
      </a>
      <div>
        {painEntries?.map((entry) => (
          <p>This is an entry {entry.category} </p>
        ))}
      </div>
    </div>
  )
}

export default Pain
