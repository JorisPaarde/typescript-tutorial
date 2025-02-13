import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter{

    format(){
        return `${this.client} owes €${this.amount} for ${this.details}`
    }

    constructor(
        readonly client: string,
        readonly amount: number,
        readonly details: string
        ){
    }
}