const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import the database connection instance
const sequelize = require('./database/db');

// Test DB Connection
sequelize.authenticate()
    .then(() => {
        console.log('Database connected...');
        return sequelize.sync();
    })
    .catch(err => console.log('Error: ' + err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/employees', require('./routes/employees'));

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
