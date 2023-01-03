import express from 'express';

import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/postRoutes.js';

import * as dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json({limit: '30mb', extended: true}));
app.use(express.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

const dbURL = 'mongodb+srv://'+process.env.user+':'+process.env.password+'@cluster0.zv0i5nc.mongodb.net/mern?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.set('strictQuery', false);
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log("Listening on port " + PORT)))
    .catch((error) => console.log(error.message));