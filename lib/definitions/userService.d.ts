interface IUserService {
    hasBalance(user: any, itemPrice: number, transaction: string): Promise<string>;
    updateBalance(user: any, itemPrice: number): Promise<any>;
}
