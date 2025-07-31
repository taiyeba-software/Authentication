const express =require('express');
const app = express();

const path = require('path');
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies from HTML forms
app.use(express.static(path.join(__dirname, 'public')));// Serve static files from the 'public' directory
app.use(cookieParser());// Parse cookies from the request headers


app.get('/',(req,res)=>{
    res.send('Hello World!');
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})