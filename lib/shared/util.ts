import * as path from "path";
import * as fs from "fs";
export default class Util {
    static path = path;
    static fs = fs;

    static coffeeListPath = path.join(__dirname, "../../assets/coffeeList.json");

    static readCoffeeList(): Promise<any> {
        return new Promise((resolve, reject) => {
            fs.readFile(this.coffeeListPath, "utf8", (coffeeListError, list) => {
                if (coffeeListError) {
                    reject(coffeeListError);
                }

                resolve(list);
            });
        });
    }
}