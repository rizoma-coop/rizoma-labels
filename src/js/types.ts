
export type Product = {
  name: string
  unit: string
  brand: string
  iva: string
  markup: string
  finalScore: string
  scores: Score[]
}

export type Score = {
  score: string
  description: string
}