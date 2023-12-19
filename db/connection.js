const mongoose = require('mongoose');
var URL = "mongodb+srv://behzadqasim:Behzad@1017@cluster0.xjj6c1m.mongodb.net/?retryWrites=true&w=majority"

try{
    mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true}
        , () => console.log("connected to MongoDB Cluster"));
}
catch(err){
    console.log(err)
}

const dbConnection = mongoose.connection;
dbConnection.on('error', console.error.bind(console, 'connection error:'));
dbConnection.once('open', () => {
    console.log('Connected to database');
});
