import util from "../shared/util";

export class UserService implements IUserService {

    login(username: string, password: string) {
        // const stdIn = process.openStdin();

        // return new Promise ((resolve, reject) => {
        //     stdIn.on("data", (data) => {
        //         process.stdin.destroy();
        //         resolve(data);
        //     })
        // });

        return this.readUsersList()
        .then((list: any) => {
            const validUser = list.users.filter((user: any) => {
                return user.username === username && user.password === password;
            });

            if (validUser.length === 0) {
                return Promise.reject(new Error("Not a valid user! Please try again!"));
            }
            delete validUser[0].password; // BAD!!! this should be done on a database level in a real world app!!!

            return validUser;
        });
    }

    readUsersList(): Promise<any> {
        return new Promise((resolve, reject) => {
            util.fs.readFile(util.usersListPath, "utf8", (usersListError, users) => {
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

    hasBalance(user: any, itemPrice: number, transaction: string): Promise<string> {
        return new Promise((resolve, reject) => {
            if (user.balance[transaction] >= itemPrice) {
                resolve("payment accepted!");
            } else {
                reject(new Error("Insufficient funds"));
            }
        });
    }

    updateBalance(user: any, itemPrice: number): Promise<string> {
        return new Promise((resolve, reject) => {
            reject(new Error("not implemented yet!"));
        });
    }
}
