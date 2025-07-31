const express = require('express');

const  bcrypt =require("bcrypt");

const app = express();



app.get('/', (req, res) => {
  res.end('Cookie has been removed!');
});

app.get('/read', (req, res) => {
  
  res.end('read page!');
});


app.post('/reginter', async(req,res)=>{
   const {username,password}=req.body;

   const saltRounds = 10;
   const hashedpassword = await bcrypt.hash(password, saltRounds);
   // Here you would typically save the username and hashed password to your database
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
// Export the app for testing purposes