const express=require('express')
const mongoose=require('mongoose')
const app=express()
const port=4000
app.use(express.json())
app.post('/users',async (req,res) => {
    try {
        const {email,password}=req.params
        if(!email){
            res.send({message:"email not found"})
        }
        if(!password){
            res.send({message:"password not found"})
        }
        else{
            res.status(201).json({message:"user created Successfully"})
        }

        
    } catch (error) {
        res.status(404).json({message:"Err message"})
        
    }
    
})
app.listen(port,()=>{
    console.log(`example app is listening on port ${port}`)
})