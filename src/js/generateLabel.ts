export default function generateLabel(product: Array<string>) {

  const [name, unit, brand, iva, markup, score] = product

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
        <div class="card__details">
          <table>
            <tr>
              <td>P.Custo</td>
              <td class="u-font-bold u-text-right">€</td>
            </tr>
            <tr>
              <td>IVA</td>
              <td class="u-font-bold u-text-right">${iva || ''}%</td>
            </tr>
            <tr>
              <td>Mark-up</td>
              <td class="u-font-bold u-text-right">${markup.split(',')[1] || ''}%</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="card__footer">
        <div class="score score--large"><!--${score}-->A</div>
        <ul>
          <li>
            <span class="score">B</span>
            Lorem ipsum
          </li>
          <li>
            <span class="score">B</span>
            Lorem ipsum
          </li>
          <li>
            <span class="score">C</span>
            Lorem ipsum
          </li>
          <li>
            <span class="score">B</span>
            Lorem ipsum
          </li>
          <li>
            <span class="score">B</span>
            Lorem ipsum
          </li>
          <li>
            <span class="score">C</span>
            Lorem ipsum
          </li>
        </ul>
      </div>
    </div>
  `
}