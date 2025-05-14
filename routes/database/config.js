import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const mongoose = require('mongoose');

export const dbConnection = async() => {

    try {
        
        await mongoose.connect( process.env.MONGODB_CNN );

        console.log('Base de Datos online')

    } catch (error) {
        console.log(error)
        throw new Error('Error al inicializar la DB');
    }

}