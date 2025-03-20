export default function generateLabel(product: Array<string>) {

  const [name, unit, brand, pvp, price] = product

  return `
    <div class="card">
      <h2 class="card__name">${name}</h2>
      ${
        brand ? `<div>${brand}</div>` : ''
      }
      <div>
        <span class="card__pvp">${pvp}</span> / ${unit}</div>
      <div>P. Custo: ${price}</div>
    </div>
  `
}