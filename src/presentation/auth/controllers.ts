import { Request, Response } from "express"


export class AuthController {

  // DI
  constructor() {

  }


  // Nota: No es recomendable utilizar funciones asincronas en los controladores porque
  // las peticiones se bloquean hasta que se resuelvan todas las funciones asincronas.
  registerUser = (req: Request, res: Response) => {

    res.json('registerUser Conroller')

  }

  loginUser = (req: Request, res: Response) => {

    res.json('loginUser Controller')

  }
}