// ============================================
// ENTER BUTTON FUNCTIONALITY
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const enterBtn = document.getElementById('enterBtn');
    
    if (enterBtn) {
        enterBtn.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'translate(-50%, -50%) scale(0.95)';
            
            setTimeout(() => {
                this.style.transform = '';
                // Add your navigation logic here
                // For example: window.location.href = 'main.html';
                alert('Welcome to GEC-Patan Sports Week 2026! 🏆');
            }, 200);
        });
    }

    // ============================================
    // CHARACTER INTERACTIONS
    // ============================================
    const characters = document.querySelectorAll('.character');
    
    // Character speech/reactions
    const characterSounds = {
        'char-doraemon': '🔵 Doraemon: "Let\'s play sports together!"',
        'char-shinchan': '🎭 Shinchan: "Action Kamen here!"',
        'char-bheem': '💪 Chota Bheem: "Let\'s win this!"',
        'char-nobita': '😊 Nobita: "I\'ll do my best!"',
        'char-jerry': '🐭 Jerry: "*squeak squeak*"',
        'char-tom': '🐱 Tom: "Meow!"',
        'char-oggy': '😺 Oggy: "Oh no, cockroaches!"',
        'char-ben10': '⌚ Ben 10: "It\'s hero time!"',
        'char-motu': '🍔 Motu: "Samosas please!"',
        'char-mrbean': '🤪 Mr. Bean: "Teddy!"'
    };

    characters.forEach(char => {
        // Click interaction
        char.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Find character class
            let charClass = '';
            this.classList.forEach(cls => {
                if (cls.startsWith('char-')) {
                    charClass = cls;
                }
            });
            
            // Show character speech
            if (characterSounds[charClass]) {
                showSpeechBubble(this, characterSounds[charClass]);
            }
            
            // Add special click animation
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.transform = 'rotate(360deg) scale(1.3)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 500);
            }, 10);
        });

        // Add double click for special effect
        char.addEventListener('dblclick', function(e) {
            e.stopPropagation();
            this.style.filter = 'drop-shadow(0 0 30px gold) hue-rotate(60deg)';
            setTimeout(() => {
                this.style.filter = '';
            }, 1000);
        });
    });

    // ============================================
    // SPEECH BUBBLE FUNCTION
    // ============================================
    function showSpeechBubble(element, text) {
        // Remove any existing speech bubbles
        const existingBubble = document.querySelector('.speech-bubble');
        if (existingBubble) {
            existingBubble.remove();
        }

        // Create speech bubble
        const bubble = document.createElement('div');
        bubble.className = 'speech-bubble';
        bubble.textContent = text;
        
        // Position bubble above character
        const rect = element.getBoundingClientRect();
        bubble.style.position = 'fixed';
        bubble.style.left = rect.left + rect.width / 2 + 'px';
        bubble.style.top = rect.top - 60 + 'px';
        bubble.style.transform = 'translateX(-50%)';
        bubble.style.background = 'white';
        bubble.style.padding = '10px 15px';
        bubble.style.borderRadius = '15px';
        bubble.style.border = '3px solid #FF6B35';
        bubble.style.fontSize = '14px';
        bubble.style.fontWeight = 'bold';
        bubble.style.zIndex = '1000';
        bubble.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
        bubble.style.animation = 'bubblePop 0.3s ease-out';
        bubble.style.whiteSpace = 'nowrap';
        
        document.body.appendChild(bubble);
        
        // Remove after 2 seconds
        setTimeout(() => {
            bubble.style.animation = 'bubbleFade 0.3s ease-out';
            setTimeout(() => bubble.remove(), 300);
        }, 2000);
    }

    // Add bubble animations to page
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bubblePop {
            0% { transform: translateX(-50%) scale(0); opacity: 0; }
            50% { transform: translateX(-50%) scale(1.1); }
            100% { transform: translateX(-50%) scale(1); opacity: 1; }
        }
        @keyframes bubbleFade {
            to { opacity: 0; transform: translateX(-50%) translateY(-20px); }
        }
    `;
    document.head.appendChild(style);
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
        const moveX = (mouseX - 0.5) * 15;
        const moveY = (mouseY - 0.5) * 15;
        title.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
    
    // Parallax for characters
    const characters = document.querySelectorAll('.character');
    characters.forEach((char, index) => {
        const speed = (index % 3 + 1) * 5;
        const moveX = (mouseX - 0.5) * speed;
        const moveY = (mouseY - 0.5) * speed;
        
        if (!char.matches(':hover')) {
            char.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });
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
