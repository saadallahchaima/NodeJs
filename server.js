import express from 'express';

const app = express();
app.use(express.json()); // Middleware pour analyser les données JSON
const hostname = '127.0.0.1';

const port = process.env.PORT || 9090;

import userRoutes from "./routes/user.js";
app.use("/user",userRoutes);

app.listen(port , hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
    })
