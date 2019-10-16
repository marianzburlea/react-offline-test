import { sanitizePercentage } from "."

describe('@sanitize', () => {
  it('should sanitize data with values greater than 100', () => {
    const data = [
      { fuel: 'solar', perc: 72 },
      { fuel: 'wind', perc: 234 },
    ]

    const expected = [
      { fuel: 'solar', perc: 72 },
      { fuel: 'wind', perc: 100 },
    ]

    const result = sanitizePercentage(data)

    expect(result).toStrictEqual(expected)
  })
})
