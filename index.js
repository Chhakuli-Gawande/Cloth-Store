import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import clothRoute from "./route/cloth.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors({
    origin: ['http://localhost:5174','https://cloth-store-frontend.vercel.app/'], // Replace with your frontend URL
    methods: 'GET, POST, PUT, DELETE',
    credentials: true // Include this if cookies are involved
  }));
  
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MongoDBURI;
mongoose.connect(MONGO_URI);

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// connect to mongoDB
try {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/cloth", clothRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});