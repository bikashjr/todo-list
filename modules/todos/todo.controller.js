const Model=require('./todo.model')
const create=async(payload)=>{
   return await Model.create(payload);
};
const getById=async(id)=>{
    return await Model.findOne({_id});
    
};
const list=async()=>{
    return await Model.find();
};
const updatebyId=async(id,payload)=>{
    return await Model.findOneandUpdate({_id:id},payload,{new:true});
};
const remove=async(id)=>{
    return await Model.deleteOne({_id:id});
};
module.exports = {create,list,updatebyId,remove,getById} 