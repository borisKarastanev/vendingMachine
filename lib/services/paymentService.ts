import util from "../shared/util";

export class PaymentService implements IPaymentService {
    constructor(private userService: IUserService) {
        this.userService = userService;
    }

    paymentMethodsList(): Array<string> {
        const methodsList: Array<string> = ["cash", "credit card", "bitcoin"];
        return methodsList;
    }

    acceptPayment(payment: any, item: Array<any>): Promise<any> {
        return util.readUsersList()
            .then((usersList) => {
                const mockUser = usersList.users[1];
                return this.userService.hasBalance(mockUser, item[0].price);
            })
            .then((result) => {
                return result;
            })
            .catch((paymentError) => {
                return Promise.reject(paymentError)
            });
    }

    returnChange(coffeePrice: number): Promise<number> {
        return Promise.resolve(1);
    }

}