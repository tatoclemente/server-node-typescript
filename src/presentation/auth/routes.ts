import { Router } from "express";
import { AuthController } from "./controllers";
import { AuthDatasourceImpl, AuthRepositoryImpl } from "../../infrastructure";



export class AuthRoutes {

  static get routes(): Router {

    const router = Router();

    const datasourse = new AuthDatasourceImpl()
    const authRepository = new AuthRepositoryImpl( datasourse )
    const controller = new AuthController( authRepository )

    // Definir todas las rutas principales
    router.get('/login', controller.loginUser)

    router.post('/register', controller.registerUser)


    return router;
  }
  
}