import React from 'react'
import Typography from '@mui/material/Typography'
import Title from './Title'

export default function SummaryBox(props) {
  const container = {
    margin: '5em 1em',
  }

  function countDays(symptomEntries) {
    const symptomDays = symptomEntries.filter(
      (entry) => entry.experienced_today === 'Yes'
    )
    return symptomDays.length
  }

  const currentDate = new Date()

  return (
    <div style={container}>
      <React.Fragment>
        <Title>Summary</Title>

        <Typography component='p' variant='h6'>
          You have experienced {props.symptom} {countDays(props.symptomEntries)}{' '}
          out of {props.symptomEntries.length} days.
        </Typography>
        <Typography color='text.secondary' sx={{ flex: 1 }}>
          up to {currentDate.toLocaleDateString()}
        </Typography>
      </React.Fragment>
    </div>
  )
}
