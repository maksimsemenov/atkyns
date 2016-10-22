export const loadState = () => {
  try {
    const serialisedState = localStorage.getItem('cases')
    if (serialisedState === null) {
      return undefined
    }
    return JSON.parse(serialisedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    localStorage.setItem('cases', JSON.stringify(state))
  } catch (err) {
    console.log(err)
  }
}
