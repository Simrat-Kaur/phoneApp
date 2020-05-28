const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Addcontact = mongoose.model('addcontact');


router.get('/', (req, res) => {
    res.render("addcontact/addcontact", {
        viewTitle: "Insert Hotel Information"
    });
});


router.post('/', (req, res) => {
    if (req.body._id == '')
        insert(req, res);
        else
        update(req, res);
});


//Inserting hotel Info
function insert(req, res) {
    var addcontact = new Addcontact();
    addcontact.name = req.body.name;
    addcontact.dob = req.body.dob;
    addcontact.mobile = req.body.mobile;
    addcontact.email = req.body.email;
   
    
    addcontact.save((err, doc) => {
        if (!err)
            res.redirect('addcontact/info');
        else 
        {
           console.log('Error during record insertion : ' + err);
        }
    });
}

// For the Updation of hotel info
function update(req, res) {
    Addcontact.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) 
        { 
            res.redirect('addcontact/info'); 
        }
        else 
        {
          console.log('Error during record update : ' + err);
        }
    });
}


// To retrieve hotel info
router.get('/info', (req, res) => {
    Addcontact.find((err, docs) => {
        if (!err) {
            res.render("addcontact/info", {
                info: docs
            });
        }
        else {
            console.log('Error in retrieving hotel info :' + err);
        }
    });
});



router.get('/:id', (req, res) => {
    Addcontact.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("addcontact/addcontact", {
                viewTitle: "Update Hotel Information",
                addcontact: doc
            });
        }
    });
});

//To delete the hotel data
router.get('/delete/:id', (req, res) => {
    Addcontact.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/addcontact/info');
        }
        else { console.log('Error in hotel info delete :' + err); }
    });
});


module.exports = router;