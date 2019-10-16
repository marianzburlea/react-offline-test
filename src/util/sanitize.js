export const sanitizePercentage = data => data
  .map(({ fuel, perc }) => ({
    fuel,
    perc: Math.abs(perc) > 100 ? 100 : Math.abs(perc),
  }))
