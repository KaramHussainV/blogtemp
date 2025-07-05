
// Initialize AOS (Animate On Scroll) Library - Disabled for content
AOS.init({
    duration: 0,
    easing: 'ease-in-out',
    once: true,
    offset: 80,
    disable: 'mobile'
});

// Custom Cursor
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

let isMouseOnPage = false;

document.addEventListener('mouseenter', () => {
    isMouseOnPage = true;
    cursor.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    isMouseOnPage = false;
    cursor.style.opacity = '0';
});

document.addEventListener('mousemove', (e) => {
    if (isMouseOnPage) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor.style.opacity = '1';
    }
});

// Cursor hover effects
document.addEventListener('mouseenter', (e) => {
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.classList.contains('clickable')) {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.background = 'rgba(56, 182, 255, 0.8)';
    }
});

document.addEventListener('mouseleave', (e) => {
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.classList.contains('clickable')) {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = 'var(--primary-blue)';
    }
});

// Create Enhanced Background Elements
function createBackgroundElements() {
    const animatedBg = document.querySelector('.animated-bg');
    
    // Create geometric shapes container
    const geometricShapes = document.createElement('div');
    geometricShapes.className = 'geometric-shapes';
    
    // Create floating cubes
    for (let i = 0; i < 8; i++) {
        const cube = document.createElement('div');
        cube.className = 'floating-cube';
        cube.style.top = Math.random() * 100 + '%';
        cube.style.left = Math.random() * 100 + '%';
        cube.style.animationDelay = Math.random() * 12 + 's';
        cube.style.animationDuration = (8 + Math.random() * 8) + 's';
        geometricShapes.appendChild(cube);
    }
    
    // Create spiral lines container
    const spiralLines = document.createElement('div');
    spiralLines.className = 'spiral-lines';
    
    for (let i = 0; i < 6; i++) {
        const line = document.createElement('div');
        line.className = 'spiral-line';
        line.style.top = Math.random() * 100 + '%';
        line.style.left = Math.random() * 100 + '%';
        line.style.animationDelay = Math.random() * 20 + 's';
        line.style.transform = `rotate(${Math.random() * 360}deg)`;
        spiralLines.appendChild(line);
    }
    
    // Create floating particles container
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'floating-particles';
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
    
    // Create network lines container
    const networkLines = document.createElement('div');
    networkLines.className = 'network-lines';
    
    for (let i = 0; i < 5; i++) {
        const line = document.createElement('div');
        line.className = 'network-line';
        line.style.top = (i * 20 + 10) + '%';
        line.style.left = '0';
        line.style.width = '100%';
        line.style.animationDelay = i * 1.6 + 's';
        networkLines.appendChild(line);
    }
    
    // Append all containers to animated background
    animatedBg.appendChild(geometricShapes);
    animatedBg.appendChild(spiralLines);
    animatedBg.appendChild(particlesContainer);
    animatedBg.appendChild(networkLines);
}

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced Background Animation with Mouse Interaction
document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    // Animate floating cubes based on mouse position
    const cubes = document.querySelectorAll('.floating-cube');
    cubes.forEach((cube, index) => {
        const speed = (index + 1) * 0.3;
        const xMove = (mouseX - 0.5) * speed * 15;
        const yMove = (mouseY - 0.5) * speed * 15;
        
        cube.style.transform = `translate(${xMove}px, ${yMove}px) rotateX(${xMove * 0.5}deg) rotateY(${yMove * 0.5}deg)`;
    });
    
    // Animate spiral lines
    const spiralLines = document.querySelectorAll('.spiral-line');
    spiralLines.forEach((line, index) => {
        const speed = (index + 1) * 0.2;
        const rotation = (mouseX - 0.5) * speed * 30;
        
        line.style.transform = `rotate(${rotation}deg) translateY(${(mouseY - 0.5) * speed * 20}px)`;
    });
    
    // Animate particles
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        const speed = (index + 1) * 0.1;
        const xMove = (mouseX - 0.5) * speed * 10;
        const yMove = (mouseY - 0.5) * speed * 10;
        
        particle.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
});

