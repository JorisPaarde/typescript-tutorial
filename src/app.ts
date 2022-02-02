import { Invoice } from "./classes/invoice.js"
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js"


const form = document.querySelector(".new-item-form") as HTMLFormElement

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// list template instance
const ul = document.querySelector("ul" + ".item-list") as HTMLUListElement;
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc : HasFormatter;
    
    if (type.value == 'invoice'){
        doc = new Invoice( tofrom.value, amount.valueAsNumber, details.value )
    }else{
        doc = new Payment( tofrom.value, amount.valueAsNumber, details.value )
    }

    list.render(doc, type.value, "end");
});