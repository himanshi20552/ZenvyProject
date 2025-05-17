const mongoose = require('mongoose');

const coachingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
     image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    examType: {
        type: String,
        required: true
    },
    successRate: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    facultyExperience: {
        type: Number,
        required: true
    },
    courses: [{
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        duration: {
            type: String,
            required: true
        },
        batchSize: {
            type: Number,
            required: true
        },
        startDate: {
            type: Date,
            required: true
        },
        mode: {
            type: String,
            required: true,
            enum: ['Online', 'Offline', 'Hybrid']
        },
        features: [{
            type: String,
            required: true
        }],
        syllabus: [{
            type: String,
            required: true
        }]
    }],
    demoVideos: [{
        title: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],
    testimonials: [{
        studentName: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true
        }
    }],
    faculty: [{
        name: {
            type: String,
            required: true
        },
        specialization: {
            type: String,
            required: true
        },
        experience: {
            type: String,
            required: true
        }
    }],
    toppers: [{
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        rank: {
            type: String,
            required: true
        },
        exam: {
            type: String,
            required: true
        },
        score: {
            type: String,
            required: true
        }
    }],
    features: [{
        icon: String,
        title: String,
        description: String
    }]
});

module.exports = mongoose.model('Coaching', coachingSchema);
