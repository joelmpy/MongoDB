const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName : String,
    surName : String,
    address : {
        type : mongoose.Types.ObjectId,
        ref: 'address'
    }
})

const StudentModel = mongoose.model('Student' , studentSchema);


module.exports = StudentModel;