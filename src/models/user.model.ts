export interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
    createdAt: Date;
}


export class UserModel {
    private static users: User[] = [];
    private static currentId = 1;

    static findAll(): User[] {
        return this.users;
    }

    static findById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    static create(data: User): User {
        const newUser: User = {
            id: this.currentId++,
            name: data.name,
            email: data.email,
            age: data.age,
            createdAt: new Date()
        }
        this.users.push(newUser);
        return newUser;
    }

    static update(id: number, data: Partial<User>): User | undefined {
        const user = this.findById(id);
        if(!user) return undefined;

        Object.assign(user,data);
        return user;
    }

    static delete(id: number): boolean {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) return false;
    
        this.users.splice(index, 1);
        return true;
    }


}