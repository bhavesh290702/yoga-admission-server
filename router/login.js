const express = require('express');
const router = express.Router();


// getting the userSchema 
const User = require('../userSchema');




router.post('/api/login',async (req,res)=>{
    try{
        const phoneNo = req.body.phoneNo;
        const data = await User.findOne({phoneNo:phoneNo});
        if(!data){
            const newUser = new User({phoneNo});
            await newUser.save();
            res.status(200).json({data:newUser});
        }else{
            res.status(200).json({data:data});
        }
        
    }catch(err){
        res.status(500).json({error:"there is error and we are not getting req.body"});
        console.log(err)
    }

})


module.exports = router;



