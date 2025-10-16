import { columnsArray } from './config'
import { Product } from './types'

export default function getProducts(data: any[]) {

  const products: Product[] = []

  data.forEach((column: any, columnIndex: number) => {

    column.values.forEach((value: any, rowIndex: number) => {

      if (rowIndex === 0 || rowIndex === 1) {
        return // ignore first and second rows
      } else {
        rowIndex = rowIndex - 2 // subtract 2 to get the correct index
      }

      value = value[0] || '' // if value is an array, get the first element
      if (value === '#N/A') value = ''

      if (!products[rowIndex]) {
        products[rowIndex] = {
          name: '',
          unit: '',
          brand: '',
          iva: '',
          markup: '',
          scores: [],
          finalScore: '',
        } as Product
      }

      const columnName = columnsArray[columnIndex]

      if (columnName === 'name') {
        const { name, unit, brand } = getProductDetails(value)
        products[rowIndex].name = name
        products[rowIndex].unit = unit
        products[rowIndex].brand = brand
      } else if (columnName.startsWith('score')) {

        if (columnName.endsWith('Description')) {
          products[rowIndex].scores[products[rowIndex].scores.length - 1].description = value
        } else {
          products[rowIndex].scores.push({
            score: value || '',
            description: '',
          })
        }
      } else {
        products[rowIndex][columnName as keyof Product] = value || ''
      }

    })
  })

  // sort products by name
  products.sort((a: Product, b: Product) => {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  })

  return products
}


function getProductDetails(value: string) {
  const details = value.split(' - ')
  return {
    name: details[0] || '',
    unit: details[1] || '',
    brand: details[2] || '',
  }
}