const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/')
const userSchema=mongoose.userSchema({
    emaill:{
        type:string,
        required:true
    },
    password:{
        type:string,
        required:true
    }
})
module.exports=mongoose.model("user",userSchema)