// Copy Code Functionality
function copyCode(button) {
    const codeBlock = button.closest('.code-block');
    const code = codeBlock.querySelector('code');
    const text = code.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        button.innerHTML = '<i class="fas fa-check"></i>';
        button.style.color = '#10b981';
        
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-copy"></i>';
            button.style.color = '';
        }, 2000);
    });
}

// Blog Slider Functionality
function initBlogSlider() {
    const slider = document.querySelector('.blogs-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const blogCards = document.querySelectorAll('.blog-card');
    
    let currentIndex = 0;
    const cardsToShow = window.innerWidth <= 768 ? 1 : window.innerWidth <= 992 ? 2 : 3;
    const maxIndex = Math.max(0, blogCards.length - cardsToShow);
    
    function updateSlider() {
        const translateX = -(currentIndex * (100 / cardsToShow));
        slider.style.transform = `translateX(${translateX}%)`;
        
        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= maxIndex;
        
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
    }
    
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    });
    
    // Auto-slide functionality
    setInterval(() => {
        if (currentIndex >= maxIndex) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateSlider();
    }, 5000);
    
    // Initialize
    updateSlider();
    
    // Update on window resize
    window.addEventListener('resize', () => {
        const newCardsToShow = window.innerWidth <= 768 ? 1 : window.innerWidth <= 992 ? 2 : 3;
        if (newCardsToShow !== cardsToShow) {
            location.reload(); // Simple solution for responsive changes
        }
    });
}

// Enhanced Floating Animation for Banner Icons
document.addEventListener('DOMContentLoaded', function() {
    // Create background elements
    createBackgroundElements();
    
    // Initialize blog slider
    initBlogSlider();
    
    // Add hover effects to blog cards
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Dynamic Particle Creation
function createDynamicParticle() {
    const container = document.querySelector('.floating-particles');
    if (!container) return;
    
    const particle = document.createElement('div');
    particle.className = 'particle dynamic-particle';
    
    // Random position and properties
    particle.style.left = Math.random() * 100 + '%';
    particle.style.width = (2 + Math.random() * 4) + 'px';
    particle.style.height = particle.style.width;
    particle.style.opacity = 0.2 + Math.random() * 0.4;
    particle.style.animation = `particleFloat ${10 + Math.random() * 10}s linear infinite`;
    
    container.appendChild(particle);
    
    // Remove after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, 20000);
}

// Create dynamic particles periodically
setInterval(createDynamicParticle, 3000);

// Newsletter Form Handling
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('.newsletter-input').value;
    
    if (email) {
        const button = this.querySelector('.newsletter-btn');
        const originalContent = button.innerHTML;
        
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        button.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-check"></i>';
            button.style.background = '#10b981';
            
            setTimeout(() => {
                button.innerHTML = originalContent;
                button.style.background = '';
                button.disabled = false;
                this.querySelector('.newsletter-input').value = '';
            }, 2000);
        }, 1000);
    }
});

// Performance Optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Parallax effect for background elements
window.addEventListener('scroll', throttle(function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.3;
    
    // Animate cubes on scroll
    const cubes = document.querySelectorAll('.floating-cube');
    cubes.forEach((cube, index) => {
        const speed = (index + 1) * 0.1;
        cube.style.transform = `translateY(${rate * speed}px) rotateX(${scrolled * 0.02}deg) rotateY(${scrolled * 0.01}deg)`;
    });
    
    // Animate spiral lines on scroll
    const spiralLines = document.querySelectorAll('.spiral-line');
    spiralLines.forEach((line, index) => {
        const speed = (index + 1) * 0.05;
        line.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
}, 16));

// Accessibility: Keyboard Navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Add focus styles for keyboard navigation
const focusStyles = document.createElement('style');
focusStyles.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid #38B6FF !important;
        outline-offset: 2px !important;
    }
`;
document.head.appendChild(focusStyles);

// Loading Animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Preload images for better performance
const imageUrls = [
    'https://media.licdn.com/dms/image/v2/D5612AQEfWsvltTdUCw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1696889087798?e=2147483647&v=beta&t=ftH7y1vIFYXE6KiIbDf1ygZTcdzi568y79Mvm63NMV4',
    'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=400'
];

imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
});

console.log('CloudGenie Professional Blog Template Loaded Successfully! ☁️✨');
