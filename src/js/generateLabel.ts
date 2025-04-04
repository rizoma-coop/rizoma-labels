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
        <div class="l-row --space-between --end">
          ${
            brand ? `<h3 class="card__brand">${brand}</h3>` : ''
          }
          ${
            origin ? `<span>ORIGEM: ${origin}</span>` : ''
          }
        </div>
      </div>
      <span class="separator"></span>
      <div class="card__body">
        <div>
          <span class="card__pvp">${pvp}</span>
          <span>€${getUnit(unit)}</span>
        </div>
        <div class="l-row --space-between">
          <div class="__full u-uppercase u-align-right l-stack">
            <div>IVA:</div>
            <div>Margem:</div>
            <div>P.Custo:</div>
          </div>
          <div class="l-stack">
            <div class="u-font-bold u-align-right">${iva}%</div>
            <div class="u-font-bold u-align-right">${markup}%</div>
            <div class="u-font-bold u-align-right">${price}€</div>
          </div>
        </div>
      </div>
      <span class="separator"></span>
      <div class="card__footer">
        <div>
          <span class="card__checkbox"></span>
          Bio
        </div>
        <div>
          <span class="card__checkbox"></span>
          Rizomi
        </div>
        <div>
          <span class="card__checkbox"></span>
          Vegan
        </div>
        <div>
          <span class="card__checkbox"></span>
          Peq. Prod.
        </div>
        <div>
          <span class="card__checkbox"></span>
          < 50km
        </div>
      </div>
    </div>
  `
}