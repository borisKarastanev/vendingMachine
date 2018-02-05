
import util from "../shared/util";

export class CoffeeService implements ICoffeeService {

    getCoffeeList(): Promise<any> {
        return util.readCoffeeList()
            .then((list) => {
                try {
                    list = JSON.parse(list);
                } catch (jsonError) {
                    return Promise.reject(jsonError);
                }

                return list;
            })
            .catch((readListError) => {
                return Promise.reject(readListError);
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
