



Start separate terminals, one for 'frontend' the other for 'backend'

In [cd frontend] port:5173
start : npm run dev


In [cd backend]
npm init
npm install express mongoose multer bcrypt cloudinary cors dotenv jsonwebtoken nodemon validator
start : npm run server (npm start => npm run server //because we installed nodemon and added scripts in package.json),<br><br>
```
npm run server (backend start command w/using nodemon)
```


In [admin terminal] port:5174
```
start: npm run dev
```

In backend folders
* config folder : we're going to store multiple configuration file like cloudinary config, mongo DB config.
* controllers folder : we're going to create multiple controller function that will be main logic for the API 
* middlewares : we'll create custom middleware to authenticate the users and for other feature
* models : we'll create mongoos models to store data in the formated structures.
* routes : we'll set up different routes for the different APIs like user login appointment booking and ETC. 
* .env : we'll store the environment variables. 


[DATA BASE : Mongodb Atlas]
https://www.mongodb.com/cloud/atlas/register

[CSS : Tailwind]

[Cloudinary]

[Postman]
Didn't use 'Thunder Client', because free version doesn't allow 'file send'. 
So I used Postman instead.

[Convert image to BASE64]
https://www.base64-image.de/

[Text Stringify : With this tool you can JSON stringify the given text.]
https://onlinetexttools.com/json-stringify-text



[admin folder]
npm install axios react-router-dom react-toastify

[admin]
tailwind vite : https://tailwindcss.com/docs/guides/vite


[online payment in backend]
npm install razorpay
