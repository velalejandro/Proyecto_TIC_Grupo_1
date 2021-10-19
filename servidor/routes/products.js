const { Router } = require('express');
const router = Router();

const {getProducts,setProduct,updateProduct,deleteProduct} = require('../controllers/product');

/** define routes */
router.get( '/list', getProducts );

router.post( '/create', setProduct );

router.put( '/update/:id', updateProduct );

router.delete( '/delete/:id', deleteProduct );

module.exports = router;

