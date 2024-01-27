import { Request, Response } from "express"
import { RegisterUserDto } from "../../domain"


export class AuthController {

  // DI
  constructor() {

  }


  // Nota: No es recomendable utilizar funciones asincronas en los controladores porque
  // las peticiones se bloquean hasta que se resuelvan todas las funciones asincronas.
  registerUser = (req: Request, res: Response) => {

    const [error, registerUserDto ] = RegisterUserDto.create( req.body )
    if ( error ) return res.status(400).json( error )

    res.json( registerUserDto )

  }

  loginUser = (req: Request, res: Response) => {

    res.json('loginUser Controller')

  }
}