import './css/main.css'
import fetchData from './js/fetchData'
import generateLabel from './js/generateLabel'

const sheetId = import.meta.env.VITE_SHEET_ID as string
const range = import.meta.env.VITE_RANGE as string
const apiKey = import.meta.env.VITE_API_KEY as string

let labelsHTML = ''
const products = await fetchData(sheetId, range, apiKey)

if (products) {

  products.forEach((product: string[]) => {
    const isToPrint = product[8] === 'FALSE'
    if (isToPrint) {
      labelsHTML += generateLabel(product)
    }
  })

} else {
  console.log('Failed to fetch sheet data.')
}

document.querySelector<HTMLDivElement>('#labels')!.innerHTML = labelsHTML
document.querySelector<HTMLButtonElement>('#print')!.addEventListener('click', () => {
  window.print()
})