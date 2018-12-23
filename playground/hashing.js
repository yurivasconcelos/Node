console.log('started hashing.js');

// using SHA
//--------------------------------------------------------
// const sha = require('sha256'); //using the npm package sha256
// console.log(sha('hello world', true));
//--------------------------------------------------------

//using Crypto-JS
//--------------------------------------------------------
// const {SHA256} = require('crypto-js');

// var message = "testando";
// const hash = SHA256(message + "salst").toString();
// console.log(hash);
//--------------------------------------------------------

// using jasonwebtoken - jwt
//--------------------------------------------------------
const jwt = require('jsonwebtoken');

console.log(jwt.sign("texto a ser encriptado", "secret"));

console.log(jwt.decode("eyJhbGciOiJIUzI1NiJ9.dGV4dG8gYSBzZXIgZW5jcmlwdGFkbw.yvo5XgXq09SNq4_Wj1XA_41_aCaMfmAmFbEuIGimekM"));

console.log(jwt.verify('eyJhbGciOiJIUzI1NiJ9.dGV4dG8gYSBzZXIgZW5jcmlwdGFkbw.yvo5XgXq09SNq4_Wj1XA_41_aCaMfmAmFbEuIGimekM'
, "secret"));

//--------------------------------------------------------

