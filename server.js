import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

// Initialize the server
const PORT = process.env.PORT || 5001;
const app = express()

app.get('/', (req, res) => {
    res.json({ message: "App is running" })
})

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
})