export default function initFilters() {

  const filtersElements = document.querySelectorAll<HTMLInputElement>('[name="filter-category"], [name="filter-exist"], [name="filter-done"]')
  
  filtersElements.forEach((element: HTMLInputElement) => {
    element.addEventListener('change', () => {
      filterLabels()
    })
  })

  
}

function filterLabels() {
  const labels = document.getElementById('labels')?.querySelectorAll('.js_card') as NodeListOf<HTMLDivElement>

  if (!labels) return

  const filtersToHide = getFilters()

  console.log(filtersToHide)

  labels.forEach((label: HTMLDivElement) => {
    const category = label.getAttribute('data-category') as string
    const exist = label.hasAttribute('data-exist') ? 'exist' : ''
    const done = label.hasAttribute('data-done') ? 'done' : ''

    const match = filtersToHide.some((filter) => {
      return filter === category || filter === exist || filter === done
    })

    if (match) {
      label.style.display = 'none'
    } else {
      label.removeAttribute('style')
    }
  })
}

function getFilters() {

  const filtersToHide: string[] = []

  const filterCategory = document.querySelectorAll('[name="filter-category"]')

  // @ts-ignore
  const isExistFilterChecked = document.querySelector('[name="filter-exist"]')?.checked
  // @ts-ignore
  const isDoneFilterChecked = document.querySelector('[name="filter-done"]')?.checked


  filterCategory.forEach((checkbox: any) => {
    if (!checkbox.checked) {
      filtersToHide.push(checkbox.getAttribute('value') as string)
    }
  })

  if (!isExistFilterChecked) {
    filtersToHide.push("exist")
  }
  if (!isDoneFilterChecked) {
    filtersToHide.push("done")
  }
  
  return filtersToHide
}