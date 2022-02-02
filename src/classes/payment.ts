
import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter{

    format(){
        return `${this.recipient} is owed €${this.amount} for ${this.details}`
    }

    constructor(
        readonly recipient: string,
        readonly amount: number,
        readonly details: string
        ){
    }
}