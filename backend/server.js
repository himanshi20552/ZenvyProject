const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const coachingRoutes = require('./routes/coachingRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

// API Routes
app.use('/api', coachingRoutes);

// Serve HTML files
app.get('/', (req, res) => {
    console.log('Serving Main.html');
    res.sendFile(path.join(__dirname, '../frontend/pages/Main.html'));
});


app.get('/coaching', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/coaching.html'));
});

app.get('/search', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/search.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/about.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/login.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/signup.html'));
});

app.get('/help', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/help.html'));
});

app.get('/support', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/support.html'));
});

app.get('/course', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/course.html'));
});
app.get('/home', (req, res) => {
    const filePath = path.join(__dirname, '../frontend/pages/home.html');
    console.log('Serving home page from:', filePath);
    console.log(path.join(__dirname, '../frontend/pages/home.html'))
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).send('Failed to load home page');
        }
    });
});


app.get('/enroll', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/enroll.html'));
});


// Handle 404 - Page not found
app.use((req, res) => {
    console.log('404 - Page not found:', req.url);
    res.status(404).sendFile(path.join(__dirname, '../frontend/pages/404.html'));
});
app.get('/api/coaching/:id', async (req, res) => {
    const coachingId = req.params.id;
    try {
        const coaching = await Coaching.findById(coachingId);
        if (!coaching) return res.status(404).json({ error: "Not found" });
        res.json(coaching);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
