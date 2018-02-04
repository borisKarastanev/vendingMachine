interface ICoffeeService {
    getCoffeeList(): Promise<any>;
    selectCoffee(list: Array<any>, coffeeId: number): Promise<Array<any>>;
}