module.exports = ({ dimensions = [], variants = [] }) => {
  return ({ addUtilities, e }) => {
    const newUtilities = Object.keys(dimensions).map(key => {
      return {
        [`.aspect-ratio-${e(key)}`]: {
          height: 0,
          paddingBottom: `${(dimensions[key][1] / dimensions[key][0]) * 100}%`,
        },
      }
    })

    addUtilities(newUtilities, variants)
  }
}
