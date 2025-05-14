import { Schema, model } from 'mongoose';

const UsuarioSchema = new Schema({
    nombre:{
        type: String,
        required: [true , 'Nombre obligatorio']
    },
    correo:{
        type: String,
        required: [true, 'Correo obligatorio']
    },
    password:{
        type: String,
        required: [true, 'Contraseña obligatoria']
    },
    img:{
        type: String
    },
    rol: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE','USER_ROLE']
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    }
});

export default model('Usuario' , UsuarioSchema);
//module.exports = model('Usuario' , UsuarioSchema);