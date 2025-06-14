import express from "express";
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use(cors({
    origin: '*', // or use '*' for development
    credentials: true // if you're using cookies or sessions
}));


app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
