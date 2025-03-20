

export default async function fetchData(sheetId: string, range: string, apiKey: string) {
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.values // Returns an array of rows, where each row is an array of values.

  } catch (error) {
    console.error('Error fetching Google Sheet:', error)
    return null // Or handle the error as needed.
  }
}