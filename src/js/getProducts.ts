import { columnsArray } from './config'
import { Product, Category } from './types'

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
          done: false,
          exist: false,
          category: 'others' as Category,
        } as Product
      }

      const columnName = columnsArray[columnIndex]

      if (columnName) {

        const product = products[rowIndex]

        if (columnName === 'name') {
          const { name, unit, brand } = getProductDetails(value)
          product.name = name
          product.unit = unit
          product.brand = brand
        } else if (columnName.startsWith('score')) {

          if (columnName.endsWith('Description')) {
            product.scores[product.scores.length - 1].description = value
          } else {
            product.scores.push({
              score: value || '',
              description: '',
            })
          }
        } else if (columnName === 'fresh') {
          product.category = value === 'TRUE' ? 'fresh' : 'others'
        } else if (columnName === 'exist' || columnName === 'done') {
          product[columnName] = value === 'TRUE'
        } else if (columnName === 'iva' || columnName === 'markup' || columnName === 'finalScore') {
          product[columnName] = value || ''
        }
        
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