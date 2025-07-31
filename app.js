const express = require('express');
const  bcrypt =require("bcrypt");
const jwt = require('jsonwebtoken');

const app = express();

// making the token
const payload = {
  email: "taiyeba@rajkonna.com",
  userId: "64ba12x7z"
};

const secretKey = "yourSecretRajkonna";

const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

console.log("Token:", token);



//jwt.verify : server checks if the token is valid
const decoded = jwt.verify(token, secretKey);
console.log("Decoded Info:", decoded);

//only decode the token , don't checks the security , just to see the payload
const info = jwt.decode(token);
console.log("Decoded Info Without Verify:", info);


app.get('/', (req, res) => {
  res.send(` Your token is: ${token}`);
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
