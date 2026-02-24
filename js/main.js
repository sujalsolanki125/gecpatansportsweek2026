// Countdown Timer Function
function initCountdown() {
    // Set event date - March 29, 2026
    const eventDate = new Date('2026-03-18T00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeRemaining = eventDate - now;

        if (timeRemaining < 0) {
            // Event has started
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '0';
            document.getElementById('minutes').textContent = '0';
            document.getElementById('seconds').textContent = '0';
            return;
        }

        // Calculate time units
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update DOM with animation
        updateElement('days', days);
        updateElement('hours', hours);
        updateElement('minutes', minutes);
        updateElement('seconds', seconds);
    }

    function updateElement(elementId, value) {
        const element = document.getElementById(elementId);
        const formattedValue = String(value).padStart(2, '0');

        if (element.textContent !== formattedValue) {
            element.textContent = formattedValue;
            element.classList.add('number-updated');
            setTimeout(() => {
                element.classList.remove('number-updated');
            }, 300);
        }
    }

    // Update immediately
    updateCountdown();

    // Update every second
    setInterval(updateCountdown, 1000);
}

// Smooth scroll for navigation
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Button interactions
function initButtonInteractions() {
    const exploreBtn = document.getElementById('explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            console.log('Explore Events clicked');
            // Add your navigation logic here
            alert('Events section coming soon!');
        });
    }

    // Add ripple effect to buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Mobile menu toggle (for future enhancement)
function initMobileMenu() {
    // Add mobile menu functionality here if needed
    const navItems = document.querySelectorAll('nav a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Close menu if open
            console.log('Navigating to:', item.getAttribute('href'));
        });
    });
}

// Scroll animation for elements
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
}

// Theme toggle (dark/light mode)
function initThemeToggle() {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');

    // Initialize with dark mode (default)
    if (!isDark) {
        html.classList.add('dark');
    }

    // For future theme toggle button
    window.toggleTheme = function() {
        html.classList.toggle('dark');
        localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    };
}

// Keyboard shortcuts
function initKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Press 'R' to register
        if (e.key === 'r' || e.key === 'R') {
            const registerBtn = document.querySelector('button:contains("Register")');
            if (registerBtn) registerBtn.click();
        }

        // Press 'E' to explore events
        if (e.key === 'e' || e.key === 'E') {
            const exploreBtn = document.getElementById('explore-btn');
            if (exploreBtn) exploreBtn.click();
        }
    });
}

// Performance monitoring
function initPerformanceMonitoring() {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time: ' + pageLoadTime + 'ms');
    }
}

// Lazy load images
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize all functionality
function initializeApp() {
    console.log('Initializing Sports Mahotsav 2026 Website...');
    
    // Initialize all modules
    initCountdown();
    initSmoothScroll();
    initButtonInteractions();
    initMobileMenu();
    initScrollAnimations();
    initThemeToggle();
    initKeyboardShortcuts();
    initPerformanceMonitoring();
    initLazyLoading();

    console.log('✓ All modules initialized successfully');
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Add ripple effect styles dynamically
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    button {
        position: relative;
        overflow: hidden;
    }

    .animate-in {
        animation: fadeInUp 0.6s ease-out;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Debugging helper
window.sportsEvent = {
    getCountdownTime: function() {
        return {
            days: document.getElementById('days').textContent,
            hours: document.getElementById('hours').textContent,
            minutes: document.getElementById('minutes').textContent,
            seconds: document.getElementById('seconds').textContent
        };
    },
    showDebugging: function() {
        console.log('Current countdown:', this.getCountdownTime());
        console.log('User Agent:', navigator.userAgent);
        console.log('Page visibility:', document.visibilityState);
    }
};

// Log on page visibility change
document.addEventListener('visibilitychange', function() {
    console.log('Page visibility changed to:', document.visibilityState);
});
