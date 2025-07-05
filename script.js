// Initialize AOS (Animate On Scroll) Library
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 80,
    disable: 'mobile'
});

// Enhanced Background Animation System
function createEnhancedBackgroundElements() {
    const animatedBg = document.querySelector('.animated-bg');
    
    // Create Floating Dots - Adjust DOT_COUNT to change quantity (default: 30)
    const DOT_COUNT = 30; // Change this number to increase/decrease dot concentration
    const floatingDots = document.querySelector('.floating-dots');
    
    for (let i = 0; i < DOT_COUNT; i++) {
        const dot = document.createElement('div');
        dot.className = 'floating-dot';
        dot.style.left = Math.random() * 100 + '%';
        dot.style.animationDelay = Math.random() * 15 + 's';
        dot.style.animationDuration = (10 + Math.random() * 10) + 's';
        // Adjust opacity and size for concentration
        dot.style.opacity = 0.3 + Math.random() * 0.4;
        dot.style.width = dot.style.height = (3 + Math.random() * 3) + 'px';
        floatingDots.appendChild(dot);
    }
    
    // Create Geometric Shapes - Control SHAPE_DENSITY for concentration
    const SHAPE_DENSITY = 15; // Change this number for shape concentration
    const geometricShapes = document.querySelector('.geometric-shapes');
    const shapeTypes = ['triangle', 'square', 'circle'];
    
    for (let i = 0; i < SHAPE_DENSITY; i++) {
        const shape = document.createElement('div');
        const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        shape.className = `geometric-shape ${shapeType}`;
        shape.style.top = Math.random() * 100 + '%';
        shape.style.left = Math.random() * 100 + '%';
        shape.style.animationDelay = Math.random() * 12 + 's';
        shape.style.animationDuration = (8 + Math.random() * 8) + 's';
        // Adjust opacity for concentration control
        shape.style.opacity = 0.4 + Math.random() * 0.4;
        geometricShapes.appendChild(shape);
    }
    
    // Create Spiral Lines - Adjust SPIRAL_COUNT for more/fewer spirals
    const SPIRAL_COUNT = 8; // Change this number for spiral concentration
    const spiralContainer = document.querySelector('.spiral-container');
    
    for (let i = 0; i < SPIRAL_COUNT; i++) {
        const spiral = document.createElement('div');
        spiral.className = 'spiral-line';
        spiral.style.top = Math.random() * 100 + '%';
        spiral.style.left = Math.random() * 100 + '%';
        spiral.style.animationDelay = Math.random() * 20 + 's';
        spiral.style.transform = `rotate(${Math.random() * 360}deg)`;
        // Adjust opacity and height for visibility control
        spiral.style.opacity = 0.3 + Math.random() * 0.5;
        spiral.style.height = (150 + Math.random() * 100) + 'px';
        spiralContainer.appendChild(spiral);
    }
    
    // Create Network Lines - Modify NETWORK_DENSITY for line concentration
    const NETWORK_DENSITY = 10; // Change this number for network line concentration
    const networkLines = document.querySelector('.network-lines');
    
    for (let i = 0; i < NETWORK_DENSITY; i++) {
        const line = document.createElement('div');
        line.className = 'network-line';
        line.style.top = (i * (100 / NETWORK_DENSITY) + Math.random() * 10) + '%';
        line.style.left = '0';
        line.style.width = '100%';
        line.style.animationDelay = i * 1.6 + 's';
        // Adjust opacity for concentration
        line.style.opacity = 0.2 + Math.random() * 0.4;
        networkLines.appendChild(line);
    }
    
    // Create 3D Floating Cubes - Change CUBE_DENSITY for concentration
    const CUBE_DENSITY = 10; // Change this number for cube concentration
    const floatingCubes = document.querySelector('.floating-cubes');
    
    for (let i = 0; i < CUBE_DENSITY; i++) {
        const cube = document.createElement('div');
        cube.className = 'floating-cube';
        cube.style.top = Math.random() * 100 + '%';
        cube.style.left = Math.random() * 100 + '%';
        cube.style.animationDelay = Math.random() * 12 + 's';
        cube.style.animationDuration = (8 + Math.random() * 8) + 's';
        // Adjust size and opacity for concentration control
        const size = 30 + Math.random() * 20;
        cube.style.width = cube.style.height = size + 'px';
        cube.style.opacity = 0.4 + Math.random() * 0.4;
        floatingCubes.appendChild(cube);
    }
    
    // Create Particle System - Adjust PARTICLE_DENSITY for concentration
    const PARTICLE_DENSITY = 25; // Change this number for particle concentration
    const particleSystem = document.querySelector('.particle-system');
    
    for (let i = 0; i < PARTICLE_DENSITY; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        // Adjust size and opacity for concentration
        const size = 2 + Math.random() * 4;
        particle.style.width = particle.style.height = size + 'px';
        particle.style.opacity = 0.3 + Math.random() * 0.4;
        particleSystem.appendChild(particle);
    }
}

// Footer Animation System
function createFooterAnimations() {
    // Footer Floating Dots - Adjust FOOTER_DOT_COUNT for quantity
    const FOOTER_DOT_COUNT = 20; // Change this number for footer dot concentration
    const footerDots = document.querySelector('.footer-dots');
    
    for (let i = 0; i < FOOTER_DOT_COUNT; i++) {
        const dot = document.createElement('div');
        dot.className = 'footer-dot';
        dot.style.left = Math.random() * 100 + '%';
        dot.style.animationDelay = Math.random() * 20 + 's';
        dot.style.animationDuration = (15 + Math.random() * 10) + 's';
        // Adjust size and opacity for visibility
        const size = 4 + Math.random() * 4;
        dot.style.width = dot.style.height = size + 'px';
        dot.style.opacity = 0.3 + Math.random() * 0.3;
        footerDots.appendChild(dot);
    }
}

