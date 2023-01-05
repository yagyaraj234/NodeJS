const fs= require('fs');


fs.writeFile('demo.txt','',(err)=>{

});

fs.writeFile('demo.txt','this is demo text',(err)=>{

});

fs.appendFile('demo.txt',' this is another demo text',(err)=>{

})

// To create a folder
// fs.mkdir('hello',(err)=>{

// })

// To delete a folder

// fs.rmdir('hello',(err)=>{

// })


fs.readFile('demo.txt','utf-8',(req,res)=>{

    console.log(res);
})

fs.writeFile('hello.txt',"hello world",(req)=>{

})

fs.unlink('hello.txt',(req)=>{
    
})