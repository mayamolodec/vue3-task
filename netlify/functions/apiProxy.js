
export async function handler(event, context) {
  const { path, queryStringParameters } = event
  const apiKey = process.env.API_KEY

  const queryObj = { ...queryStringParameters, key: apiKey }
  const query = new URLSearchParams(queryObj).toString()
  const backendPath = path.replace("/.netlify/functions/apiProxy", "")
  const url = `http://109.73.206.144:6969${backendPath}?${query}`

  try {
    const response = await fetch(url)
    const data = await response.json()

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    }
  }
}
