const {Schema,model} = require('mongoose');
const commonSchema = require('../../utils/commonSchema')
const TodoSchema = new Schema({
title : {type:String,required:true},
status : {type: String,enum:['pending','completed'],default:'pending'},
...commonSchema,
});
module.exports=new model("Todo",TodoSchema);
