import Button from '../components/Button'
import React, { useState, useEffect } from 'react'

import SummaryTable from '../components/SummaryTable'
import SummaryBox from '../components/SummaryBox'

const Pain = () => {
  // Get entries
  const [allEntries, setEntries] = useState([])

  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:8000/api/'
    fetch(apiUrl)
      .then((response) => response.json())
      .then((response) => setEntries(response))
  }, [])

  // Filter entries
  const userID = 1
  const userEntries = allEntries
    .slice(0)
    .filter((entry) => entry.author === userID)
  const painEntries = userEntries.filter((entry) => entry.category === 'PAIN')

  console.log(painEntries)

  return (
    <div>
      <h3>This is your personalised dashboard</h3>
      <a href='/dashboard/pain'>
        <Button style={{ backgroundColor: '#3d7d80' }}>
          Your pain overview
        </Button>
      </a>
      <a href='/dashboard/fatigue'>
        <Button>Your fatigue overview</Button>
      </a>
      <SummaryBox symptomEntries={painEntries} symptom='pain'></SummaryBox>
      <SummaryTable rows={painEntries} symptom='Pain'></SummaryTable>
    </div>
  )
}

export default Pain
