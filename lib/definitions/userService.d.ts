interface IUserService {
    hasBalance(user: any, itemPrice: number): Promise<string>;
}