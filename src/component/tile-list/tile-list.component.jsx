import React, { useState, useEffect } from 'react'
import Tile from '../tile/tile.component'
import { StyledBiomass, StyledCoal, StyledImports, StyledGas, StyledNuclear, StyledOther, StyledHydro, StyledSolar, StyledWind } from '../icon'
import { StyledList } from './title-list.style'
import Chart from '../chart'
import { sanitizePercentage } from '../../util'

const iconMap = {
  biomass:  <StyledBiomass />,
  coal: <StyledCoal />,
  imports: <StyledImports />,
  gas: <StyledGas />,
  nuclear: <StyledNuclear />,
  other: <StyledOther />,
  hydro: <StyledHydro />,
  solar: <StyledSolar />,
  wind: <StyledWind />,
}

const TileList = () => {
  const [tileList, updateTileList] = useState([])

  useEffect(() => {
    fetch('https://api.carbonintensity.org.uk/generation')
      .then(r => r.json())
      .then(({ data }) => {
        data = sanitizePercentage(data.generationmix)
        updateTileList(data)
      })
  }, [])

  return (
    <StyledList>
      {tileList.map(({ fuel, perc }) => <Tile key={fuel} fuel={fuel} perc={perc} icon={iconMap[fuel]} />)}
      {tileList.length && <Chart data={tileList} />}
    </StyledList>
  )
}

export default TileList
