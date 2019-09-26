module.exports = ({ variants = [] }) => {
  return ({ addUtilities }) => {
    const newUtilities = {
      '.screen-reader-only': {
        border: '0',
        clip: 'rect(0 0 0 0)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: '0px',
        position: 'absolute',
        width: '1px',
      },
      '.screen-reader-undo': {
        clip: 'auto',
        height: 'auto',
        margin: '0',
        overflow: 'visible',
        position: 'absolute',
        width: 'auto',
      },
    }

    addUtilities(newUtilities, variants)
  }
}
