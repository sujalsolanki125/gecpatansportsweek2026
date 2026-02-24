// ============================================
// ENTER BUTTON FUNCTIONALITY
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const enterBtn = document.getElementById('enterBtn');
    
    if (enterBtn) {
        enterBtn.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                this.style.transform = '';
                // Add your navigation logic here
                // For example: window.location.href = 'main.html';
                alert('Welcome to GEC-Patan Sports Week 2026! 🏆');
            }, 200);
        });
    }
});

// ============================================
// OPTIONAL: Add parallax effect on mouse move
// ============================================
document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    // Subtle parallax for title
    const title = document.querySelector('.title-image');
    if (title) {
        const moveX = (mouseX - 0.5) * 20;
        const moveY = (mouseY - 0.5) * 20;
        title.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
    
    // Parallax for characters
    const characters = document.querySelector('.characters-image');
    if (characters) {
        const moveX = (mouseX - 0.5) * 15;
        const moveY = (mouseY - 0.5) * 15;
        characters.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

// ============================================
// OPTIONAL: Keyboard navigation
// ============================================
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        const enterBtn = document.getElementById('enterBtn');
        if (enterBtn) {
            enterBtn.click();
        }
    }
});
