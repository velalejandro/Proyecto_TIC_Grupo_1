const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const router = Router();

// validacion google

/*router.post(
    '/google/login'
)*/

router.post(
    '/new',
    [
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

router.get('./renew', revalidarToken);

// exportar las rutas cnfiguradas
module.exports = router;
