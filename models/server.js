import express from 'express'

export class Server {
        constructor(){
            this.app = express();
            this.port = process.env.PORT;

            //Middlewares
            this.middlewares();

            // Rutas de la aplicación
            this.routes();
        }
        middlewares(){

            this.app.use( express.static('public') );

        }
        routes(){
            this.app.get('/', (req, res) => {
                res.send('Hello World')
              });
        }
        listen(){
            this.app.listen( this.port , () => {
                console.log(`corriendo en el puerto: ${ this.port }`);
            });
        }
}