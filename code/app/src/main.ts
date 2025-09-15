import './style.css'
import { generateFizzBuzz } from './fizzbuzz.ts'

const createFizzBuzzHtmlContent = (n: number): HTMLDivElement => {
  const values = generateFizzBuzz(n)
  const container = document.createElement('div')
  const list = document.createElement('ul')

  values.forEach(value => {
    const listElement = document.createElement('li')
    listElement.textContent = value
    list.appendChild(listElement)
  });

  container.appendChild(list)
  return container
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    ${createFizzBuzzHtmlContent(16).innerHTML}
  </div>
`

