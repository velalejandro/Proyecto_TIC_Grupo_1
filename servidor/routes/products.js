/**const { Router } = require('express');
const router = Router();

const {getProducts,setProduct,updateProduct,deleteProduct} = require('../controllers/product');

// define routes /
router.get( '/list', getProducts );

router.post( '/create', setProduct );

router.put( '/update/:id', updateProduct );

router.delete( '/delete/:id', deleteProduct );

module.exports = router;*/

const {getProducts, setProduct, updateProduct, deleteProduct, getCategories} = require('../controllers/product')
const { validarJWT } = require('../middlewares/validar-jwt');
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

//router.use(validarJWT);

router.get('/',getProducts);

router.post(
    '/',
    [
        check('code','El codigo del producto es obligatorio').not().isEmpty(),
        check('name','El nombre del producto es obligatorio').not().isEmpty(),
        check('description','La descripcion del producto es obligatoria').not().isEmpty(),
        check('category','La categoria del producto es obligatoria').not().isEmpty(),
        validarCampos
    ],
    setProduct);

router.put(
    '/:id',
    [
        check('code','El codigo del producto es obligatorio').not().isEmpty(),
        check('name','El nombre del producto es obligatorio').not().isEmpty(),
        check('description','La descripcion del producto es obligatoria').not().isEmpty(),
        check('category','La categoria del producto es obligatoria').not().isEmpty(),
        validarCampos
    ],
    updateProduct
); 

router.delete('/:id', deleteProduct);

router.get('/categories',getCategories);

module.exports = router;