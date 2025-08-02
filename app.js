const express =require('express');
const app = express();
const usermodel = require('./models/user'); // Import the user model
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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
    const { username, password, email, age } = req.body;

    try {
        // 🔐 Step 1: Generate salt
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);

        // 🔐 Step 2: Hash the password using the generated salt
        const hashedPassword = await bcrypt.hash(password, salt);

        // 🧬 Step 3: Save the user with the hashed password
        const createdUser = await usermodel.create({
        username,
        password: hashedPassword,
        email,
        age
        });

        res.send('User created successfully with hashed password ✅');
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).send('Something went wrong ❌');
    }
});




app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});