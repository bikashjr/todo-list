const {Schema,model} = require('mongoose');
const commonSchema = require('../../utils/commonSchema')
const SubtaskSchema = new Schema({
title : String,
status : {type: String,enum:['pending','completed'],default:'pending'},
...commonSchema,
});
model.exports=new model("Subtask",SubtaskSchema);
