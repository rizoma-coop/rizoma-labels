import { FILTERS } from '../utils/config'

export default async function initFilters() {

  await getLocalStorageFilters()

  filterLabels()

  const filtersElements = document.querySelectorAll<HTMLInputElement>('[name="filter-category"], [name="filter-exist"], [name="filter-done"]')
  
  filtersElements.forEach((element: HTMLInputElement) => {
    element.addEventListener('change', () => {
      filterLabels()
    })
  })

  return "done"

}

function filterLabels() {
  const labels = document.getElementById('labels')?.querySelectorAll('.js_card') as NodeListOf<HTMLDivElement>

  if (!labels) return

  const filtersToHide = getFilters()
  localStorage.setItem('filtersToHide', JSON.stringify(filtersToHide))

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

async function getLocalStorageFilters() {
  
  const localStorageFilters = localStorage.getItem('filtersToHide')
  
  if (!localStorageFilters) return

  const filters = await JSON.parse(localStorageFilters)

  FILTERS.forEach((filterName: string) => {
    const checkbox = document.querySelector(`[data-filter="${filterName}"]`)
    if (checkbox) {
      updateCheckbox(checkbox, filters, filterName)
    }
  })
}

function updateCheckbox(checkbox: any,filters: string[], filterName: string) {

  if (filters.includes(filterName)) {
    checkbox.removeAttribute('checked')
  } else {
    checkbox.setAttribute('checked', '')
  }
}