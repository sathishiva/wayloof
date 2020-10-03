import express from 'express'; //nodejs server
import bodyParser from 'body-parser'; //for parsing requests
import usersRoutes from './routes/users.js'; //use js ext
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
const app = express();
const PORT = 5000;

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.once("open", () => {
  console.log("Database connected:", process.env.DB_URI);
});

db.on("error", (err) => {
  console.error("connection error:", err);
});


//3. init body parser
app.use(bodyParser.json())
//4. routing
app.use('/users', usersRoutes);
//2. load something to make sure the server is running
app.get('/', (req, res) => {
    res.send('HELLO FROM NODE SERVER')
});
//1. make app listnen incoming req
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))