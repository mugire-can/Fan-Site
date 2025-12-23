/**
 * VIBE CODING - Interactive Enhancement Script
 * Adds dynamic animations, smooth transitions, and interactive features
 * to the Sezen & Barış Fansite
 */

// ============================================
// 1. DARK MODE TOGGLE
// ============================================
function initDarkMode() {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.id = 'dark-mode-btn';
    darkModeToggle.innerHTML = '🌙';
    darkModeToggle.setAttribute('aria-label', 'Toggle dark mode');
    darkModeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: rgba(97, 185, 196, 0.8);
        border: none;
        font-size: 24px;
        cursor: pointer;
        z-index: 998;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    `;

    darkModeToggle.onmouseover = () => {
        darkModeToggle.style.background = 'rgba(97, 185, 196, 1)';
        darkModeToggle.style.transform = 'scale(1.1)';
    };

    darkModeToggle.onmouseout = () => {
        darkModeToggle.style.background = 'rgba(97, 185, 196, 0.8)';
        darkModeToggle.style.transform = 'scale(1)';
    };

    darkModeToggle.onclick = () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        darkModeToggle.innerHTML = isDarkMode ? '☀️' : '🌙';
    };

    document.body.appendChild(darkModeToggle);

    // Load saved preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '☀️';
    }
}

// ============================================
// 2. SMOOTH SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections and articles
    document.querySelectorAll('article, section, .content-section').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// ============================================
// 3. HOVER ANIMATIONS FOR LINKS
// ============================================
function initLinkAnimations() {
    const links = document.querySelectorAll('a:not(.skip-nav)');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
            this.style.color = '#ff6b6b';
            this.style.textDecoration = 'underline';
        });

        link.addEventListener('mouseleave', function() {
            this.style.color = '';
            this.style.textDecoration = '';
        });
    });
}

// ============================================
// 4. BUTTON ANIMATIONS
// ============================================
function initButtonAnimations() {
    const buttons = document.querySelectorAll('button, input[type="submit"]');
    
    buttons.forEach(btn => {
        btn.style.transition = 'all 0.3s ease';
        
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 4px 12px rgba(97, 185, 196, 0.4)';
        });

        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '';
        });

        btn.addEventListener('click', function(e) {
            // Ripple effect
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple-animation 0.6s ease-out;
                pointer-events: none;
            `;
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// ============================================
// 5. PARALLAX EFFECT ON SCROLL
// ============================================
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(el => {
            const speed = el.getAttribute('data-parallax') || 0.5;
            const yPos = window.pageYOffset * speed;
            el.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// ============================================
// 6. FORM ANIMATIONS
// ============================================
function initFormAnimations() {
    const inputs = document.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        input.style.transition = 'all 0.3s ease';
        
        input.addEventListener('focus', function() {
            this.style.borderColor = '#61b9c4';
            this.style.boxShadow = '0 0 10px rgba(97, 185, 196, 0.3)';
            this.style.transform = 'scale(1.02)';
        });

        input.addEventListener('blur', function() {
            this.style.borderColor = '';
            this.style.boxShadow = '';
            this.style.transform = 'scale(1)';
        });
    });
}

// ============================================
// 7. TEXT ANIMATION - TYPEWRITER EFFECT
// ============================================
function typewriterEffect(element, speed = 50) {
    if (!element) return;
    
    const text = element.textContent;
    element.textContent = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ============================================
// 8. COUNTER ANIMATION
// ============================================
function animateCounter(element, target, duration = 2000) {
    if (!element) return;
    
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
}

// ============================================
// 9. LOADING ANIMATION
// ============================================
function showLoadingAnimation() {
    const loader = document.createElement('div');
    loader.id = 'vibe-loader';
    loader.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        border: 4px solid rgba(97, 185, 196, 0.2);
        border-top: 4px solid #61b9c4;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        z-index: 9999;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(loader);
}

function hideLoadingAnimation() {
    const loader = document.getElementById('vibe-loader');
    if (loader) loader.remove();
}

// ============================================
// 10. PAGE TRANSITION ANIMATIONS
// ============================================
function addPageTransitions() {
    const links = document.querySelectorAll('a:not([target="_blank"]):not(.skip-nav)');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't animate for anchor links or external links
            if (href.startsWith('#') || !href.startsWith('http') && !href.startsWith('/')) {
                return;
            }

            e.preventDefault();
            showLoadingAnimation();
            
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
}

// ============================================
// 11. MUSIC PLAYER ENHANCEMENTS
// ============================================
function initMusicPlayerEnhancements() {
    const audioElements = document.querySelectorAll('audio');
    
    audioElements.forEach(audio => {
        if (audio.parentElement) {
            audio.parentElement.style.transition = 'all 0.3s ease';
            
            audio.addEventListener('play', function() {
                this.parentElement.style.opacity = '1';
                this.parentElement.style.transform = 'scale(1.02)';
            });

            audio.addEventListener('pause', function() {
                this.parentElement.style.opacity = '0.8';
                this.parentElement.style.transform = 'scale(1)';
            });
        }
    });
}

// ============================================
// 12. SCROLL TO TOP BUTTON
// ============================================
function initScrollToTop() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scroll-top-btn';
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: rgba(97, 185, 196, 0.8);
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        z-index: 997;
        transition: all 0.3s ease;
        opacity: 0;
        pointer-events: none;
    `;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.pointerEvents = 'auto';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.pointerEvents = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.body.appendChild(scrollTopBtn);
}

// ============================================
// 13. KEYBOARD SHORTCUTS
// ============================================
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Alt + D for dark mode
        if (e.altKey && e.key === 'd') {
            const darkModeBtn = document.getElementById('dark-mode-btn');
            if (darkModeBtn) darkModeBtn.click();
        }
        
        // Alt + T for scroll to top
        if (e.altKey && e.key === 't') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎨 VIBE CODING activated!');
    
    initDarkMode();
    initScrollAnimations();
    initLinkAnimations();
    initButtonAnimations();
    initFormAnimations();
    initMusicPlayerEnhancements();
    initScrollToTop();
    initKeyboardShortcuts();
    addPageTransitions();
    
    // Optional: Initialize parallax if elements exist
    if (document.querySelectorAll('[data-parallax]').length > 0) {
        initParallax();
    }
    
    console.log('✨ All VIBE CODING features loaded!');
});

// ============================================
// UTILITY FUNCTIONS - Available globally
// ============================================
window.VibeAPI = {
    typewriter: typewriterEffect,
    animateCounter: animateCounter,
    showLoader: showLoadingAnimation,
    hideLoader: hideLoadingAnimation
};
