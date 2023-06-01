const express = require('express');
const server = express();
const port = 5000;

server.get('/', (req, res) => {
    res.send('Hello from Express!');
    }
);

server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
    }
);