const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required:true
    },
    user:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    registeredDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('User',UserSchema);