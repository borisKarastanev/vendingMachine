import { PaymentService } from './lib/services/paymentService';
import { CoffeeService } from './lib/services/coffeeService';

const coffeeService = new CoffeeService();
const paymentService = new PaymentService();

coffeeService.getCoffeeList()
.then((list) => {
    const orderId = list.coffeeList[1]._id;
    return coffeeService.selectCoffee(list.coffeeList, orderId)
})
.then((order) => {
    return paymentService.acceptPayment(1, order);
})
.then((paymentResult) => {
    console.log(paymentResult);
})
.catch((err) => {
    console.error(err);
})