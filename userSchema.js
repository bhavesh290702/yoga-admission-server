const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({ 
    phoneNo:{type:String},
    name:{type:String},
    age:{type:Number},
    batch:{type:String},
    monthYear:{type:String},
    cardNo:{type:String},
    expiry:{type:String},
    cvv:{type:String},
})



const User = mongoose.model('USER',userSchema);

module.exports = User;
