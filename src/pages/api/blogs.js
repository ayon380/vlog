import * as fs from 'fs';

// http://localhost:3000/api/blog?slug=flask

export default async function handler(req, res) {
    let data=await fs.promises.readdir('blogdata');
    let myfile;
    let allfiles=[];
    for(let i=0;i<data.length;i++){
        const item=data[i];
        console.log(item);
        myfile=await fs.promises.readFile((`blogdata/${item}`),'utf-8');
        console.log(myfile);
        allfiles.push(JSON.parse(myfile));        
    }
    res.status(200).json(allfiles);
}