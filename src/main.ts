import './css/main.css'
import fetchData from './js/fetchData'
import generateLabel from './js/generateLabel'

const sheetId = '1Nq33YMBrCi4XvupSgUI4KSuPA_vOUNC8t1-l3_0BciM'
const range = 'TESTE!A2:M1000' // Replace with the desired range
const apiKey = 'AIzaSyDrCTjhpYJz1YsTry1YniUWK9b2swr4Ibk' // Replace with your Google Sheets API key

let labelsHTML = ''
const products = await fetchData(sheetId, range, apiKey)

if (products) {
  console.log('Sheet data:', products)

  products.forEach((product: string[]) => {

    const productData = [
      product[5],
      product[6],
      product[8],
      product[11],
      product[12]
    ]

    labelsHTML += generateLabel(productData)
  })

} else {
  console.log('Failed to fetch sheet data.')
}

document.querySelector<HTMLDivElement>('#labels')!.innerHTML = labelsHTML
