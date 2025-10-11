export default function getRange(sheetName: string, columns: string[]) {

  const range = columns.map(column => `ranges=${sheetName}!${column}:${column}`).join('&')

  return range

}