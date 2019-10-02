module.exports = ({ variants = [] }) => {
  return ({ addUtilities, e }) => {
    const newUtilities = {
      [`.${e('translate-1/2')}`]: {
        transform: 'translate(-50%, -50%)',
      },
      [`.${e('translate-x-1/2')}`]: {
        transform: 'translateX(-50%)',
      },
      [`.${e('translate-y-1/2')}`]: {
        transform: 'translateY(-50%)',
      },
    }

    addUtilities(newUtilities, variants)
  }
}
