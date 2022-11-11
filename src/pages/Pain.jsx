import Button from '../components/Button'
import React, { useState, useEffect } from 'react'

import SummaryTable from '../components/SummaryTable'
import SummaryBox from '../components/SummaryBox'
import Chart from '../components/Chart'

const Pain = () => {
  // Get entries
  const [allEntries, setEntries] = useState([])

  useEffect(() => {
    const apiUrl = 'https://squid-app-bi4mv.ondigitalocean.app/api/'
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
      <p style={{ fontSize: '2vh' }}>
        You can investigate how your symptoms of pain and fatigue change over
        time, and how they are impacted by life style factors.
      </p>
      <a href='/dashboard/pain'>
        <Button style={{ backgroundColor: '#3d7d80' }}>
          Your pain overview
        </Button>
      </a>
      <a href='/dashboard/fatigue'>
        <Button>Your fatigue overview</Button>
      </a>
      <div className='row'>
        <div className='symptom-column'>
          <Chart symptomEntries={painEntries} symptom='Pain' />
        </div>
        <div className='symptom-column'>
          <SummaryBox symptomEntries={painEntries} symptom='pain' />
        </div>
      </div>

      <SummaryTable rows={painEntries} symptom='Pain' />
    </div>
  )
}

export default Pain
