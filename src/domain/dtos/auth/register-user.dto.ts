import { Validator } from '../../../config';



export class RegisterUserDto {

  private constructor(
    public name: string,
    public email: string,
    public password: string,
  ) {}

  static create( object: {[key: string]: any}): [string?, RegisterUserDto?] {

    const { name, email, password } = object

    if (!name) return ['Name is required']
    if (!email) return ['Email is required']
    if (!Validator.email.test( email )) return ['Email is not value']
    if (!password) return ['Password is required']
    if (password.length < 6) return ['Password too short']

    const user = new RegisterUserDto(name, email, password)

    return [undefined, user]
  
  }


}