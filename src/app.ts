import { Invoice } from "./classes/invoice.js"

const invOne = new Invoice('joris', 32.25, 'Hele grote dinges.')
const invTwo = new Invoice('melinda', 132.25, 'Grotere dinges.')

const invoices: Invoice[] = []
invoices.push(invOne, invTwo)


invoices.forEach(inv => { console.log(inv.format()) })

const form = document.querySelector(".new-item-form") as HTMLFormElement

const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(type.value)
    console.log(tofrom.value)
    console.log(details.value)
    console.log(amount.valueAsNumber)
});