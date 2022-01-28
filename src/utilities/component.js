export const bind = (t) => {
  t.promisedSetState = (newState) => {
    return new Promise((resolve) => {
      t.setState(newState, () => {
        resolve()
      })
    })
  }
}
