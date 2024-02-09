import express from 'express';
import  {PORT,mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import BookRoutes from './routes/BookRoutes.js'
import cors from 'cors';

const app = express();

//middleware to parse request body
app.use(express.json());

app.use(cors());

//another way cors policy
// app.use(cors({
//    origin:"https://localhost:3000",
//    methods:['GET','POST','PUT','DELETE'],
//    allowedHeaders:['Content-Type'],
// }))

app.get('/',(req,res) => {
 
   return res.status(234).send("Welcome to mern start tutorial")
})

app.use('/books',BookRoutes)



mongoose.connect(mongoDBURL)
.then(() => {
   console.log('App connected to DataBase');
   app.listen((PORT),() => {
      console.log(`Listening on ${PORT}`)
   })
})
.catch((err) => {
   console.log(err);
})
