const mongoose =require('mongoose');
require('dotenv').config();
// Connect to MongoDB using Mongoose

mongoose.set('debug', true);

  function connectDB() {
    mongoose.connect(process.env.MONGO_URI, {
    //  useNewUrlParser: true,
      //useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB Connected ✅"))
    .catch((err) => console.log("MongoDB Connection Error ❌", err));
  }

  connectDB();
const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    age:Number

});

module.exports = mongoose.model('User', userSchema);
// This code defines a Mongoose schema for a User model with fields for username, password, email, and age.
// It also connects to a MongoDB database running on localhost at port 27017 with the database name 'database_name'.    