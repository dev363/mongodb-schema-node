
var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/mm33',
    { 
      useNewUrlParser: true
    }
  );

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Connected to MongoDB database")
});

module.exports = db;