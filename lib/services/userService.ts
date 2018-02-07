import util from "../shared/util";

export class UserService implements IUserService {

    login(username: string, password: string) {
        let userCredentials: any;
        return util.promptCredentials()
        .then((credentials: any) => {
            userCredentials = credentials;
            return this.readUsersList();
        })
        .then((list: any) => this.validateUser(list, userCredentials)
        .then((validUser: any) => {
            console.log(`Welcome back ${validUser[0].username}`);
            
            return validUser;
        })
        .catch((loginError) => {
            return Promise.reject(loginError);
        }));
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
            resolve("not implemented yet!");
        });
    }

    private validateUser(usersList: any, userCredentials: any): Promise<any> {
        return new Promise((resolve, reject) => {
            const validUser = usersList.users.filter((user: any) => {
                return user.username === userCredentials.name &&
                    user.password === userCredentials.password;
            });

            if (validUser.length === 0) {
                reject(new Error("Not a valid user! Please try again!"));
            }

            delete validUser[0].password; // BAD!!! this should be done on a database level in a real world app!!!
            resolve(validUser);
        });
    }
}
