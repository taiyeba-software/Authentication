const express =require('express');
const app = express();
const usermodel = require('./models/user'); // Import the user model
require('dotenv').config();



const path = require('path');
const cookieParser = require('cookie-parser');
const user = require('./models/user');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies from HTML forms
app.use(express.static(path.join(__dirname, 'public')));// Serve static files from the 'public' directory
app.use(cookieParser());// Parse cookies from the request headers


app.get('/',(req,res)=>{
    res.render('index');
})

app.post('/create', async(req,res)=>{
     let { username, password, email, age } = req.body; // Extract data from the request body
     // Create a new user document using the user model
    let createduser = await usermodel.create({
         username,
         password,
        email,
        age
    })
    res.send('User created successfully'); // Send a response back to the client
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})