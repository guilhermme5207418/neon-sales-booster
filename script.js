
// WordPress/Elementor Compatible JavaScript
(function() {
    'use strict';

    // FAQ Functionality
    window.toggleFAQ = function(index) {
        const answer = document.getElementById('answer-' + index);
        const toggle = document.getElementById('toggle-' + index);
        
        if (!answer || !toggle) return;
        
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
            toggle.textContent = '−';
            
            // Close other FAQ items (accordion behavior)
            const allAnswers = document.querySelectorAll('.faq-answer');
            const allToggles = document.querySelectorAll('.faq-toggle');
            
            allAnswers.forEach((item, i) => {
                if (i !== index && item.style.display === 'block') {
                    item.style.display = 'none';
                    if (allToggles[i]) {
                        allToggles[i].textContent = '+';
                    }
                }
            });
        } else {
            answer.style.display = 'none';
            toggle.textContent = '+';
        }
    };

    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    e.preventDefault();
                    
                    // Calculate offset for WordPress admin bar
                    let offset = 0;
                    const adminBar = document.getElementById('wpadminbar');
                    if (adminBar) {
                        offset = adminBar.offsetHeight;
                    }
                    
                    const targetPosition = targetSection.offsetTop - offset - 80;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // CTA Button interactions
    function initCTAButtons() {
        const ctaButtons = document.querySelectorAll('.cta-button');
        
        ctaButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Add loading state
                this.style.opacity = '0.8';
                this.style.transform = 'scale(0.98)';
                
                // Reset after brief delay
                setTimeout(() => {
                    this.style.opacity = '1';
                    this.style.transform = 'scale(1)';
                }, 200);
                
                // Track conversion (for analytics)
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', {
                        'event_category': 'CTA',
                        'event_label': 'Purchase Button',
                        'value': 19.90
                    });
                }
            });
        });
    }

    // Intersection Observer for animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe animated elements
        const animatedElements = document.querySelectorAll(
            '.deliverable-card, .benefit-card, .testimonial-card, .stat-card, .bonus-card'
        );

        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Video interaction tracking
    function initVideoTracking() {
        const videoIframe = document.querySelector('.video-container iframe');
        
        if (videoIframe) {
            // Track video engagement
            videoIframe.addEventListener('load', function() {
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'video_load', {
                        'event_category': 'Video',
                        'event_label': 'VSL Load'
                    });
                }
            });
        }
    }

    // Form validation for WordPress contact forms
    function initFormValidation() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                const requiredFields = form.querySelectorAll('[required]');
                let isValid = true;
                
                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
                        isValid = false;
                        field.style.borderColor = '#f87171';
                        
                        // Reset border color after user starts typing
                        field.addEventListener('input', function() {
                            this.style.borderColor = '';
                        }, { once: true });
                    }
                });
                
                if (!isValid) {
                    e.preventDefault();
                    
                    // Show error message
                    let errorMsg = form.querySelector('.error-message');
                    if (!errorMsg) {
                        errorMsg = document.createElement('div');
                        errorMsg.className = 'error-message';
                        errorMsg.style.color = '#f87171';
                        errorMsg.style.textAlign = 'center';
                        errorMsg.style.marginTop = '1rem';
                        errorMsg.textContent = 'Por favor, preencha todos os campos obrigatórios.';
                        form.appendChild(errorMsg);
                    }
                    
                    // Remove error message after 5 seconds
                    setTimeout(() => {
                        if (errorMsg && errorMsg.parentNode) {
                            errorMsg.parentNode.removeChild(errorMsg);
                        }
                    }, 5000);
                }
            });
        });
    }

    // Mobile menu functionality (if needed for WordPress themes)
    function initMobileMenu() {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        if (menuToggle && mobileMenu) {
            menuToggle.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
                this.classList.toggle('active');
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                    mobileMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        }
    }

    // Lazy loading for images (WordPress optimization)
    function initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            images.forEach(img => {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
            });
        }
    }

    // Initialize all functionality when DOM is ready
    function init() {
        initSmoothScrolling();
        initCTAButtons();
        initScrollAnimations();
        initVideoTracking();
        initFormValidation();
        initMobileMenu();
        initLazyLoading();
        
        // WordPress-specific initialization
        if (typeof jQuery !== 'undefined') {
            jQuery(document).ready(function($) {
                // Additional jQuery-based functionality for WordPress
                $('.elementor-widget').each(function() {
                    // Elementor widget initialization if needed
                });
            });
        }
    }

    // Run initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // WordPress Customizer live preview support
    if (typeof wp !== 'undefined' && wp.customize) {
        wp.customize.bind('ready', function() {
            // Re-initialize when customizer changes
            wp.customize.preview.bind('active', function() {
                setTimeout(init, 100);
            });
        });
    }

    // Elementor frontend compatibility
    if (typeof elementorFrontend !== 'undefined') {
        elementorFrontend.hooks.addAction('frontend/element_ready/global', function($scope) {
            // Re-initialize for dynamically loaded Elementor content
            setTimeout(() => {
                initScrollAnimations();
                initCTAButtons();
            }, 100);
        });
    }

})();

// Global functions for WordPress theme compatibility
window.packDominacao = {
    version: '1.0.0',
    
    // Public API for theme developers
    reinitialize: function() {
        // Re-run initialization for dynamic content
        if (typeof init === 'function') {
            init();
        }
    },
    
    // Utility functions
    scrollToElement: function(elementId, offset = 80) {
        const element = document.getElementById(elementId);
        if (element) {
            const adminBarHeight = document.getElementById('wpadminbar')?.offsetHeight || 0;
            const targetPosition = element.offsetTop - adminBarHeight - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    },
    
    // Analytics helpers
    trackEvent: function(action, category = 'Pack Dominacao', label = '') {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }
    }
};
