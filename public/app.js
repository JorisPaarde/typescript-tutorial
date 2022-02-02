import { Invoice } from "./classes/invoice.js";
const invOne = new Invoice('joris', 32.25, 'Hele grote dinges.');
const invTwo = new Invoice('melinda', 132.25, 'Grotere dinges.');
const invoices = [];
invoices.push(invOne, invTwo);
invoices.forEach(inv => { console.log(inv.format()); });
const form = document.querySelector(".new-item-form");
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value);
    console.log(tofrom.value);
    console.log(details.value);
    console.log(amount.valueAsNumber);
});
