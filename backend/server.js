import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import cors from 'cors';


const app = express();
const port = 5000;
const API_URL = "https://byabbe.se/on-this-day";


app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(express.static("public"));

app.post("/api/result", async (req, res) => {
    const { month, date } = req.body;

    try {
        const response = await axios.get(`${API_URL}/${month}/${date}/events.json`);
        const result = response.data;
        res.json({ event: result.events[Math.floor(Math.random() * result.events.length)] });
    } catch (error) {
        console.error(error.response?.data || error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
