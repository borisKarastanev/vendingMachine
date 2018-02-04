import * as fs from "fs";

export class CoffeeService implements ICoffeeService {

    constructor() {

    }

    getCoffeeList(): Promise<any> {
        const coffeeListPath = `${__dirname}/../../assets/coffeeList.json`;
        return new Promise((resolve, reject) => {
            fs.readFile(coffeeListPath, "utf8", (coffeeListError, list) => {
                if (coffeeListError) {
                    reject(coffeeListError);
                }

                try {
                    list = JSON.parse(list);
                } catch(jsonError) {
                    reject(jsonError);
                }

                resolve(list);
            });
        });
    }

    selectCoffee(list: Array<any>, coffeeId: number): Promise<Array<any>> {
        return new Promise((resolve, reject) => {

            if (list.constructor !== Array) {
                reject(new Error("Array required"));
            }

            const selectedOrder = list.filter((item) => {
                return item._id === coffeeId;
            });
            resolve(selectedOrder);
        });
    }
}