interface IPaymentService {
    paymentMethodsList(): Array<string>;
    acceptPayment(userId: number, item: Array<any>): Promise<any>;
    returnChange(amount: number): Promise<number>
}