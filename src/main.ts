import './css/main.css'
import fetchData from './js/fetchData'
import generateLabel from './js/generateLabel'
import getRange from './js/getRange'
import getProducts from './js/getProducts'
import { Product } from './js/types'

const sheetId = import.meta.env.VITE_SHEET_ID as string
const sheetName = import.meta.env.VITE_SHEET_NAME as string
const columns = import.meta.env.VITE_SHEET_COLUMNS as string
const apiKey = import.meta.env.VITE_API_KEY as string

let labelsHTML = ''

const columnsArray = columns.split(',')
const range = getRange(sheetName, columnsArray)

const data = await fetchData(sheetId, range, apiKey)

if (data) {
  const products = getProducts(data) as Product[]
  if (products) {

    products.forEach((product: Product) => {
      labelsHTML += generateLabel(product)
    })
  } else {
    console.log('Failed to get products.')
  }

} else {
  console.log('Failed to fetch sheet data.')
}

document.querySelector<HTMLDivElement>('#labels')!.innerHTML = labelsHTML
document.querySelector<HTMLButtonElement>('#print')!.addEventListener('click', () => {
  window.print()
})


