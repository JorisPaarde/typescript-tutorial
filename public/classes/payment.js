export class Payment {
    constructor(recipient, amount, details) {
        this.recipient = recipient;
        this.amount = amount;
        this.details = details;
    }
    format() {
        return `${this.recipient} is owed €${this.amount} for ${this.details}`;
    }
}
