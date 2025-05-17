const express = require('express');
const router = express.Router();
const Coaching = require('../models/Coaching');

// Get all coaching centers
router.get('/coaching-centers', async (req, res) => {
    try {
        const { examType, location } = req.query;
        let query = {};
        
        if (examType) {
            query.examType = examType;
        }
        if (location) {
            query.location = location;
        }
        
        const centers = await Coaching.find(query);
        res.json(centers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get single coaching center by ID
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
        const searchQuery = req.params.query;
        const centers = await Coaching.find({
            $or: [
                { name: { $regex: searchQuery, $options: 'i' } },
                { location: { $regex: searchQuery, $options: 'i' } },
                { examType: { $regex: searchQuery, $options: 'i' } }
            ]
        });
        res.json(centers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
