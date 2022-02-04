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
    let values : [string, number,string]
    values = [ tofrom.value, amount.valueAsNumber, details.value ]
    
    if (type.value == 'invoice'){
        doc = new Invoice( ...values )
    }else{
        doc = new Payment( ...values )
    }

    list.render(doc, type.value, "end");
});
