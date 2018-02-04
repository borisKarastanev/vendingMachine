interface IPaymentService {
    paymentMethodsList(): Array<string>;
    acceptPayment(): Promise<any>;
    returnChange(amount: number): Promise<number>
}