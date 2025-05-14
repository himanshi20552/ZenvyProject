const data = {
    courses: [
        {
            title: "JEE (Main)",
            description: "Courses for JEE Main preparation with expert faculty.",
            icon: "images/jee.png",
            href: "6.html"
        },
        {
            title: "JEE Advanced",
            description: "Courses for JEE Advanced preparation with expert faculty.",
            icon: "images/advanced.png",
            href: "6.html"
    
        },
        {
            title: "UPSC",
            description: "Courses for UPSC preparation with expert faculty.",
            icon: "images/jee.png",
            href: "6.html"

        }
    ],
    faculty: [
        {
            name: "Prof. John Cooper",
            qualification: "University of Delhi",
            image: "images/pic.png"
        },
        {
            name: "Mrs. Angela",
            qualification: "University of Wisconsin",
            image: "images/pic.png"
        },
        {
            name: "Mr. Leo",
            qualification: "University of Michigan",
            image: "images/pic.png"
        },
        {
            name: "Ms. Ananya",
            qualification: "University of California",
            image: "images/pic.png"
        }
    ],
    videos: [
        {
            title: "JEE",
            src: "https://www.w3schools.com/html/mov_bbb.mp4 ",
            poster: "path/to/jee-poster.jpg"
        },
        {
            title: "JEE Advanced",
            src: "path/to/jee-advanced-demo-video.mp4",
            poster: "path/to/jee-advanced-poster.jpg"
        },
        {
            title: "UPSC",
            src: "path/to/upsc-demo-video.mp4",
            poster: "path/to/upsc-poster.jpg"
        }
    ]
};

// Populate Courses
const courseContainer = document.getElementById('courseContainer');
data.courses.forEach(course => {
let cardHTML = `
<div class="course-card">
    <img src="${course.icon}" alt="${course.title}">
    <h3>${course.title}</h3>
    <p>${course.description}</p>
</div>
`;

// Check if the course is JEE (Main)
if (course.title === "JEE (Main)") {
cardHTML = `
    <a href="6.html" style="text-decoration: none; color: inherit;">
        <div class="course-card">
            <img src="${course.icon}" alt="${course.title}">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
        </div>
    </a>
`;
}

courseContainer.insertAdjacentHTML('beforeend', cardHTML);
});

// Populate Faculty
const facultyContainer = document.getElementById('facultyContainer');
data.faculty.forEach(member => {
    const facultyCard = document.createElement('div');
    facultyCard.className = 'faculty-card';
    facultyCard.innerHTML = `
        <img src="${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.qualification}</p>
    `;
    facultyContainer.appendChild(facultyCard);
});

// Populate Videos
const videoContainer = document.getElementById('videoContainer');
data.videos.forEach(video => {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';
    videoCard.innerHTML = `
        <video width="300" height="200" controls poster="${video.poster}" title="${video.title} Demo Video">
            <source src="${video.src}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <h3>${video.title}</h3>
    `;
    videoContainer.appendChild(videoCard);
});

// Add FAQ functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});