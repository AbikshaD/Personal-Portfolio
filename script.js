// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            navLinks.classList.remove('active');
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Skills Data - EDIT THIS SECTION!
const skillsData = {
    programming: [
        { name: "Java", level: "Advanced", icon: "fab fa-java" },
        { name: "C", level: "Intermediate", icon: "fa-c" },
        { name: "Python", level: "Intermediate", icon: "fab fa-python" },
        { name: "JavaScript", level: "Intermediate", icon: "fab fa-js-square" },
        { name: "C++", level: "Intermediate", icon: "fas fa-code" },
        { name: "SQL", level: "Intermediate", icon: "fas fa-database" },
        // Add more languages as needed
    ],
    
    frameworks: [
        { name: "React.js", level: "Intermediate", icon: "fab fa-react" },
        { name: "Node.js", level: "Intermediate", icon: "fab fa-node-js" },
        { name: "Express.js", level: "Intermediate", icon: "fas fa-server" },
        { name: "Bootstrap", level: "Basics", icon: "fab fa-bootstrap" },
        { name: "Tailwind CSS", level: "Basics", icon: "fas fa-palette" },
       
    ],
    
    tools: [
        { name: "Git & GitHub", level: "Advanced", icon: "fab fa-git-alt" },
        { name: "VS Code", level: "Advanced", icon: "fas fa-code" },
        { name: "MongoDB", level: "Intermediate", icon: "fas fa-database" },
        { name: "MySQL", level: "Advanced", icon: "fas fa-database" },
        { name: "Postman", level: "Beginner", icon: "fas fa-network-wired" },
        { name: "Firebase", level: "Beginner", icon: "fas fa-fire" }
        
    ]
};

// Function to render skills


// Project data - You can edit this too

// Function to render projects (optional - if you want dynamic loading)

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    // Uncomment below if you want dynamic project loading
    // renderProjects();
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
    });
});

// Form submission handler (if you add a contact form)
document.addEventListener('submit', function(e) {
    if (e.target.matches('form')) {
        e.preventDefault();
        // Handle form submission here
        alert('Thank you for your message! I will get back to you soon.');
        e.target.reset();
    }
});