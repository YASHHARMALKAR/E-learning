const express = require('express')
const cors = require('cors')

const app=express()
app.use(cors())
app.use(express.json())

app.get('/hello', async (req,res)=>{
    res.status(200).json({msg:'Hello form Server!'})
})

app.listen(1000, () => {
    console.log("Server Started!")
});