const express = require ('express')
const app = express();
const db =require('./db')
const personRoutes = require('./routes/personRoutes')
const menuiteamsRoutes = require('./routes/menuiteamsRoutes')


const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', function(req, res){
     res.send('Hlw sir welcome to our restorent ! ')
})


app.use('/person',personRoutes);

app.use('/men',menuiteamsRoutes)

app.listen(3000, ()=>{
     console.log('listening on port 3000')
})
