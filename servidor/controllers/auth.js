const { response } = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/User')

const crearUsuario = async ( req, resp = response) => {
    const {email,password} = req.body;

    try {
        let usuario = await Usuario.findOne({email});

        if(usuario){
            return resp.status(400).json({
                ok:false,
                msg: "ya existe un usuario registrado con este email"
            }); 
        }

        usuario = new Usuario(req,body);

        /** Encriptando la contrasena */
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        resp.status(201).json({
            ok:true,
            msg: 'Usuario creado satisfactoriamente',
            uid: usuario.id,
            name: usuario.name
        });

    } catch (error) {
        
    }
}