const express = require('express');
const app = express();
const port = 8001;

app.get('/', (req, res) => {
    res.send('Hello from Node.js app!');
});

app.listen(port, () => {
    console.log(`App is listening at http://0.0.0.0:${port}`);
});

