import { Router } from "express";



export class AuthRoutes {

  static get routes(): Router {

    const router = Router();

    // Definir todas las rutas principales
    router.get('/login', (req, res) => {
      res.json('Login')
    })
    router.get('/register', (req, res) => {
      res.json('Register')
    })


    return router;
  }
  
}