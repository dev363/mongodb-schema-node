

var express=require('express');
var User=require('../schema/User');

var mongoose=require('mongoose');


const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message:"Serving Users on the Endpoint."
    });   
});



router.post("/list", (req, res, next) => {
    
	
	console.log("wwww"+req.body.username);
});

router.post("/add", (req, res, next) => {

    const user = new User({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        address:req.body.address,
        salary: req.body.salary
    });

    user.save()
    .then(result => {
        res.status(200).json({
            docs:[user]
        });
    })
    .catch(err => {
        console.log(err);
    });
});

router.post("/delete", (req, res, next) => {
    const rid = req.body.id;

    User.findById(rid)
        .exec()
        .then(docs => {
            docs.remove();
            res.status(200).json({
                deleted:true
            });
        })
        .catch(err => {
            console.log(err)
        });
});

module.exports = router;