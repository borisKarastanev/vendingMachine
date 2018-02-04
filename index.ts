import { CoffeeService } from './lib/services/coffeeService';

const coffeeService = new CoffeeService();

coffeeService.getCoffeeList()
.then((list) => {
    console.log(list.coffeeList);
})
.catch((err) => {
    console.error(err);
})