const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost:27017/phoneApp', { useNewUrlParser: true }, (err) => {
    if (!err) 
    { 
        console.log('MongoDB Connection Successful.') 
    }
    else 
    { 
        console.log('Error in MongoDB connection : ' + err) 
    }
});

require('./addcontact.model');