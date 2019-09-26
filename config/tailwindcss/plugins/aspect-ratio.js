module.exports = ({ aspectRatios = [], variants = [] }) => {
  return ({ addUtilities, e }) => {
    const newUtilities = Object.keys(aspectRatios).map(key => {
      return {
        [`.aspect-ratio-${e(key)}`]: {
          height: 0,
          paddingBottom: `${(aspectRatios[key][1] / aspectRatios[key][0]) * 100}%`,
        },
      }
    })

    addUtilities(newUtilities, variants)
  }
}
