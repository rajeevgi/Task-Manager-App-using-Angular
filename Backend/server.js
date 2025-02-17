const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/tasks', taskRoutes);

// start server
db.sync().then(() => {
    console.log('Database and tables created.');
    app.listen(process.env.PORT, 'localhost', () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    });
});


