import '@awesome.me/webawesome/dist/styles/themes/default.css'
import './css/main.css'

import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js';

import fetchData from './utils/fetchData'
import generateLabel from './js/generateLabel'
import getRange from './utils/getRange'
import getProducts from './js/getProducts'
import initFilters from './js/filters'
import { Product } from './utils/types'
import { SHEET_COLUMNS } from './utils/config'

const sheetId = import.meta.env.VITE_SHEET_ID as string
const sheetName = import.meta.env.VITE_SHEET_NAME as string
const apiKey = import.meta.env.VITE_API_KEY as string

let labelsHTML = ''

const columnsCells = SHEET_COLUMNS.map((column: any) => column.cell)
const range = getRange(sheetName, columnsCells)

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

await initFilters()

document.querySelector<HTMLDivElement>('.js_filters')!.classList.remove('u-loading')
