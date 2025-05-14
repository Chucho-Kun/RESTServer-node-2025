import { response } from 'express';
import Usuario from '../models/usuario.js'

export const usuariosGet = (req, res = response ) => {

    const { nombre , api } = req.query;

    res.json({
        msn:'metodo GET - controlador',
        api,
        nombre
    })
  }

  export const usuariosPost = async (req, res = response ) => {

    //const { nombre , edad } = req.body;
    const body = req.body;
    const usuario = new Usuario( body );

    await usuario.save();

    res.json({
        msn:'metodo POST - controlador',
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