const express = require('express')
const chalk = require('chalk')
const morgan = require('morgan')
const app = express()


//app.use('/', morgan)

//MIDDLEWARES
app.use('/special/', (req, res)=>{
    console.log(chalk.red('Llegaste a un lugar special'))
    res.json("Yeah estamos en '/special/'")
    
})

app.use('/', (req, res)=>{
    console.log(chalk.blue('Hey World'))
    res.json("Yeah estamos en '/'")
})




// SERVER
var port = 3000
app.listen(port, ()=>{
    console.log(`Listening port ${port}`)
})