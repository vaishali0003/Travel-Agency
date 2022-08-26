const dotenv=require('dotenv');
const mongoose=require('mongoose');
// const mongoURI='mongodb+srv://Vaishali03003:adolfhitler@cluster0.x5p6g.mongodb.net/travel_agency';

dotenv.config({path:'./config.env'});

const mongoURI=process.env.DATABASE;

mongoose.connect(mongoURI).then(()=>{
    console.log('Database connected')
}).catch((error)=>{
    console.log('Database not connected',error);
})


// skillf

 // "both": "concurrently \"npm run start\" \"nodemon ../server/index.js\""