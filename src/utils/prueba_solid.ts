export interface IUser {
    name: string
    age: number
    email: string
}

const DEFAULT_USER = { name: '', age: 0, email: '' }

export class UserBuildError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'UserBuildError'
    }
}

export class UserDatabaseError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'UserDatabaseError'
    }
}

export class User implements IUser {

    // IUser
    public name: string
    public age: number
    public email: string

    constructor({ age, name, email }: IUser) {
        this.name = name
        this.age = age
        this.email = email
    }

}

export class UserValidator {
    public static validate(userProps: IUser): void {
        if (typeof userProps.name !== 'string' || userProps.name.trim().length === 0) {
            throw new UserBuildError('El nombre debe ser una cadena no vacía')
        }

        if (typeof userProps.age !== 'number' || isNaN(userProps.age)) {
            throw new UserBuildError('La edad debe ser un número')
        }
    }
}

export class UserBuilder {

    static newUser(): UserBuilder {
        return new UserBuilder(DEFAULT_USER)
    }

    private constructor(private user: IUser) {}

    public withName(name: string): UserBuilder {
        const newUserProps = { ...this.user, name }
        UserValidator.validate(newUserProps)
        this.user.name = name
        return this
    }

    public withAge(age: number): UserBuilder {
        const newUserProps = { ...this.user, age }
        UserValidator.validate(newUserProps)
        this.user.age = age
        return this
    }

    public build(): User {
        return new User(this.user)
    }
}

export abstract class UserFactory {
    public static createUser({ age, name }: IUser): User {
        const user = UserBuilder
            .newUser()
            .withName(name)
            .withAge(age)
            .build()

        return new User(user)
    }
}

export class UsersDatabase {
    private users: IUser[] = [] // simula la base de datos

    public addUser(user: User): void {
        try {
            this.users.push(user)
        } catch (error) {
            throw new UserDatabaseError('Error al agregar usuario a la base de datos')
        }
    }

    public getUsers(): IUser[] {
        return this.users
    }
}

export class UserRepository {
    private readonly db: UsersDatabase = new UsersDatabase()

    public createUser(userProps: IUser): User {
        try {
            const newUser: User = UserFactory.createUser(userProps)
            this.db.addUser(newUser)
            return newUser
        } catch (error) {
            throw new UserDatabaseError('Error al crear usuario')
        }
    }

    public getUsers(): User[] {
        return this.db.getUsers().map(user => new User(user))
    }
}
