import React from 'react'
import Typography from '@mui/material/Typography'
import Title from './Title'

import { formatDate } from '../utils/dateTime'

export default function SummaryBox(props) {
  const { symptomEntries } = props
  const container = {
    margin: '5em 1em',
  }

  // Date
  function countDays(symptomEntries) {
    const symptomDays = symptomEntries.filter(
      (entry) => entry.experienced_today === 'Yes'
    )
    return symptomDays.length
  }

  var currentDate = new Date()
  currentDate = formatDate(currentDate)

  const mostRecentEntryTime = formatDate(symptomEntries[0]?.time)
  const leastRecentEntryTime = formatDate(
    props.symptomEntries[symptomEntries.length - 1]?.time
  )

  // Severity
  const severeDays = symptomEntries?.filter((entry) => entry.severity >= 8)

  const sleepAverage = (entries) => {
    const average =
      entries?.reduce((total, n) => {
        return (total += parseFloat(n.sleep))
      }, 0) / entries.length
    return average.toFixed(1)
  }

  const severePercentage = Math.round(
    (severeDays.length / symptomEntries.length) * 100
  )

  const severeSleepAverage = sleepAverage(severeDays)
  const overallSleepAverage = sleepAverage(symptomEntries)

  return (
    <div style={container}>
      <React.Fragment>
        <Title>Summary</Title>

        <Typography component='span' variant='h6'>
          {severePercentage >= 70 && (
            <div style={{ fontSize: '2.5vh', color: 'red' }}>
              <em>
                <b>
                  {' '}
                  As you've been experiencing severe {props.symptom} for 70% or
                  more of the time, we recommend you consult a doctor.{' '}
                </b>
              </em>
            </div>
          )}
          You have experienced {props.symptom} {countDays(symptomEntries)} out
          of {symptomEntries.length} days.
        </Typography>
        <Typography color='text.secondary' sx={{ flex: 1 }} component='div'>
          {severeDays.length ? (
            <div>
              <span style={{ fontSize: '2vh' }}>
                {' '}
                <em>
                  <b> You had {severeDays.length} severe days.</b>
                </em>
              </span>
              <div>
                For you,{' '}
                {Math.round((severeDays.length / symptomEntries.length) * 100)}%
                of the time you had {props.symptom} symptoms you rated as
                extremely high (8 or higher).
              </div>{' '}
              On those days, on average, you got {severeSleepAverage} hours of
              sleep. Overall, this was less than your average of{' '}
              {overallSleepAverage} hours of sleep.
            </div>
          ) : (
            <div>
              You had no days where you experienced severe {props.symptom}
            </div>
          )}
          <div>
            <br />
            <i>
              For the period from {leastRecentEntryTime} up to{' '}
              {mostRecentEntryTime}{' '}
            </i>
          </div>
          {currentDate !== mostRecentEntryTime && (
            <div>
              You have not logged your daily entry for your {props.symptom}{' '}
              today. You can do this <a href='/'>here</a>.
            </div>
          )}
        </Typography>
      </React.Fragment>
    </div>
  )
}
