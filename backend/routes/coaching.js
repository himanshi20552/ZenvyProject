const express = require('express');
const router = express.Router();
const Coaching = require('../models/Coaching');

// Get all coaching centers
router.get('/coaching-centers', async (req, res) => {
    try {
        const centers = await Coaching.find({}, {
            name: 1,
            location: 1,
            rating: 1,
            examType: 1,
            description: 1
        });
        res.json(centers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get coaching center by ID with all details
router.get('/coaching-centers/:id', async (req, res) => {
    try {
        const center = await Coaching.findById(req.params.id);
        if (!center) {
            return res.status(404).json({ message: 'Coaching center not found' });
        }
        res.json(center);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Search coaching centers
router.get('/coaching-centers/search/:query', async (req, res) => {
    try {
        const query = req.params.query;
        const centers = await Coaching.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { location: { $regex: query, $options: 'i' } },
                { examType: { $regex: query, $options: 'i' } }
            ]
        });
        res.json(centers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router; 