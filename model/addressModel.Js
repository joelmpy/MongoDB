const mongoose = require('mongoose');

const addresSchema = new mongoose.Schema({
    streetName : String,
    streetNumber : String,
    postCode : String,
    city : String
});

const AddressModel = mongoose.model('address', addresSchema);

module.exports = AddressModel;