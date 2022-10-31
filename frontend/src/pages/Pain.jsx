import Button from '../components/Button'
import React, { useState, useEffect } from 'react'

import SummaryTable from '../components/SummaryTable'
import SummaryBox from '../components/SummaryBox'
import Chart from '../components/Chart'

const Pain = () => {
  // Get entries
  const [allEntries, setEntries] = useState([])

  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:8000/api/'
    const fetchData = async () => {
      const data = await fetch(apiUrl)
      const json = await data.json()
      setEntries(json)
    }

    fetchData().catch(console.error)
  }, [])

  // Filter entries
  const userID = 1
  const userEntries = allEntries
    .slice(0)
    .filter((entry) => entry.author === userID)
  const painEntries = userEntries.filter((entry) => entry.category === 'PAIN')

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
      <Chart symptomEntries={painEntries} symptom='Pain' />
      <SummaryBox symptomEntries={painEntries} symptom='pain' />
      <SummaryTable rows={painEntries} symptom='Pain' />
    </div>
  )
}

export default Pain
