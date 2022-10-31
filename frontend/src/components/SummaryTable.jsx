import React from 'react'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import Title from './Title'

export default function SummaryTable(props) {
  const container = {
    margin: '5em 1em',
  }

  const formatDate = (entryDate) => {
    var dateToFormat = new Date(entryDate)
    var options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    var formattedDate = dateToFormat.toLocaleDateString('default', options)
    return formattedDate
  }

  const formatSleepHours = (entrySleep) => {
    const decimal = entrySleep.slice(-1)
    return decimal === '0' ? entrySleep.slice(0, -2) : entrySleep
  }

  return (
    <div style={container}>
      <React.Fragment>
        <Title>Recent Occurences of {props.symptom}</Title>
        <Table size='small'>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Was {props.symptom} experienced that day?</TableCell>
              <TableCell>Severity</TableCell>
              <TableCell align='right'>Sleep</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{formatDate(row.time)}</TableCell>
                <TableCell>{row.experienced_today}</TableCell>
                <TableCell>{row.severity}</TableCell>
                <TableCell align='right'>{`${formatSleepHours(
                  row.sleep
                )}h`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    </div>
  )
}
