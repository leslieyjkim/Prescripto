



Start separate terminals, one for 'frontend' the other for 'backend'

In [cd frontend]
start : npm run dev


In [cd backend]
npm init
npm install express mongoose multer bcrypt cloudinary cors dotenv jsonwebtoken nodemon validator
start : npm run server (npm start => npm run server //because we installed nodemon and added scripts in package.json)