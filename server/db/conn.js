const mongoose=require('mongoose');

const mongoURI='mongodb+srv://Vaishali03003:adolfhitler@cluster0.x5p6g.mongodb.net/travel_agency';

mongoose.connect(mongoURI).then(()=>{
    console.log('Database connected')
}).catch((error)=>{
    console.log('Database not connected',error);
})


// skillf