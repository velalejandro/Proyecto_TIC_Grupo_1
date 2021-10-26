const {getVentas} = require('../controllers/venta')
const { validarJWT } = require('../middlewares/validar-jwt');
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

//router.use(validarJWT);

router.get('/',getVentas);

router.post(
    '/',
    // [
    //     check('code','El codigo del producto es obligatorio').not().isEmpty(),
    //     check('name','El nombre del producto es obligatorio').not().isEmpty(),
    //     check('description','La descripcion del producto es obligatoria').not().isEmpty(),
    //     check('category','La categoria del producto es obligatoria').not().isEmpty(),
    //     validarCampos
    // ],
    setVenta);



//router.delete('/:id', deleteProduct);

//router.get('/categories',getCategories);

module.exports = router;