const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err,data)=>{
    if(err){
        console.error("Can not read file", err);
        return;
    }
    console.log(data);

    const modifyFileData = data.toUpperCase();

    fs.writeFile('output.txt', modifyFileData, (err)=>{
        if(err){
            console.error('Can not modify file');
            return;
        }
        console.log("Data was modified");

        fs.readFile('output.txt', 'utf8',(err,data)=>{

            if(err){
                console.error("Can not read modified data", err);
                return;
            }
            console.log(data)
        })
    })
})