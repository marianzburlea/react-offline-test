import React from 'react'
import { create } from 'react-test-renderer'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import TileList from '.'
import fakeResponse from './tile-list.mock-data'

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe('@tile list', () => {
  it('should match the snapshot', () => {
    const tileList = create(<TileList />)
    expect(tileList.toJSON()).toMatchSnapshot()
  })

  it('should show a list of energy generation', async () => {
    jest
      .spyOn(window, 'fetch')
      .mockImplementation(() => {
        const fetchResponse = {
          json: () => Promise.resolve(fakeResponse),
        }

        return Promise.resolve(fetchResponse)
      })

    await act(async () => {
      render(<TileList />, container)
    })

    expect(container.textContent).toBe('biomass4.8coal2.5imports8.7gas46.5nuclear16.1other0.3hydro0.9solar14.6wind5.6biomasscoalimportsgasnuclearotherhydrosolarwind015304560perc')

    window.fetch.mockRestore()
  })
})
