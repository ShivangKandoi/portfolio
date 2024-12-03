// Smooth scroll with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 100; // Adjust offset as needed
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Enhanced scroll spy
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    const offset = 150; // Adjust as needed

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - offset) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Parallax effect for profile
const profile = document.querySelector('.profile-container');
if (profile) {
    window.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const x = (clientX - window.innerWidth / 2) * 0.01;
        const y = (clientY - window.innerHeight / 2) * 0.01;
        
        profile.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    });
}

// Progress bar animation on scroll
const progressBars = document.querySelectorAll('.progress-bar');
const animateProgress = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
};

const observer = new IntersectionObserver(animateProgress, {
    threshold: 0.5
});

progressBars.forEach(bar => observer.observe(bar));

// Initialize skill bars
document.querySelectorAll('.progress-bar').forEach(bar => {
    const percent = bar.dataset.percent;
    bar.style.setProperty('--percent', `${percent}%`);
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Message sent successfully!');
        contactForm.reset();
    });
}

// Project card tilt effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'none';
    });
});

// Project Cards Animation on Scroll
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.1 });

projectCards.forEach(card => {
    card.style.animationPlayState = 'paused';
    projectObserver.observe(card);
});

// Project Card Tilt Effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'none';
    });
}); 