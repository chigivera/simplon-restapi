const express = require("express")
const prismaClient = require("@prisma/client")
const app = express()
const prisma = new prismaClient()
const port = 8080

app.get('/',(req,res)=>{
    res.status(200).send({
        name: "bro",
        age: "old"
    })
})
app.post('/:id',(req,res)=>{
    
    const {id} = req.params;
    const {name,age} = req.body;

    if(!name) {
        res.status(418).send({message:'name not found'})
    }
    res.send({
        name
    })
})
app.listen(port,()=>console.log(`server is live at http://localhost:${port}`))
