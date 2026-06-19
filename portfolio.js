/* ========================================
   PORTFOLIO.JS - Portfolio Page Interactions
   Project Filtering, Animations, Interactions
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  initPortfolioFilters();
  initProjectHovers();
  animateStatistics();
  initLazyImages();
});

// ========================================
// PORTFOLIO FILTERS
// ========================================

/**
 * Initialize portfolio filter functionality
 */
function initPortfolioFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length === 0) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Filter projects
      filterProjects(filter, projectCards);
    });
  });

  // Set first button as active
  if (filterButtons.length > 0) {
    filterButtons[0].classList.add('active');
  }
}

/**
 * Filter projects based on category
 * @param {String} filter - Filter category
 * @param {NodeList} projectCards - All project card elements
 */
function filterProjects(filter, projectCards) {
  projectCards.forEach(card => {
    const categories = card.getAttribute('data-category')?.split(' ') || [];
    
    if (filter === 'all' || categories.includes(filter)) {
      // Show card
      card.style.display = 'grid';
      setTimeout(() => {
        card.classList.add('fade-in-up');
      }, 50);
    } else {
      // Hide card
      card.classList.remove('fade-in-up');
      card.style.display = 'none';
    }
  });
}

// ========================================
// PROJECT CARD INTERACTIONS
// ========================================

/**
 * Initialize project card hover effects
 */
function initProjectHovers() {
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    const image = card.querySelector('.project-image');
    const info = card.querySelector('.project-info');

    if (image) {
      card.addEventListener('mouseenter', function() {
        if (image.querySelector('img')) {
          image.style.transform = 'scale(1.05)';
        }
      });

      card.addEventListener('mouseleave', function() {
        if (image.querySelector('img')) {
          image.style.transform = 'scale(1)';
        }
      });
    }

    // Add click animation
    card.addEventListener('click', function() {
      this.style.animation = 'none';
      setTimeout(() => {
        this.style.animation = '';
      }, 10);
    });
  });
}

// ========================================
// ANIMATED STATISTICS
// ========================================

/**
 * Animate statistics counter
 */
function animateStatistics() {
  const stats = document.querySelectorAll('.stat-item h3');
  let hasAnimated = false;

  if (stats.length === 0) return;

  const statsSection = document.querySelector('.stats');
  
  if (!statsSection) return;

  // Create intersection observer for stats
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animateCounters(stats);
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(statsSection);
}

/**
 * Animate individual counters
 * @param {NodeList} statsElements - Statistics elements to animate
 */
function animateCounters(statsElements) {
  statsElements.forEach(element => {
    const finalValue = parseInt(element.textContent, 10);
    const isPlus = element.textContent.includes('+');
    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    const startValue = 0;

    function updateCounter() {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const currentValue = Math.floor(startValue + (finalValue - startValue) * easeOutQuad(progress));

      element.textContent = currentValue + (isPlus ? '+' : '');

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    updateCounter();
  });
}

/**
 * Easing function for animations
 * @param {Number} t - Time value (0-1)
 * @returns {Number} - Eased value
 */
function easeOutQuad(t) {
  return 1 - (1 - t) * (1 - t);
}

// ========================================
// LAZY LOADING IMAGES
// ========================================

/**
 * Initialize lazy loading for images
 */
function initLazyImages() {
  const images = document.querySelectorAll('img[data-src]');

  if (images.length === 0) return;

  const imageObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const dataSrc = img.getAttribute('data-src');

        if (dataSrc) {
          img.src = dataSrc;
          img.removeAttribute('data-src');
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      }
    });
  }, {
    rootMargin: '50px'
  });

  images.forEach(img => imageObserver.observe(img));
}

// ========================================
// PROJECT MODAL (Optional)
// ========================================

/**
 * Initialize project modal functionality
 */
function initProjectModal() {
  const projectLinks = document.querySelectorAll('[data-modal-project]');

  projectLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const projectId = this.getAttribute('data-modal-project');
      openProjectModal(projectId);
    });
  });
}

/**
 * Open project modal
 * @param {String} projectId - Project identifier
 */
function openProjectModal(projectId) {
  // Create modal if it doesn't exist
  let modal = document.querySelector('[data-project-modal]');
  
  if (!modal) {
    modal = createProjectModal();
  }

  // Populate modal with project data
  const projectCard = document.querySelector(`[data-project-id="${projectId}"]`);
  
  if (projectCard) {
    const title = projectCard.querySelector('.project-title')?.textContent;
    const description = projectCard.querySelector('.project-desc')?.textContent;
    const techs = Array.from(projectCard.querySelectorAll('.tech-badge')).map(b => b.textContent);

    if (modal.querySelector('.modal-title')) {
      modal.querySelector('.modal-title').textContent = title;
    }
    if (modal.querySelector('.modal-desc')) {
      modal.querySelector('.modal-desc').textContent = description;
    }
  }

  // Show modal
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/**
 * Close project modal
 */
function closeProjectModal() {
  const modal = document.querySelector('[data-project-modal]');
  
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
  }
}

/**
 * Create project modal element
 * @returns {Element} - Created modal element
 */
function createProjectModal() {
  const modal = document.createElement('div');
  modal.setAttribute('data-project-modal', '');
  modal.innerHTML = `
    <div class="modal-overlay">
      <div class="modal-content">
        <button class="modal-close">&times;</button>
        <h2 class="modal-title"></h2>
        <p class="modal-desc"></p>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Close on overlay click
  modal.querySelector('.modal-overlay').addEventListener('click', function(e) {
    if (e.target === this) {
      closeProjectModal();
    }
  });

  // Close on button click
  modal.querySelector('.modal-close').addEventListener('click', closeProjectModal);

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeProjectModal();
    }
  });

  return modal;
}

// ========================================
// PORTFOLIO GRID ANIMATION
// ========================================

/**
 * Stagger animation for portfolio items
 */
function staggerPortfolioItems() {
  const items = document.querySelectorAll('.project-card');
  
  items.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
  });
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', staggerPortfolioItems);
} else {
  staggerPortfolioItems();
}

// ========================================
// EXPORT FUNCTIONS FOR EXTERNAL USE
// ========================================

window.portfolio = {
  filterProjects,
  openProjectModal,
  closeProjectModal,
  animateStatistics
};
