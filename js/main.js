/**
 * Main JavaScript for Ghibli Style Image Generator
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    initMobileMenu();
    
    // FAQ Toggles
    initFaqToggles();
    
    // Smooth Scrolling for Anchor Links
    initSmoothScrolling();
    
    // Animation on Scroll
    initScrollAnimations();
    
    // Language Selector
    initLanguageSelector();
    
    // Initialize any interactive demos
    initInteractiveDemos();
});

/**
 * Initialize Mobile Menu Functionality
 */
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            // Add animation classes
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('animate-fadeIn');
            }
        });
    }
}

/**
 * Initialize FAQ Toggle Functionality
 */
function initFaqToggles() {
    const faqToggles = document.querySelectorAll('.faq-toggle');
    const faqContents = document.querySelectorAll('.faq-content');
    const faqIcons = document.querySelectorAll('.faq-toggle i');
    
    faqToggles.forEach((toggle, index) => {
        toggle.addEventListener('click', () => {
            faqContents[index].classList.toggle('hidden');
            faqIcons[index].classList.toggle('rotate-180');
            
            // Add animation when showing content
            if (!faqContents[index].classList.contains('hidden')) {
                faqContents[index].classList.add('animate-fadeIn');
            }
        });
    });
}

/**
 * Initialize Smooth Scrolling for Anchor Links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
}

/**
 * Initialize Animation on Scroll
 */
function initScrollAnimations() {
    // Elements to animate
    const animatedElements = document.querySelectorAll('.fade-in, .animate-fadeIn, .bg-ghibli-cream.rounded-xl');
    
    // Function to check if element is in viewport and animate
    const animateOnScroll = () => {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };
    
    // Run on scroll and initial load
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    // Also trigger once after a short delay to catch any elements
    // that might be visible on initial load
    setTimeout(animateOnScroll, 300);
}

/**
 * Initialize Language Selector - Removed as per requirements
 */
function initLanguageSelector() {
    // Language selector functionality has been removed
    return;
}

/**
 * Initialize Interactive Demos
 */
function initInteractiveDemos() {
    // This would contain code to initialize any interactive demos
    // For example, handling the iframe interactions or demo form submissions
    
    // Example: Add a loading state to the Generate button
    const generateButtons = document.querySelectorAll('.generate-button');
    
    generateButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add loading state
            this.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Generating...';
            this.disabled = true;
            
            // Simulate processing (would be replaced with actual API call)
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-magic mr-2"></i> Generate Now';
                this.disabled = false;
                
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'fixed bottom-4 right-4 bg-ghibli-green text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fadeIn';
                successMessage.innerHTML = '<i class="fas fa-check mr-2"></i> Image generated successfully!';
                document.body.appendChild(successMessage);
                
                // Remove after 3 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
                
            }, 2000);
        });
    });
}

/**
 * Utility function to add class to element when it enters viewport
 * @param {HTMLElement} element - The element to observe
 * @param {string} className - The class to add when in viewport
 * @param {number} threshold - Visibility threshold (0-1)
 */
function addClassOnScroll(element, className, threshold = 0.2) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(className);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: threshold }
    );
    
    observer.observe(element);
}