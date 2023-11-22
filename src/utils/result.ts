export abstract class Default {
    static getDefault() {
        throw new Error('no inplemented')
    }
}

export class Result<T extends Default, E extends Error = Error> {

    private data!: T
    private err!: E

    protected constructor() {}

    protected static withData<T extends Default, E extends Error>(data: T) {
        const result = new Result<T, E>()
        result.data = data
        return result
    }

    protected static withError<T extends Default, E extends Error>(err: E) {
        const result = new Result<T, E>()
        result.err = err
        return result
    }

    public static Ok<T extends Default, E extends Error>(data: T) {
        return Result.withData<T, E>(data)
    }

    public static Error<T extends Default, E extends Error = Error>(err: E = Error.arguments) {
        return Result.withError<T, E>(err)
    }

    unwrap() {
        if (this.err || !this.data) throw new Error('unwrap no controlado')
        return this.data
    }

    unwrapOrElse<F extends (err: E) => T>(f: F) {
        if (this.err && !this.data) return f(this.err)
        if (this.data) return this.data
    }

    unwrapOrDefault() {
        return (this.err || !this.data)
            ? eval((this.data as T).constructor.name).getDefault()
            : this.data
    }

}

export class Option<T extends Default> {

    private data!: T

    protected constructor() {}

    protected static withData<T extends Default>(data: T) {
        const result = new Option<T>()
        result.data = data
        return result
    }

    protected static nothing<T extends Default>() {
        return new Option<T>()
    }

    public static Some<T extends Default>(data: T) {
        return Option.withData<T>(data)
    }

    public static None<T extends Default>() {
        return Option.nothing<T>()
    }

    unwrap() {
        if (!this.data) throw new Error('unwrap no controlado')
        return this.data
    }

    unwrapOrElse<F extends () => T>(f: F) {
        return this.data ? this.data : f()
    }

    unwrapOrDefault() {
        return !this.data
            ? eval((this.data as T).constructor.name).getDefault()
            : this.data
    }

}

// prueba
export interface IUser {
    name: string
    age: number
    email: string
}

export class User extends Default implements IUser {

    // IUser
    public name: string
    public age: number
    public email: string

    constructor({ age, name, email }: IUser) {
        super()
        this.name = name
        this.age = age
        this.email = email
    }

    static getDefault() {
        return { name: '', age: 0, email: '' }
    }

}

type UserResult = Result<User, Error>

type ResultEspecial<T extends Default> = Result<T, Error>

const main = (): ResultEspecial<User> | UserResult /* son iguales realmente */ => {

    const result = Result.Error<User, Error>()

    result.unwrap()

    return result

}

main()