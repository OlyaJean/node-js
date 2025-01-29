const fs = require('fs');
const path = require('path');


//creating a folder inside the directory
const dataFolder = path.join(__dirname, 'data');

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("data folder created")
}

//creating a  file in our folder
const filePath = path.join(dataFolder, 'example.txt')
//sync way of creating 

//writing a text inside the file
fs.writeFileSync(filePath, 'Hello from Node js');
console.log("file created successfully");

//reading the text in the terminal
const readContentFromFile = fs.readFileSync(filePath, 'utf8');
console.log(readContentFromFile)

//new data added to the file
fs.appendFileSync(filePath, '\nThis is a new line added');
console.log('new line added');

//async way of creating the file

const asyncFilePath = path.join(dataFolder,'async-example.txt');
fs.writeFile(asyncFilePath, 'Hello, Async Node Js', (error)=>{
    if(error)throw error;
    console.log('Async file is created successfully');
    fs.readFile(asyncFilePath,'utf8',(err,data)=>{
        if(err)throw err;
        console.log('Async file content', data);

        fs.appendFile(asyncFilePath, '\nThis is another line added', (err)=>{
            if(err) throw err;
            console.log('New line is added');

            fs.readFile(asyncFilePath, 'utf8',(err,data)=>{
                if(err) throw err;
                console.log(data)
            })
        })
    })

})