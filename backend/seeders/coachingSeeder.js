const mongoose = require('mongoose');
const Coaching = require('../models/Coaching');

// Replace this with your MongoDB Atlas connection string
const MONGODB_URI = 'mongodb+srv://himanshichaturvedi2005:ymrmGQYNKdMs5WRH@cluster0.rqzxapm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const coachingCenters = [
    {
        name: "Excel Academy",
        image:"https://i.pinimg.com/736x/e0/89/47/e089476899db366b56b0c593e0cd30a4.jpg",
        description: "Excel Academy is a premier coaching center dedicated to helping students achieve their academic goals. With state-of-the-art facilities and experienced faculty, we provide comprehensive preparation for various competitive exams.",
        location: "Delhi",
        rating: 4.8,
        examType: "JEE Mains/Advanced",
        successRate: 85,
        facultyExperience: 12,
        courses: [
            {
                name: "JEE Advanced Complete Course",
                description: "Comprehensive preparation for JEE Advanced with focus on all three subjects - Physics, Chemistry, and Mathematics.",
                price: 150000,
                duration: "12 months",
                batchSize: 30,
                startDate: new Date("2024-04-01"),
                mode: "Hybrid",
                features: [
                    "Daily practice tests",
                    "Personalized doubt solving",
                    "Study material included",
                    "Online portal access",
                    "Regular mock tests"
                ],
                syllabus: [
                    "Complete Physics syllabus",
                    "Complete Chemistry syllabus",
                    "Complete Mathematics syllabus",
                    "Previous year papers analysis",
                    "Special focus on advanced topics"
                ]
            },
            {
                name: "JEE Mains Crash Course",
                description: "Intensive 3-month course for JEE Mains preparation with focus on important topics and quick revision.",
                price: 75000,
                duration: "3 months",
                batchSize: 25,
                startDate: new Date("2024-01-15"),
                mode: "Online",
                features: [
                    "Quick revision modules",
                    "Daily practice questions",
                    "Online doubt solving",
                    "Mock test series",
                    "Performance analytics"
                ],
                syllabus: [
                    "Important topics from Physics",
                    "Important topics from Chemistry",
                    "Important topics from Mathematics",
                    "Previous year papers practice",
                    "Time management strategies"
                ]
            }
        ],
        demoVideos: [
            {
                title: "Introduction to JEE Physics",
                url: "https://www.youtube.com/embed/sample1"
            },
            {
                title: "Chemistry Fundamentals",
                url: "https://www.youtube.com/embed/sample2"
            }
        ],
        testimonials: [
            {
                studentName: "Rahul Sharma",
                image: "https://randomuser.me/api/portraits/men/1.jpg",
                comment: "Excel Academy helped me secure AIR 45 in JEE Advanced. The faculty's dedication and personalized attention made all the difference."
            },
            {
                studentName: "Priya Patel",
                image: "https://randomuser.me/api/portraits/women/1.jpg",
                comment: "The structured approach and regular practice tests at Excel Academy prepared me well for JEE Mains. I got admission in my dream college!"
            }
        ],
        faculty: [
            {
                name: "Dr. Amit Kumar",
                specialization: "Physics",
                experience: "15 years"
            },
            {
                name: "Prof. Neha Singh",
                specialization: "Chemistry",
                experience: "12 years"
            },
            {
                name: "Dr. Rajesh Verma",
                specialization: "Mathematics",
                experience: "14 years"
            }
        ],
        toppers: [
            {
                name: "Vikram Singh",
                image: "https://randomuser.me/api/portraits/men/2.jpg",
                rank: "AIR 12",
                exam: "JEE Advanced 2023",
                score: "320/360"
            },
            {
                name: "Ananya Gupta",
                image: "https://randomuser.me/api/portraits/women/2.jpg",
                rank: "AIR 28",
                exam: "JEE Advanced 2023",
                score: "305/360"
            }
        ]
    },
    {
        name: "Anand Educare",
        image:"https://i.pinimg.com/736x/9a/04/36/9a04360dac1c35d3c27d8443370ee5fe.jpg",
        description: "Anand Educare is a premier coaching center dedicated to helping students achieve their academic goals. With state-of-the-art facilities and experienced faculty, we provide comprehensive preparation for various competitive exams.",
        location: "Patna",
        rating: 4.9,
        examType: "Class 9th-12th",
        successRate: 85,
        facultyExperience: 17,
        courses: [
            {
                name: "Class 9th Complete Course-CBSE",
                description: "Comprehensive preparation for Class 9th with focus on all subjects.",
                price: 20000,
                duration: "12 months",
                batchSize: 30,
                startDate: new Date("2024-04-03"),
                mode: "Hybrid",
                features: [
                    "Daily practice tests",
                    "Personalized doubt solving",
                    "Study material included",
                    "Online portal access",
                    "Regular mock tests"
                ],
                syllabus: [
                    "Complete Physics syllabus",
                    "Complete Chemistry syllabus",
                    "Complete Mathematics syllabus",
                    "Previous year papers analysis",
                    "Special focus on advanced topics"
                ]
            },
            {
                name: "Class 10th Complete Course-CBSE Board",
                description: "Intensive 7-month course for Board preparation with focus on important topics and quick revision.",
                price: 75000,
                duration: "3 months",
                batchSize: 25,
                startDate: new Date("2024-01-19"),
                mode: "Online",
                features: [
                    "Quick revision modules",
                    "Daily practice questions",
                    "Online doubt solving",
                    "Mock test series",
                    "Performance analytics"
                ],
                syllabus: [
                    "Important topics from Physics",
                    "Important topics from Chemistry",
                    "Important topics from Mathematics",
                    "Previous year papers practice",
                    "Time management strategies"
                ]
            },
            {
                name: "Class 10th Complete Course-ICSE Board",
                description: "Intensive 3-month course for Board preparation with focus on important topics and quick revision.",
                price: 75000,
                duration: "3 months",
                batchSize: 25,
                startDate: new Date("2024-01-15"),
                mode: "Hybrid",
                features: [
                    "Quick revision modules",
                    "Daily practice questions",
                    "Online doubt solving",
                    "Mock test series",
                    "Performance analytics"
                ],
                syllabus: [
                    "Important topics from SST",
                    "Important topics from English",
                    "Important topics from Mathematics",
                    "Previous year papers practice",
                    "Time management strategies"
                ]
            }
        ],
        demoVideos: [
            {
                title: "Introduction to Physics",
               
                 url: "https://www.youtube.com/embed/prQKq7JU3rU"
            },
            {
                title: "Biology Fundamentals",
                url: "https://www.youtube.com/embed/IfWAhHZl1FY"
            }
        ],
        testimonials: [
            {
                studentName: "Rahul Dravid",
                image: "https://randomuser.me/api/portraits/men/1.jpg",
                comment: "Excel Academy helped me secure AIR 45 in JEE Advanced. The faculty's dedication and personalized attention made all the difference."
            },
            {
                studentName: "Priya Singh",
                image: "https://randomuser.me/api/portraits/women/1.jpg",
                comment: "The structured approach and regular practice tests at Excel Academy prepared me well for JEE Mains. I got admission in my dream college!"
            }
        ],
        faculty: [
            {
                name: "Dr. Amit Kumar",
                specialization: "Science",
                experience: "15 years"
            },
            {
                name: "Prof. Neha Gupta",
                specialization: "SST and English",
                experience: "12 years"
            },
            {
                name: "Dr. Rajesh Verma",
                specialization: "Mathematics",
                experience: "14 years"
            }
        ],
        toppers: [
            {
                name: "Rajesh Kumar",
                image: "https://randomuser.me/api/portraits/men/2.jpg",
                rank: "AIR 12",
                exam: "ICSE 10th 2023",
                score: "320/360"
            },
            {
                name: "Rekha Gupta",
                image: "https://randomuser.me/api/portraits/women/2.jpg",
                rank: "AIR 28",
                exam: "10th Board 2023",
                score: "305/360"
            }
        ]
    }
];

const seedDatabase = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        await Coaching.deleteMany({}); // Clear existing data
        await Coaching.insertMany(coachingCenters);
        console.log('Database seeded successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();