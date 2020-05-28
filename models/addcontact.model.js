const mongoose = require('mongoose');

var addcontactSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    dob: {
        type: String,
    },
    mobile: {
        type: String,
    },
    email: {
        type: String,
    },
    
});

mongoose.model('addcontact', addcontactSchema);
