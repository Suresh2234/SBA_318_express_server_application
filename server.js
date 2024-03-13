// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to use EJS
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));

// Custom middleware 1
app.use((req, res, next) => {
    console.log('Custom Middleware 1');
    next();
});

// Custom middleware 2
app.use((req, res, next) => {
    console.log('Custom Middleware 2');
    next();
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Routes
// Sample data
const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
];

// GET route
app.get('/api/users', (req, res) => {
    res.json(users);
});

// POST route
app.post('/api/users', (req, res) => {
    // Add user
});

// DELETE route
app.delete('/api/users/:id', (req, res) => {
    // Delete user
});

// Render view
app.get('/', (req, res) => {
    res.render('index', { title: 'Express Server App' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
