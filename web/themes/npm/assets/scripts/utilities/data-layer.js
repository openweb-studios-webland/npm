module.exports = {
  push: (category, action = 'Unknown Title', label = 'Play') => {
    window.dataLayer = window.dataLayer || []
    dataLayer.push({
      event: 'dataLayer push event',
      event_category: category,
      event_action: action,
      event_label: label,
    })
  },
}
