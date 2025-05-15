import { response } from 'express';
import Usuario from '../models/usuario.js'
import bcryptjs from "bcryptjs";

export const usuariosGet = (req, res = response ) => {

    const { nombre , api } = req.query;

    res.json({
        msn:'metodo GET - controlador',
        api,
        nombre
    })
  }

  export const usuariosPost = async (req, res = response ) => {

    const { nombre , correo , password , rol } = req.body;
    const usuario = new Usuario( {nombre , correo , password , rol} );
    //validar correo

    //encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password , salt );
    //guardar en BD

    await usuario.save();

    res.json({
        usuario
    })
    res.send('hola');
  }

  export const usuariosPut = (req, res = response ) => {

    res.json({
        msn:'metodo PUT - controlador',
        "usuario":req.params.id
    })
  }

  export const usuariosDelete = (req, res = response ) => {
    res.json({
        msn:'metodo DELETE - controlador'
    })
  }