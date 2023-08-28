const router=require('express').Router();

router.get('/',(req,res,next)=>{
    try{
        res.json({data:'hello',msg:'success'})
    }
    catch(error){
next(error);
    }

});

module.exports=router;