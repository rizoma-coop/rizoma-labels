export default function generateLabel(product: Array<string>) {

  const [name, unit, brand, origin, pvp, iva, markup, price] = product

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

  return `

    <div class="card">
      <div class="card__header">
        <h2 class="card__name">${name}</h2>
        <div class="u-uppercase">Marca, origem</div>
        <h3 class="card__brand">
          ${brand}
          ${
            origin ? `, ${origin}` : ''
          }
        </h3>
      </div>
      <div class="card__body">
        <div class="card__price">
          <span class="card__pvp">${pvp}</span>
          <span class="card__unit">€${getUnit(unit)}</span>
        </div>
        <div class="card__details">
          <table>
            <tr>
              <td>IVA</td>
              <td class="u-font-bold u-text-right">${iva || ''}%</td>
            </tr>
            <tr>
              <td>Mark-up</td>
              <td class="u-font-bold u-text-right">${markup || ''}%</td>
            </tr>
            <tr>
              <td>P.Custo</td>
              <td class="u-font-bold u-text-right">${price || ''}€</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="card__footer">
          <img src="footer.webp" alt="footer" class="card__footer-img" />
      </div>
    </div>
  `
}