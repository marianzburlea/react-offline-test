import React from 'react'
import { StyledTile, StyledPercentage, StyledTitle } from './tile.style'

const Tile = ({ fuel, perc, icon }) => {
  return (
    <StyledTile>
      <StyledTitle>{fuel}</StyledTitle>
      <StyledPercentage>{perc}</StyledPercentage>
      <div>{icon}</div>
    </StyledTile>
  )
}

export default Tile
