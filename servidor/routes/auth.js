const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const router = Router();

// validacion google

/*router.post(
    '/google/login'
)*/

router.post(
    '/new',
    [   validarJWT,
        check('name', 'el nombre es obligatorio').not().isEmpty(),
        check('email', 'el email es obligatorio').isEmail(),
        check('password', 'el password debe ser de 6 caracteres').isLength({min:6}),
        validarCampos
    ],
    crearUsuario);

router.post(
'/',
[
    check('email', 'el email es obligatorio').isEmail(),
    check('password', 'el password debe ser de 6 caracteres').isLength({min:6}),
    validarCampos
],
loginUsuario);

router.get('./renew', validarJWT, revalidarToken);

// exportar las rutas cnfiguradas
module.exports = router;
