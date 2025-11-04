export type Category =
| 'fresh'
| 'transformed'
| 'dried'
| 'not-food'
| 'others'

export type Score = {
  score: string
  description: string
}

export type Product = {
  name: string
  unit: string
  brand: string
  iva: string
  markup: string
  finalScore: string
  scores: Score[]
  exist: boolean
  done: boolean
  category: Category
}