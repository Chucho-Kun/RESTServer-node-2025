import { response } from 'express';

export const usuariosGet = (req, res = response ) => {

    const { nombre , api } = req.query;

    res.json({
        msn:'metodo GET - controlador',
        api,
        nombre
    })
  }

  export const usuariosPost = (req, res = response ) => {

    //const { nombre , edad } = req.body;
    

    res.json({
        msn:'metodo POST - controlador',
        n:nombre,
        e:edad
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