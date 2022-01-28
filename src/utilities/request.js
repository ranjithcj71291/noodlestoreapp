
const request = (data, duration = 1000) => (
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), duration)
  })
)

export default request
