const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/tasks', taskRoutes);

// start server
db.sync().then(() => {
    console.log('Database and tables created.');
    app.listen(PORT, 'localhost', () => {
        console.log(`Server is running on port ${PORT}`)
    });
});


