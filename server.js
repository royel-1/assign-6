const express = require('express');

const app = express();

const path = require('path');

// Serve static files
app.use(express.static('public'));

// Port number
const PORT = 3000;

// Start server
app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});
