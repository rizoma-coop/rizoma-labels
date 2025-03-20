﻿import './css/main.css'
import fetchData from './js/fetchData'
import generateLabel from './js/generateLabel'

const sheetId = '1Nq33YMBrCi4XvupSgUI4KSuPA_vOUNC8t1-l3_0BciM'
const range = 'TESTE!A2:M1000' // Replace with the desired range
const apiKey = 'AIzaSyDrCTjhpYJz1YsTry1YniUWK9b2swr4Ibk' // Replace with your Google Sheets API key

let labelsHTML = ''
const products = await fetchData(sheetId, range, apiKey)

if (products) {

  products.forEach((product: string[]) => {
    labelsHTML += generateLabel(product)
  })

} else {
  console.log('Failed to fetch sheet data.')
}

document.querySelector<HTMLDivElement>('#labels')!.innerHTML = labelsHTML
