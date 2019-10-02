module.exports = ({ transitions = [], variants = [] }) => {
  return ({ addUtilities, e }) => {
    const newUtilities = Object.keys(transitions).map(key => {
      const className = key === 'default' ? 'transition' : `transition-${key}`

      return {
        [`.${e(className)}`]: {
          transition: transitions[key],
        },
      }
    })

    addUtilities(newUtilities, variants)
  }
}