// Fixed Navbar Functionality
function initNavbar() {
    const exploreToggle = document.getElementById('exploreToggle');
    const exploreDropdown = document.getElementById('exploreDropdown');
    const navbar = document.getElementById('mainNav');
    
    // Toggle dropdown
    exploreToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isOpen = exploreDropdown.classList.contains('show');
        
        if (isOpen) {
            exploreDropdown.classList.remove('show');
            exploreToggle.classList.remove('active');
        } else {
            exploreDropdown.classList.add('show');
            exploreToggle.classList.add('active');
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!exploreToggle.contains(e.target) && !exploreDropdown.contains(e.target)) {
            exploreDropdown.classList.remove('show');
            exploreToggle.classList.remove('active');
        }
    });
    
    // Close dropdown when clicking on dropdown items
    const dropdownItems = exploreDropdown.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            exploreDropdown.classList.remove('show');
            exploreToggle.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

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

// Enhanced Copy Code Functionality
function copyCode(button) {
    const codeBlock = button.closest('.modern-code-block');
    const code = codeBlock.querySelector('code');
    const text = code.textContent;
    const copyText = button.querySelector('.copy-text');
    const copyIcon = button.querySelector('i');
    
    navigator.clipboard.writeText(text).then(() => {
        copyIcon.className = 'fas fa-check';
        copyText.textContent = 'Copied!';
        button.style.background = 'rgba(16, 185, 129, 0.2)';
        button.style.borderColor = 'rgba(16, 185, 129, 0.5)';
        button.style.color = '#10b981';
        
        setTimeout(() => {
            copyIcon.className = 'fas fa-copy';
            copyText.textContent = 'Copy';
            button.style.background = '';
            button.style.borderColor = '';
            button.style.color = '';
        }, 2000);
    }).catch(() => {
        copyIcon.className = 'fas fa-times';
        copyText.textContent = 'Failed';
        button.style.background = 'rgba(239, 68, 68, 0.2)';
        button.style.borderColor = 'rgba(239, 68, 68, 0.5)';
        button.style.color = '#ef4444';
        
        setTimeout(() => {
            copyIcon.className = 'fas fa-copy';
            copyText.textContent = 'Copy';
            button.style.background = '';
            button.style.borderColor = '';
            button.style.color = '';
        }, 2000);
    });
}

// Fixed Blog Slider Functionality
function initBlogSlider() {
    const slider = document.querySelector('.blogs-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const blogCards = document.querySelectorAll('.blog-card');
    
    if (!slider || !prevBtn || !nextBtn || blogCards.length === 0) return;
    
    let currentIndex = 0;
    let cardsToShow = getCardsToShow();
    let maxIndex = Math.max(0, blogCards.length - cardsToShow);
    
    function getCardsToShow() {
        if (window.innerWidth <= 576) return 1;
        if (window.innerWidth <= 992) return 2;
        return 3;
    }
    
    function updateSlider() {
        const cardWidth = 100 / cardsToShow;
        const translateX = -(currentIndex * cardWidth);
        slider.style.transform = `translateX(${translateX}%)`;
        
        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= maxIndex;
        
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
    }
    
    function updateResponsive() {
        cardsToShow = getCardsToShow();
        maxIndex = Math.max(0, blogCards.length - cardsToShow);
        
        // Reset to first slide if current index is out of bounds
        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }
        
        // Update card flex basis
        blogCards.forEach(card => {
            if (cardsToShow === 1) {
                card.style.flex = '0 0 100%';
            } else if (cardsToShow === 2) {
                card.style.flex = '0 0 calc(50% - 0.5rem)';
            } else {
                card.style.flex = '0 0 calc(33.333% - 1.33rem)';
            }
        });
        
        updateSlider();
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
    let autoSlideInterval = setInterval(() => {
        if (currentIndex >= maxIndex) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateSlider();
    }, 5000);
    
    // Pause auto-slide on hover
    const sliderContainer = document.querySelector('.blogs-slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        
        sliderContainer.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(() => {
                if (currentIndex >= maxIndex) {
                    currentIndex = 0;
                } else {
                    currentIndex++;
                }
                updateSlider();
            }, 5000);
        });
    }
    
    // Initialize
    updateResponsive();
    
    // Update on window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateResponsive();
        }, 250);
    });
}

// Newsletter Form Handling
function initNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
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
}

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
    
    // Close dropdown on Escape key
    if (e.key === 'Escape') {
        const exploreDropdown = document.getElementById('exploreDropdown');
        const exploreToggle = document.getElementById('exploreToggle');
        if (exploreDropdown && exploreDropdown.classList.contains('show')) {
            exploreDropdown.classList.remove('show');
            exploreToggle.classList.remove('active');
        }
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

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navbar
    initNavbar();
    
    // Create enhanced background elements
    createEnhancedBackgroundElements();
    
    // Create footer animations
    createFooterAnimations();
    
    // Initialize blog slider
    initBlogSlider();
    
    // Initialize newsletter form
    initNewsletterForm();
    
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

console.log('CloudGenie Professional Blog Template Loaded Successfully! ☁️✨');
console.log('Background Animation Controls:');
console.log('- Adjust DOT_COUNT for floating dots concentration (default: 30)');
console.log('- Modify SHAPE_DENSITY for geometric shapes (default: 15)');
console.log('- Change SPIRAL_COUNT for spiral lines (default: 8)');
console.log('- Update NETWORK_DENSITY for network lines (default: 10)');
console.log('- Adjust CUBE_DENSITY for 3D cubes (default: 10)');
console.log('- Modify PARTICLE_DENSITY for particles (default: 25)');
console.log('- Change FOOTER_DOT_COUNT for footer dots (default: 20)');