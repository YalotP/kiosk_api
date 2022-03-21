const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const accountRoute = require('./controllers/accounts');
app.use('/api/accounts', accountRoute);

const port = 5090;

const url = 'mongodb+srv://kiosk_user:KnQH24QPnblMDqbf@cluster0.zz82a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url)
.then(results => {
    console.log(results);
    app.listen(port,function(){
        console.log(`Server is running via port ${port}`);
    })
})
.catch(err =>{
    console.log(err);
})