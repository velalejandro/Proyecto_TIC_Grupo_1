const { response } = require('express');

const getProducts = ( req, resp = response ) => {
    resp.json({
        ok:true,
        msg: 'List Products'
    });
}


const setProduct = ( req, resp = response ) => {
    resp.json({
        ok:true,
        msg: 'Create Product'
    });
}


const updateProduct = ( req, resp = response ) => {
    resp.json({
        ok:true,
        msg: 'Update Product'
    });
}


const deleteProduct = ( req, resp = response ) => {
    resp.json({
        ok:true,
        msg: 'Delete Product'
    });
}

module.exports = {
    getProducts,
    setProduct,
    updateProduct,
    deleteProduct
}
