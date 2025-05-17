const Coaching = require('../models/Coaching');

// Get all coaching centers
exports.getAllCoaching = async (req, res) => {
    try {
        const coaching = await Coaching.find();
        res.json(coaching);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get single coaching center
exports.getCoachingById = async (req, res) => {
    try {
        const coaching = await Coaching.findById(req.params.id);
        if (!coaching) {
            return res.status(404).json({ message: 'Coaching center not found' });
        }
        res.json(coaching);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Search coaching centers
exports.searchCoaching = async (req, res) => {
    try {
        const { query, examType, location } = req.query;
        let searchQuery = {};

        if (query) {
            searchQuery.name = { $regex: query, $options: 'i' };
        }
        if (examType) {
            searchQuery.examType = examType;
        }
        if (location) {
            searchQuery.location = { $regex: location, $options: 'i' };
        }

        const coaching = await Coaching.find(searchQuery);
        res.json(coaching);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
