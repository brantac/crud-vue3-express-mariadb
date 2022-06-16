export interface IUser {
    user_id: number;
    name: string;
    email: string;
    password: string;
    cpf: string;
    address_id: number;
}

export class UserService {
    public async fetchAllUsers(url: string): Promise<IUser[]> {
        try {
            const users = await fetch(url);
            const usersJSON = await users.json();
            return usersJSON;
        } catch (error) {
            console.error("Error fetching users: ", error);
            return [];
        }
    }
}