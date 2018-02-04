import { CoffeeService } from './lib/services/coffeeService';

const coffeeService = new CoffeeService();

coffeeService.getCoffeeList()
.then((list) => {
    const orderId = list.coffeeList[1]._id;
    return coffeeService.selectCoffee(list.coffeeList, orderId)
})
.then((order) => {
    console.log(order);
})
.catch((err) => {
    console.error(err);
})