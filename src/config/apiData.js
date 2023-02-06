export const getApi = async () => {
  return await fetch('http://localhost:8000/api/article', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  })
}
