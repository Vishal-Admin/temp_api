const express = require('express');

const app = express();
const PORT = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Import routes
const dummyDataRoutes = require('./src/routes/dummyData');
app.use('/api/dummy', dummyDataRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
