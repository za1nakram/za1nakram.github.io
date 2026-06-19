/* ========================================
   ANIMATIONS.JS - Advanced Animations
   Smooth Transitions, Visual Effects, Parallax
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  initProgressBars();
  initSkillsAnimation();
  initParallaxEffect();
  initRevealOnScroll();
});

// ========================================
// PROGRESS BARS ANIMATION
// ========================================

/**
 * Initialize animated progress bars on skills page
 */
function initProgressBars() {
  const progressFills = document.querySelectorAll('.skill-progress-fill');

  if (progressFills.length === 0) return;

  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target;
        animateProgressBar(progressBar);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  progressFills.forEach(bar => {
    observer.observe(bar.parentElement);
  });
}

/**
 * Animate a single progress bar
 * @param {Element} progressBar - Progress bar element
 */
function animateProgressBar(progressBar) {
  // Get the percentage from data attribute
  const percentage = progressBar.getAttribute('style') || '0%';
  
  // Reset to 0
  progressBar.style.width = '0%';
  
  // Animate to target percentage
  setTimeout(() => {
    progressBar.style.width = percentage;
  }, 100);
}

// ========================================
// SKILLS ANIMATION
// ========================================

/**
 * Initialize skills card animations
 */
function initSkillsAnimation() {
  const skillCards = document.querySelectorAll('.skill-card, .skill-category');

  if (skillCards.length === 0) return;

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger animation
        setTimeout(() => {
          entry.target.classList.add('fade-in-up');
        }, index * 100);
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  skillCards.forEach(card => {
    observer.observe(card);
  });
}

// ========================================
// PARALLAX EFFECT
// ========================================

/**
 * Initialize parallax effect for hero sections
 */
function initParallaxEffect() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  if (parallaxElements.length === 0) return;

  window.addEventListener('scroll', throttleScroll(() => {
    parallaxElements.forEach(element => {
      const speed = parseFloat(element.getAttribute('data-parallax')) || 0.5;
      const yPos = window.scrollY * speed;
      
      element.style.transform = `translateY(${yPos}px)`;
    });
  }), false);
}

/**
 * Throttle scroll events
 * @param {Function} callback - Callback function
 * @returns {Function} - Throttled function
 */
function throttleScroll(callback) {
  let ticking = false;
  
  return function() {
    if (!ticking) {
      callback();
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
      });
    }
  };
}

// ========================================
// REVEAL ON SCROLL
// ========================================

/**
 * Initialize reveal on scroll animation
 */
function initRevealOnScroll() {
  const revealElements = document.querySelectorAll('[data-reveal]');

  if (revealElements.length === 0) return;

  const revealOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  };

  const revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const revealClass = element.getAttribute('data-reveal') || 'fade-in-up';
        
        element.classList.add(revealClass);
        revealObserver.unobserve(element);
      }
    });
  }, revealOptions);

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
}

// ========================================
// NUMBER COUNTER ANIMATION
// ========================================

/**
 * Animate number counter
 * @param {Element} element - Element containing the number
 * @param {Number} target - Target number
 * @param {Number} duration - Animation duration in milliseconds
 * @param {String} suffix - Optional suffix (%, +, etc.)
 */
function animateCounter(element, target, duration = 2000, suffix = '') {
  let current = 0;
  const startTime = Date.now();
  const increment = target / (duration / 16); // 60fps

  function updateCounter() {
    const now = Date.now();
    const progress = (now - startTime) / duration;

    if (progress < 1) {
      current = Math.floor(target * easeOutQuad(progress));
      element.textContent = current + suffix;
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target + suffix;
    }
  }

  updateCounter();
}

/**
 * Easing function - ease out quadratic
 * @param {Number} t - Time (0-1)
 * @returns {Number} - Eased value
 */
function easeOutQuad(t) {
  return 1 - (1 - t) * (1 - t);
}

/**
 * Easing function - ease in out cubic
 * @param {Number} t - Time (0-1)
 * @returns {Number} - Eased value
 */
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// ========================================
// ELEMENT SCALE ANIMATION ON HOVER
// ========================================

/**
 * Add scale animation on hover for elements
 */
function initHoverScaleAnimation() {
  const elements = document.querySelectorAll('[data-hover-scale]');

  elements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });

    element.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
}

// ========================================
// BLUR BACKGROUND ON SCROLL
// ========================================

/**
 * Create blur background effect on scroll
 */
function initBlurEffect() {
  const heroSection = document.querySelector('.hero');

  if (!heroSection) return;

  window.addEventListener('scroll', throttleScroll(() => {
    const scrolled = window.scrollY;
    const blur = Math.min(scrolled / 100, 10); // Max blur of 10px
    
    heroSection.style.filter = `blur(${blur}px)`;
  }));
}

// ========================================
// TEXT TYPING ANIMATION
// ========================================

