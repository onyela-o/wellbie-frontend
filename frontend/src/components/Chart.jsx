import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from 'recharts'
import Title from './Title'

export default function Chart(props) {
  const { symptomEntries, symptom } = props
  // Generate the Data
  function createData(blank, severity) {
    return { blank, severity }
  }

  const data = symptomEntries
    .map((entry) => createData('', entry.severity))
    .reverse()

  const theme = useTheme()

  return (
    <React.Fragment>
      <Title>
        <b>Visual Summary</b>
      </Title>
      <ResponsiveContainer width='100%' aspect={3}>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey='blank'
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
            tick={false}
          >
            {' '}
            <Label
              angle={0}
              position='insideRight'
              style={{
                textAnchor: 'left',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Today
            </Label>
          </XAxis>

          <YAxis
            dataKey=''
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
            scale='linear'
          >
            <Label
              angle={270}
              position='left'
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              {symptom}
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type='monotone'
            dataKey='severity'
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}
