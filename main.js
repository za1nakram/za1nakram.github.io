/* ========================================
   MAIN.JS - Global JavaScript Functionality
   Navigation, Scroll Behavior, Utilities
   ======================================== */

// ========================================
// NAVIGATION & HEADER
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initScrollBehavior();
  initSmoothScroll();
  setActiveNavLink();
});

/**
 * Initialize Navigation
 */
function initNavigation() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', toggleMobileMenu);
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }
}

/**
 * Toggle Mobile Menu
 */
function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  const menuToggle = document.querySelector('.menu-toggle');

  if (navLinks) {
    navLinks.classList.toggle('active');
    
    if (menuToggle) {
      menuToggle.classList.toggle('active');
    }
  }
}

/**
 * Close Mobile Menu
 */
function closeMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  const menuToggle = document.querySelector('.menu-toggle');

  if (navLinks) {
    navLinks.classList.remove('active');
  }
  if (menuToggle) {
    menuToggle.classList.remove('active');
  }
}

/**
 * Initialize Scroll Behavior
 */
function initScrollBehavior() {
  const header = document.querySelector('header');
  
  if (!header) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/**
 * Initialize Smooth Scroll
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if href is just "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - 80; // Account for fixed header
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Set Active Navigation Link
 */
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ========================================
// INTERSECTION OBSERVER - Lazy Animations
// ========================================

/**
 * Observe elements and trigger animations on scroll
 */
function initIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections and cards
  document.querySelectorAll('.section, .card, .skill-card, .project-card').forEach(element => {
    observer.observe(element);
  });
}

// Initialize intersection observer on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initIntersectionObserver);
} else {
  initIntersectionObserver();
}

// ========================================
// UTILITIES
// ========================================

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {Number} wait - Wait time in milliseconds
 */
function debounce(func, wait) {
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

/**
 * Throttle function
 * @param {Function} func - Function to throttle
 * @param {Number} limit - Limit time in milliseconds
 */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Add animation class to element
 * @param {Element} element - Element to animate
 * @param {String} animationClass - CSS animation class name
 * @param {Number} duration - Animation duration in milliseconds
 */
function animateElement(element, animationClass, duration = 600) {
  element.classList.add(animationClass);
  
  setTimeout(() => {
    element.classList.remove(animationClass);
  }, duration);
}

// ========================================
// FORM UTILITIES
// ========================================

/**
 * Validate email address
 * @param {String} email - Email to validate
 * @returns {Boolean} - Whether email is valid
 */
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Display form message
 * @param {Element} formElement - Form element
 * @param {String} message - Message text
 * @param {String} type - Type: 'success' or 'error'
 */
function showFormMessage(formElement, message, type = 'success') {
  const messageEl = formElement.querySelector('.form-message');
  
  if (messageEl) {
    messageEl.textContent = message;
    messageEl.classList.remove('success', 'error');
    messageEl.classList.add(type);
    messageEl.style.display = 'block';
  }
}

/**
 * Clear form message
 * @param {Element} formElement - Form element
 */
function clearFormMessage(formElement) {
  const messageEl = formElement.querySelector('.form-message');
  
  if (messageEl) {
    messageEl.style.display = 'none';
    messageEl.classList.remove('success', 'error');
  }
}

// ========================================
// SCROLL TO TOP BUTTON
// ========================================

/**
 * Create and initialize scroll-to-top button
 */
function initScrollToTopButton() {
  // Check if button already exists
  if (document.querySelector('.scroll-to-top')) return;

  // Create button
  const button = document.createElement('button');
  button.className = 'scroll-to-top';
  button.innerHTML = '↑';
  button.setAttribute('aria-label', 'Scroll to top');
  
  // Add to page
  document.body.appendChild(button);

  // Show/hide based on scroll position
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      button.classList.add('visible');
    } else {
      button.classList.remove('visible');
    }
  });

  // Scroll to top on click
  button.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Initialize scroll-to-top button
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollToTopButton);
} else {
  initScrollToTopButton();
}

// ========================================
// COPY TO CLIPBOARD
// ========================================

/**
 * Copy text to clipboard
 * @param {String} text - Text to copy
 * @param {Element} element - Element to show feedback on
 */
function copyToClipboard(text, element = null) {
  navigator.clipboard.writeText(text).then(() => {
    if (element) {
      const originalText = element.textContent;
      element.textContent = 'Copied!';
      
      setTimeout(() => {
        element.textContent = originalText;
      }, 2000);
    }
  }).catch(err => {
    console.error('Failed to copy:', err);
  });
}

// ========================================
// ADD STYLES FOR SCROLL TO TOP BUTTON
// ========================================

const style = document.createElement('style');
style.textContent = `
  .scroll-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    border: none;
    border-radius: var(--radius-lg);
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-lg);
    transition: all var(--transition-fast);
    z-index: 998;
  }

  .scroll-to-top.visible {
    display: flex;
    animation: slideInUp 0.3s ease-out;
  }

  .scroll-to-top:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
  }

  .scroll-to-top:active {
    transform: translateY(0);
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 480px) {
    .scroll-to-top {
      bottom: 1.5rem;
      right: 1.5rem;
      width: 45px;
      height: 45px;
      font-size: 1.25rem;
    }
  }
`;
document.head.appendChild(style);

// ========================================
// KEYBOARD NAVIGATION
// ========================================

/**
 * Handle keyboard navigation
 */
document.addEventListener('keydown', function(event) {
  // Skip to main content (Ctrl+Shift+M or Cmd+Shift+M)
  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'M') {
    event.preventDefault();
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Scroll to top (Ctrl+Home or Cmd+Home)
  if ((event.ctrlKey || event.metaKey) && event.key === 'Home') {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

// ========================================
// EXPORT FUNCTIONS FOR EXTERNAL USE
// ========================================

window.utils = {
  debounce,
  throttle,
  animateElement,
  validateEmail,
  showFormMessage,
  clearFormMessage,
  copyToClipboard,
  toggleMobileMenu,
  closeMobileMenu
};
