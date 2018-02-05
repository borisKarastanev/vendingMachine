interface IPaymentService {
    paymentMethodsList(): Array<any>;
    acceptPayment(payment: any, item: Array<any>): Promise<any>;
    returnChange(amount: number): Promise<number>;
}
