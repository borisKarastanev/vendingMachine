import * as fs from "fs";

export class CoffeeService implements ICoffeeService {

    constructor() {

    }

    getCoffeeList(): Promise<any> {
        const coffeeListPath = `${__dirname}/../../assets/coffeeList.json`;
        return new Promise((resolve, reject) => {
            fs.readFile(coffeeListPath, "utf8", (err, list) => {
                if (err) {
                    reject(err);
                }
                resolve(JSON.parse(list));
            });
        });
    }
}