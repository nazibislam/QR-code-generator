# QR-code-generator
A simple QR code generator using Node.js Packages and JS

The Node packages I used were Inquirer.js(https://www.npmjs.com/package/inquirer) and qr-image(https://www.npmjs.com/package/qr-image)

To initialize

npm init

npm i inquirer qr-image


First, the inquirer package takes the user's URL as input. Then the qr-image package generates a QR image from the user's URL and saves it in "qr-img.png". Scanning this QR code takes you to the URL the user provided. And, lastly the message.txt file stores all the URLs the users provided. 
