/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import inquirer from "inquirer";
import qr from 'qr-image';
import fs from "fs"
import { writeFile } from 'node:fs';
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "Give your URL",
        name: "URL"
       
        

    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const user_url= answers.URL;
    var qr_svg = qr.image(user_url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    writeFile('message.txt', user_url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
  



