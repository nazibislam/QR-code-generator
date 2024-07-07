# QR-code-generator
A simple QR code generator using Node.js Modules and JS

The Node Modules I used were Inquirer.js(https://www.npmjs.com/package/inquirer) and qr-image(https://www.npmjs.com/package/qr-image)

To initialize

npm init

npm i inquirer qr-image


First, the inquirer module takes the user's URL as input. Then it generates a QR-image saved in "qr-img.png". Scanning this QR code takes you to the URL the user provided. And, lastly the message.txt file stores all the URLs the users provided. 
