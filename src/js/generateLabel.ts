import { Product, Score } from './types'
import { scoreColors } from './config'

export default function generateLabel(product: Product) {

  const {name, unit, brand, iva, markup, scores, finalScore} = product

  function getUnit(unit: string) {
    unit = unit.toLowerCase()
    switch (unit) {
      case undefined:
        return ''
      case 'lt':
        return '/L'
      default:
        return `/${unit}`
    }

  }

  return /* html */`

    <div class="card">
      <div class="card__header">
        <h2 class="card__name">${name}</h2>
        <h3 class="card__brand">${brand}</h3>
      </div>
      <div class="card__body">
        <div class="card__price">
          <span class="card__unit">€${getUnit(unit)}</span>
        </div>
        <table class="card__details">
          <tr>
            <td>P.Custo</td>
            <td class="u-text-right">€</td>
          </tr>
          <tr>
            <td>IVA</td>
            <td class="u-text-right">${iva || ''}%</td>
          </tr>
          <tr>
            <td>Mark-up</td>
            <td class="u-text-right">${markup.split(',')[1] || ''}%</td>
          </tr>
        </table>
      </div>
      <div class="card__footer">
        <div class="score score--large" style="--score-color: ${scoreColors[finalScore as keyof typeof scoreColors]};">${finalScore}</div>
        <ul>
          ${scores.map((score: Score) => `
            ${score.score ? /* html */`
            <li>
              <span
                class="score"
                style="--score-color: ${scoreColors[score.score as keyof typeof scoreColors]};"
              >${score.score}</span>
              ${score.description}
            </li>
            ` : ''}
          `).join('')}
        </ul>
      </div>
    </div>
  `
}