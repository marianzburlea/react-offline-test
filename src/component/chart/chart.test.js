import React from 'react'
import { create } from 'react-test-renderer'
import Chart from '.'

describe('@Chart', () => {
  it('should match the snapshot', () => {
    const data = [
      {fuel: 'solar', perc: 75},
      {fuel: 'wind', perc: 25},
    ]
    const chart = create(<Chart data={data} />)
    expect(chart.toJSON()).toMatchSnapshot()
  })
})
