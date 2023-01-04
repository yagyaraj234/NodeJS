const fs = require('fs');

fs.writeFile('text.txt','hello world',(err)=>{

})

const user ={
    name: 'ram kumar',
    age : 23,
    phone :756283482
}

// console.log(user.name);
// console.log(user);

const info = JSON.stringify(user);
console.log(info);

// const objData =JSON.parse(info);
// console.log(objData);

fs.writeFile('text.json',info,(err)=>{

});

fs.readFile('text.json',"utf-8",(req,res)=>{

    console.log(res);

})

