import React from 'react'
import Typography from '@mui/material/Typography'
import Title from './Title'

export default function SummaryBox(props) {

    const container = {
        margin: '5em 1em'
    }
  return (
    <div style={container}>
      <React.Fragment>
        <Title>Summary</Title>
        
        <Typography component='p' variant='h6'>
          You have experienced {props.symptom} X out of X days.
        </Typography>
        <Typography color='text.secondary' sx={{ flex: 1 }}>
          on 15 March, 2019
        </Typography>
      </React.Fragment>
    </div>
  )
}
