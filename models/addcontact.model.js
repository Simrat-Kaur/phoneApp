const mongoose = require('mongoose');

var addcontactSchema = new mongoose.Schema({
    name: {
        type: String,
        required:'This field is required'
    },
    dob: {
        type: String,
        required:'This field is required'
    },
    mobile: {
        type: String,
        required:'This field is required'
    },
    email: {
        type: String,
        required:'This field is required',
        unique:"true"
       
    },
    
});

mongoose.model('addcontact', addcontactSchema);
