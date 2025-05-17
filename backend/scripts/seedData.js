const mongoose = require('mongoose');
const Coaching = require('../models/Coaching');
const connectDB = require('../config/db');

const sampleData = [
    {
        name: "IIT Academy",
        description: "Premier coaching for IIT-JEE",
        location: "Delhi",
        rating: 4.8,
        examType: "JEE Mains/Advanced",
        courses: [
            {
                name: "JEE Mains + Advanced Complete Course",
                description: "Comprehensive preparation for JEE Mains and Advanced",
                duration: "2 Years",
                price: 150000,
                features: [
                    "Daily Practice Tests",
                    "Personalized Doubt Solving",
                    "Study Material Included"
                ],
                syllabus: [
                    "Physics - Complete JEE Syllabus",
                    "Chemistry - Complete JEE Syllabus",
                    "Mathematics - Complete JEE Syllabus"
                ],
                batchSize: 30,
                startDate: new Date("2024-04-01"),
                mode: "Hybrid"
            }
        ],
        demoVideos: [
            {
                title: "Physics Demo Class",
                url: "https://example.com/video1.mp4"
            }
        ],
        testimonials: [
            {
                studentName: "Rahul Sharma",
                image: "../images/student.png",
                comment: "Great coaching center with excellent faculty!"
            }
        ],
        faculty: [
            {
                name: "Dr. Amit Kumar",
                specialization: "Physics",
                experience: "15 years"
            }
        ]
    }
];

const seedDatabase = async () => {
    try {
        await connectDB();
        // Clear existing data
        await Coaching.deleteMany({});
        // Insert new data
        await Coaching.insertMany(sampleData);
        console.log('Database seeded successfully');
        process.exit();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();