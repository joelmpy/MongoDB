const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/students');

const studentSchema = new mongoose.Schema({
    firstName : String,
    surName : String,
    address : {
        type : mongoose.Types.ObjectId,
        ref: 'address'
    }
})

const addresSchema = new mongoose.Schema({
    streetName : String,
    streetNumber : String,
    postCode : String,
    city : String
})

const StudentModel = mongoose.model('Student' , studentSchema);
const AddressModel = mongoose.model('address', addresSchema);

const address = new AddressModel({
    streetName : "Joseph",
    streetNumber : "23042022",
    postCode : "0496",
    city : "Paris"
})


address.save().then(res => {
    const student = new StudentModel({
        firstName : "Rodrigue",
        surName : "Mpy",
        address : res._id
    })
    student.save().then(response => console.log(response))

})

StudentModel.findOne({_id : "626165632e5f0047a9ef475e"})
.populate('address')
.exec().then(result => console.log( "l'etudiant", result))
