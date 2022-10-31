const formatDate = (entryTime) => {
  const dateToFormat = new Date(entryTime)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const formattedDate = dateToFormat.toLocaleDateString('default', options)
  return formattedDate
}

export { formatDate }
