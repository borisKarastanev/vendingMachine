
export class OrderService implements IOrderService {
    constructor(
        private userService: IUserService,
        private coffeeService: ICoffeeService,
        private paymentService: IPaymentService
    ) {
        this.userService = userService;
        this.coffeeService = coffeeService,
        this.paymentService = paymentService
    }

    buyCoffee(user: any): Promise<any> {
        const loggedUser = user;
        return this.coffeeService.getCoffeeList()
        .then((list:any) => {
            const orderId = list.coffeeList[1]._id;
            return this.coffeeService.selectCoffee(list.coffeeList, orderId);
        })
        .then((order: Array<any>) => {
            const paymentMethods: any = this.paymentService.paymentMethodsList;
            const payment = {
                type: paymentMethods[0],
                amount: 5
            };

            return this.paymentService.acceptPayment(payment, order);
        })
        .then((paymentResult: string) => {
            console.log(paymentResult);
            return this.userService.updateBalance(loggedUser, 5);
        })
        .catch((buyCoffeeError) => {
            console.error(buyCoffeeError);
        });
    }
}