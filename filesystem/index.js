// const http=require('http');

// http.createServer((req,res)=>{
//     res.write("hello people howfbjw are you \n hello ");

// res.end("hello world");

// }).listen(5500);


// // fetch('./text.txt').then((response)=>{

// //     return response.text();

// // }).then((result)=>{

// //     console.log(result);
// //     var btn = document.getElementById('btn').onclick =()=>{

// //         document.getElementById('demo').innerHTML=result;
// //     }

// //     // btn.demo.innerHTML= result;

// // }).catch((error)=>{

// //     console.log(`this is an ${error} `);
// // });

const name = 'yagyaraj lodhi'
console.log(`welcome ${name}`);
const fs = require('fs');

// To create a file add data in it.

fs.writeFileSync('read.txt','hello yagyaraj');

// it overwrite the data

fs.writeFileSync('read.txt','people');

// To add the new data in existing data
fs.appendFileSync('read.txt',', hello welcome to my channel');

// To read the file 

const data = fs.readFileSync('read.txt');


// To  convert the data from buffer to string
const stringdata =data.toString();
console.log(stringdata)

// To change the name of file

fs.renameSync('read.txt','read.html');
fs.renameSync('read.html','read.txt');
fs.writeFileSync("challenge.js",'');


fs.mkdirSync('Async');

