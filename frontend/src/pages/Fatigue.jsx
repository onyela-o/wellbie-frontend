import Button from '../components/Button'
import React, { useState, useEffect } from 'react'

import SummaryTable from '../components/SummaryTable'
import SummaryBox from '../components/SummaryBox'
import Chart from '../components/Chart'

const Fatigue = () => {
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

  const userID = 2
  const userEntries = allEntries.filter((entry) => entry.author === userID)
  const fatigueEntries = userEntries.filter(
    (entry) => entry.category === 'FATIGUE'
  )

  return (
    <div>
      <h3>This is your personalised dashboard. </h3>
      <p style={{ fontSize: '2vh' }}>
        You can investigate how your symptoms of pain and fatigue change over
        time, and how they are impacted by life style factors.
      </p>
      <a href='/dashboard/pain'>
        <Button>Your pain overview</Button>
      </a>
      <a href='/dashboard/fatigue'>
        <Button style={{ backgroundColor: '#3d7d80' }}>
          Your fatigue overview
        </Button>
      </a>
      <div>
        <Chart symptomEntries={fatigueEntries} symptom='Fatigue' />
        <SummaryBox symptomEntries={fatigueEntries} symptom='fatigue' />
        <SummaryTable rows={fatigueEntries} symptom='Fatigue' />
      </div>
    </div>
  )
}

export default Fatigue
