import { SCORES_COLORS } from '../utils/config'
import { Product, Score } from '../utils/types'

export default function generateLabel(product: Product) {

  const {name, unit, brand, iva, markup, scores, finalScore, done, exist, category} = product

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

    <div
      class="card js_card"
      data-category="${category}"
      ${exist ? 'data-exist' : ''}
      ${done ? 'data-done' : ''}
    >
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
            <td class="u-text-right">${iva || ''} %</td>
          </tr>
          <tr>
            <td>Markup</td>
            <td class="u-text-right">${markup || ''} %</td>
          </tr>
        </table>
      </div>
      <div class="card__score">
        <div class="card__score-header">
          <span class="card__score-label">Rizoscore</span>
          <div class="score score--large" style="--score-color: ${SCORES_COLORS[finalScore as keyof typeof SCORES_COLORS]};">${finalScore}</div>
        </div>
        <ul>
          ${scores.map((score: Score) => `
            ${score.score ? /* html */`
            <li>
              <span
                class="score"
                style="--score-color: ${SCORES_COLORS[score.score as keyof typeof SCORES_COLORS]};"
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