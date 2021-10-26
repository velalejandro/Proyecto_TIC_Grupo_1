const { Schema, model, Schema, Schema } = require('mongoose');

const VentaSchema = Schema({
    fecha : {
        type: Date,
        default: Date.now
    },
    valorTotal: Number,
    cliente : {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    vendedor : {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    productos : [{
        producto : {
            type: Schema.Types.ObjectId,
            ref: "Product"
        },
        cantidad : Number
    }]

});

module.exports = model('Venta',VentaSchema);