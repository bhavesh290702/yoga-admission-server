const express = require('express');
const router = express.Router();


// getting the userSchema 
const User = require('../userSchema');

router.post('/api/enroll',async (req,res)=>{
    try{
        const {phoneNo,name,age,batch,cardNo,expiry,cvv,monthYear} = req.body;
        const data = await User.findOneAndUpdate({phoneNo},{name,age,batch,cardNo,expiry,cvv,monthYear},{ returnDocument: 'after' });
        res.status(200).json({data:data});
    }catch(err){
        res.status(500).json({error:"there is error and we are not getting req.body"});
        console.log(err)
    }

})


module.exports = router;



