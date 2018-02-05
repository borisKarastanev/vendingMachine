import * as fs from "fs";
import * as path from "path";

export default class Util {
    static path = path;
    static fs = fs;

    static coffeeListPath = path.join(__dirname, "../../assets/coffeeList.json");
    static usersListPath = path.join(__dirname, "../../assets/users.json");

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

    static readUsersList(): Promise<any> {
        return new Promise((resolve, reject) => {
            fs.readFile(this.usersListPath, "utf8", (usersListError, users) => {
                if (usersListError) {
                    reject(usersListError);
                }

                try {
                    users = JSON.parse(users);

                } catch (jsonParseError) {
                    reject(jsonParseError);
                }

                resolve(users);
            });
        });
    }
}
