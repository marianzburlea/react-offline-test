import React from 'react'
import { create } from 'react-test-renderer'
import Tile from '.'

describe('@Tile', () => {
  it('should match the snapshot', () => {
    const tile = create(<Tile fuel="solar" perc={100} />)
    expect(tile.toJSON()).toMatchSnapshot()
  })
})
