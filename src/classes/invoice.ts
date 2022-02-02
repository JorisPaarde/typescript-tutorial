export class Invoice{

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