/**
 * Create typing animation effect
 * @param {Element} element - Element to animate
 * @param {String} text - Text to type
 * @param {Number} speed - Typing speed in milliseconds per character
 * @param {Function} callback - Callback when done
 */
function typeText(element, text, speed = 100, callback = null) {
  let index = 0;
  element.textContent = ''; // Clear existing text

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }

  type();
}

// ========================================
// ANIMATED GRADIENT TEXT
// ========================================

/**
 * Create animated gradient text effect
 * @param {Element} element - Element with gradient text
 */
function animateGradientText(element) {
  if (!element) return;

  const text = element.textContent;
  const letters = text.split('');
  
  element.innerHTML = letters.map((letter, index) => {
    return `<span style="animation-delay: ${index * 0.05}s; display: inline-block; animation: fadeInUp 0.6s ease-out both;">${letter}</span>`;
  }).join('');
}

// ========================================
// SCROLL INDICATOR
// ========================================

/**
 * Initialize scroll indicator animation
 */
function initScrollIndicator() {
  const indicator = document.querySelector('[data-scroll-indicator]');

  if (!indicator) return;

  setInterval(() => {
    indicator.style.animation = 'bounce 1s ease-in-out';
    setTimeout(() => {
      indicator.style.animation = '';
    }, 1000);
  }, 3000);
}

// ========================================
// RIPPLE EFFECT ON CLICK
// ========================================

/**
 * Add ripple effect to buttons on click
 */
function initRippleEffect() {
  const buttons = document.querySelectorAll('.btn, button');

  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        animation: rippleAnimation 0.6s ease-out;
      `;

      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

// Add ripple animation to stylesheet
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  @keyframes rippleAnimation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(rippleStyle);

// Initialize ripple effect on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRippleEffect);
} else {
  initRippleEffect();
}

// ========================================
// GLITCH TEXT EFFECT
// ========================================

/**
 * Create glitch effect on text (for special elements)
 * @param {Element} element - Element to apply glitch effect
 * @param {Number} intensity - Intensity of glitch (1-10)
 */
function applyGlitchEffect(element, intensity = 5) {
  if (!element) return;

  element.classList.add('glitch-effect');
  element.style.setProperty('--glitch-intensity', intensity);
}

// Add glitch effect styles
const glitchStyle = document.createElement('style');
glitchStyle.textContent = `
  .glitch-effect {
    position: relative;
    --glitch-intensity: 5;
  }

  .glitch-effect::before,
  .glitch-effect::after {
    content: attr(data-glitch);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
  }

  .glitch-effect::before {
    animation: glitchBefore 0.3s infinite;
    color: rgba(37, 99, 235, 0.8);
    z-index: -1;
    text-shadow: -2px 0 #ff006e;
    clip-rect(0, 900px, 0, 0);
  }

  .glitch-effect::after {
    animation: glitchAfter 0.3s infinite;
    color: rgba(37, 99, 235, 0.8);
    z-index: -2;
    text-shadow: -2px 0 #00f5ff;
    clip-rect(0, 900px, 0, 0);
  }

  @keyframes glitchBefore {
    0% { clip-path: polygon(0 0, 0 0, 0 0, 0 0); }
    20% { clip-path: polygon(0 0, 100% 0, 100% var(--glitch-intensity), 0 calc(100% - var(--glitch-intensity))); }
    40% { clip-path: polygon(0 0, 100% 0, 100% calc(100% - var(--glitch-intensity)), 0 var(--glitch-intensity)); }
    60% { clip-path: polygon(0 0, 100% 0, 100% var(--glitch-intensity), 0 100%); }
    80% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 var(--glitch-intensity)); }
    100% { clip-path: polygon(0 0, 0 0, 0 0, 0 0); }
  }

  @keyframes glitchAfter {
    0% { clip-path: polygon(0 0, 0 0, 0 0, 0 0); }
    20% { clip-path: polygon(0 calc(100% - var(--glitch-intensity)), 100% var(--glitch-intensity), 100% 100%, 0 100%); }
    40% { clip-path: polygon(0 var(--glitch-intensity), 100% calc(100% - var(--glitch-intensity)), 100% 100%, 0 0); }
    60% { clip-path: polygon(0 0, 100% var(--glitch-intensity), 100% calc(100% - var(--glitch-intensity)), 0 100%); }
    80% { clip-path: polygon(0 var(--glitch-intensity), 100% 100%, 100% var(--glitch-intensity), 0 0); }
    100% { clip-path: polygon(0 0, 0 0, 0 0, 0 0); }
  }
`;
document.head.appendChild(glitchStyle);

// ========================================
// EXPORT FUNCTIONS FOR EXTERNAL USE
// ========================================

window.animations = {
  animateCounter,
  typeText,
  animateGradientText,
  applyGlitchEffect,
  initRippleEffect,
  initBlurEffect,
  initParallaxEffect
};
