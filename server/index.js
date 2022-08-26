const dotenv=require('dotenv');
const express=require('express')
require('./db/conn')
const auth=require('./router/auth')
const bus=require('./router/bus')
const reviews=require('./router/reviews')
const contact=require('./router/contact')
var cors = require('cors')

dotenv.config({path:'./config.env'});
const app=express();
const port=process.env.PORT||4300;

app.use(cors());
// app.use(express.urlencoded({}))
app.use(express.json());


// we link the router files to make our routes easy
app.use('/auth',auth);
app.use('/bus',bus);
app.use('/reviews',reviews);
app.use('/contact',contact);

// static file for deployment

if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"));
    
}

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})