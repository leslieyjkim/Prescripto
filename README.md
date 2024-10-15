



Start separate terminals, one for 'frontend' the other for 'backend'

In [cd frontend]
start : npm run dev


In [cd backend]
npm init
npm install express mongoose multer bcrypt cloudinary cors dotenv jsonwebtoken nodemon validator
start : npm run server (npm start => npm run server //because we installed nodemon and added scripts in package.json)


In backend folders
* config folder : we're going to store multiple configuration file like cloudinary config, mongo DB config.
* controllers folder : we're going to create multiple controller function that will be main logic for the API 
* middlewares : we'll create custom middleware to authenticate the users and for other feature
* models : we'll create mongoos models to store data in the formated structures.
* routes : we'll set up different routes for the different APIs like user login appointment booking and ETC. 
* .env : we'll store the environment variables. 


[Mongodb Atlas]
https://www.mongodb.com/cloud/atlas/register