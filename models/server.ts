import express from 'express'
import { router as userRoutes } from '../routes/usuario.routes';
import cors from 'cors'
import { db } from '../db/connection';

export class Server {
    private app: express.Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';

        this.dbConnection();
        this.middlewares()

        // Definir mis rutas
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Base de datos online')
        } catch (error: any) {
            throw new Error(error)
        }
    }

    middlewares() {
        // CORS
        this.app.use(cors())

        // Lectura del body (parsear el body)
        this.app.use(express.json())

        this.app.use(express.static('../public'))
    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        })
    }
}