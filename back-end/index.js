// import express
import express from 'express';

var app = express();
const PORT = 3000;
app.use(express.json());

// Routes

// Backend for my TimeWelder app


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});