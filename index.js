

import inquirer from "inquirer";
import qr from 'qr-image';
import fs from "fs"
import { writeFile } from 'node:fs';
inquirer
  .prompt([
    
    {
        message: "Give your URL",
        name: "URL"
       
        

    },
  ])
  .then((answers) => {
   
    const user_url= answers.URL;
    var qr_svg = qr.image(user_url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    writeFile('message.txt', user_url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
  



