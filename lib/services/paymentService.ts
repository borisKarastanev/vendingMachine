import util from "../shared/util";

export class PaymentService implements IPaymentService {
    constructor() {

    }

    paymentMethodsList(): Array<string> {
        const methodsList: Array<string> = ["cash", "credit card", "bitcoin"];

        return methodsList;
    }

    acceptPayment(uid: number, item: Array<any>): Promise<any> {
        return util.readUsersList()
            .then((usersList) => {
                // TODO Migrate to user Service 
                return new Promise((resolve, reject) => {
                    usersList.users.forEach((user: any) => {
                        if (user._id === uid) {
                            if (user.balance >= item[0].price) {
                                resolve ("payment accepted!");
                            } else {
                                reject(new Error("Insufficient funds"));
                            }
                        }
                    });
                })  
            })
            .catch((paymentError) => {
                return Promise.reject(paymentError)
            });
    }

    returnChange(coffeePrice: number): Promise<number> {
        return Promise.resolve(1);
    }

}