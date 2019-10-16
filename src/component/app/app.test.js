import React from 'react'
import { create } from 'react-test-renderer'
import App from '.'

describe('@App', () => {
  it('should match the snapshot', () => {
    const app = create(<App />)

    expect(app.toJSON()).toMatchSnapshot()
  })
})
