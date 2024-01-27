import { Router } from "express";
import { AuthController } from "./controllers";



export class AuthRoutes {

  static get routes(): Router {

    const router = Router();
    const controller = new AuthController()

    // Definir todas las rutas principales
    router.get('/login', controller.loginUser)

    router.post('/register', controller.registerUser)


    return router;
  }
  
}