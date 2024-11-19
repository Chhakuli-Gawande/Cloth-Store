import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import clothRoute from "./route/cloth.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MongoDBURI;

// Middleware
app.use(cors({
    origin: ['http://localhost:5174', 'https://cloth-store-frontend.vercel.app'], // Your frontend URLs
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Allow credentials if necessary
}));

app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log("Error connecting to MongoDB:", error));

// Routes
app.use("/cloth", clothRoute);
app.use("/user", userRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
