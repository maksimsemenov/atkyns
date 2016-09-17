export const loadState = () => {
  try {
    const serialisedState = localStorage.getItem('state')
    if (serialisedState === null) {
      return undefined
    }
    return JSON.parse(serialisedState)
  } catch (err) {
    console.log(err)
    return undefined
  }
}

export const saveState = (state) => {
  try {
    localStorage.setItem('state', JSON.stringify(state))
  } catch (err) {
    console.log(err)
  }
}
