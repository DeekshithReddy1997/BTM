import mongoose from 'mongoose';
 
const studentSchema = new mongoose.Schema({
    training_center:String,
    medium:String,
    firstname:String, 
    lastname:String, 
    gender:String,
    DOB:Number,
    fathername:String,
    mothername:String,
    email:String,
    address:String,
    nationality:String,
    mobile_number:Number, 
});

const Student = mongoose.model('student', studentSchema);
export default Student

