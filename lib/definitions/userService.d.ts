interface IUserService {
    hasBalance(user: any, itemPrice: number): Promise<string>;
    updateBalance(user: any, itemPrice: number): Promise<any>;
}