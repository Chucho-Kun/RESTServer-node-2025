import express from 'express'
import cors from 'cors';
import { router } from '../routes/user.js';
import { dbConnection } from '../routes/database/config.js';

export class Server {
        constructor(){
            this.app = express();
            this.port = process.env.PORT || 8080;
            this.usuariosPath = '/api/usuarios';

            // Conectar a BD
            this.conectarDB();

            //Middlewares
            this.middlewares();

            // Rutas de la aplicación
            this.routes();
        }

        async conectarDB(){
                await dbConnection();
            }

        middlewares(){

            // CORS
            this.app.use( cors() );

            //parseo de Body
            this.app.use( express.json() );

            this.app.use( express.static('public') );

        }
        routes(){

           this.app.use( this.usuariosPath , router);
            
              

        }
        listen(){
            this.app.listen( this.port , () => {
                console.log(`corriendo en el puerto: ${ this.port }`);
            });
        }
}