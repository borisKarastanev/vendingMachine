export class PaymentService implements IPaymentService {
    constructor() {

    }

    paymentMethodsList(): Array<string> {
        const methodsList: Array<string> = ["cash", "credit card", "bitcoin"];

        return methodsList;
    }

    acceptPayment(): Promise<any> {
        return new Promise((resolve, reject) => {

        })
    }

    returnChange(coffeePrice: number): Promise<number> {
        return Promise.resolve(1);
    }

}