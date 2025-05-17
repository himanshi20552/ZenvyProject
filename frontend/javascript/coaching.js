// const data = {
//     courses: [
//         {
//             title: "JEE (Main)",
//             description: "Courses for JEE Main preparation with expert faculty.",
//             icon: "images/jee.png",
//             href: "course.html"
//         },
//         {
//             title: "JEE Advanced",
//             description: "Courses for JEE Advanced preparation with expert faculty.",
//             icon: "images/advanced.png",
//             href: "course.html"
    
//         },
//         {
//             title: "UPSC",
//             description: "Courses for UPSC preparation with expert faculty.",
//             icon: "images/jee.png",
//             href: "course.html"

//         }
//     ],
//     faculty: [
//         {
//             name: "Prof. John Cooper",
//             qualification: "University of Delhi",
//             image: "images/pic.png"
//         },
//         {
//             name: "Mrs. Angela",
//             qualification: "University of Wisconsin",
//             image: "images/pic.png"
//         },
//         {
//             name: "Mr. Leo",
//             qualification: "University of Michigan",
//             image: "images/pic.png"
//         },
//         {
//             name: "Ms. Ananya",
//             qualification: "University of California",
//             image: "images/pic.png"
//         }
//     ],
//     videos: [
//         {
//             title: "JEE",
//             src: "https://www.w3schools.com/html/mov_bbb.mp4 ",
//             poster: "path/to/jee-poster.jpg"
//         },
//         {
//             title: "JEE Advanced",
//             src: "path/to/jee-advanced-demo-video.mp4",
//             poster: "path/to/jee-advanced-poster.jpg"
//         },
//         {
//             title: "UPSC",
//             src: "path/to/upsc-demo-video.mp4",
//             poster: "path/to/upsc-poster.jpg"
//         }
//     ]
// };

// Populate Courses
// const courseContainer = document.getElementById('courseContainer');
// data.courses.forEach(course => {
// let cardHTML = `
// <div class="course-card">
//     <img src="${course.icon}" alt="${course.title}">
//     <h3>${course.title}</h3>
//     <p>${course.description}</p>
// </div>
// `;

// Check if the course is JEE (Main)
// if (course.title === "JEE (Main)") {
// cardHTML = `
//     <a href="course.html" style="text-decoration: none; color: inherit;">
//         <div class="course-card">
//             <img src="${course.icon}" alt="${course.title}">
//             <h3>${course.title}</h3>
//             <p>${course.description}</p>
//         </div>
//     </a>
// `;
// }

// courseContainer.insertAdjacentHTML('beforeend', cardHTML);
// });

const API_URL = '/api';

// Fetch coaching details
async function loadCoachingDetails(id) {
    try {
        const response = await fetch(`${API_URL}/coaching/${id}`);
        const coaching = await response.json();
        
        // Update header
        document.querySelector('.header h1').textContent = coaching.name;
        
        // Update features
        const featuresGrid = document.querySelector('.features-grid');
        featuresGrid.innerHTML = coaching.features.map(feature => `
            <div class="feature-card">
                <i class="${feature.icon}"></i>
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
            </div>
        `).join('');

        // Update demo videos
        const videoContainer = document.getElementById('videoContainer');
        videoContainer.innerHTML = coaching.demoVideos.map(video => `
            <div class="video-item">
                <h3>${video.title}</h3>
                <video src="${video.url}" controls></video>
            </div>
        `).join('');

        // Update faculty
        const facultyContainer = document.getElementById('facultyContainer');
        facultyContainer.innerHTML = coaching.faculty.map(member => `
            <div class="faculty-member">
                <h3>${member.name}</h3>
                <p>${member.specialization}</p>
                <p>Experience: ${member.experience}</p>
            </div>
        `).join('');

        // Update testimonials
        const testimonialContainer = document.querySelector('.testimonial-container');
        testimonialContainer.innerHTML = coaching.testimonials.map(testimonial => `
            <div class="testimonial-card">
                <img src="${testimonial.image}" alt="${testimonial.studentName}">
                <p>${testimonial.comment}</p>
                <h3>${testimonial.studentName}</h3>
            </div>
        `).join('');

    } catch (error) {
        console.error('Error loading coaching details:', error);
    }
}

// Load coaching details when page loads
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const coachingId = urlParams.get('id');
    if (coachingId) {
        loadCoachingDetails(coachingId);
    }
});

// Add FAQ functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});