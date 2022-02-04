import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payment.js";
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector("ul" + ".item-list");
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [tofrom.value, amount.valueAsNumber, details.value];
    if (type.value == 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
