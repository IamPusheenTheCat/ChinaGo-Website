// Navigation and Mobile Menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            // Initially hide all answers
            answer.style.display = 'none';
            
            question.addEventListener('click', function() {
                const isOpen = answer.style.display === 'block';
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        const otherIcon = otherItem.querySelector('.faq-question i');
                        if (otherAnswer) otherAnswer.style.display = 'none';
                        if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                    }
                });
                
                // Toggle current item
                answer.style.display = isOpen ? 'none' : 'block';
                const icon = question.querySelector('i');
                if (icon) {
                    icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
                }
            });
        }
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Validate required fields
            const requiredFields = ['name', 'email', 'subject', 'message'];
            let isValid = true;
            
            requiredFields.forEach(field => {
                const input = this.querySelector(`[name="${field}"]`);
                if (!formObject[field] || formObject[field].trim() === '') {
                    isValid = false;
                    input.style.borderColor = '#ff4757';
                } else {
                    input.style.borderColor = '#2ed573';
                }
            });

            // Check privacy checkbox
            const privacyCheckbox = this.querySelector('[name="privacy"]');
            if (!privacyCheckbox.checked) {
                isValid = false;
                privacyCheckbox.parentElement.style.color = '#ff4757';
            } else {
                privacyCheckbox.parentElement.style.color = '#333';
            }

            if (isValid) {
                // Show success message
                showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
                this.reset();
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    }

    // Download button functionality
    const downloadButtons = document.querySelectorAll('[id*="download"], .download-btn');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Check if running on iOS
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
            
            if (isIOS) {
                // Try to open App Store
                window.location.href = 'https://apps.apple.com/app/chinago/id123456789'; // 🔥 替换为你的实际 App Store 链接
            } else {
                // Show information modal for non-iOS users
                showDownloadModal();
            }
        });
    });

    // Search functionality for support page
    const helpSearch = document.getElementById('help-search');
    if (helpSearch) {
        helpSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const helpSections = document.querySelectorAll('.help-article, .trouble-item, .faq-item');
            
            helpSections.forEach(section => {
                const text = section.textContent.toLowerCase();
                const shouldShow = text.includes(searchTerm) || searchTerm === '';
                section.style.display = shouldShow ? 'block' : 'none';
            });
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
});

// Utility Functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#2ed573' : type === 'error' ? '#ff4757' : '#007AFF'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide notification after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

function showDownloadModal() {
    // Create modal backdrop
    const backdrop = document.createElement('div');
    backdrop.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    `;
    
    // Create modal content
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: white;
        border-radius: 16px;
        padding: 2rem;
        max-width: 400px;
        width: 100%;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    `;
    
    modal.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
            <i class="fab fa-apple" style="font-size: 3rem; color: #007AFF; margin-bottom: 1rem; display: block;"></i>
            <h3 style="margin-bottom: 1rem; color: #333;">ChinaGo is Available on iOS</h3>
            <p style="color: #666; margin-bottom: 1.5rem;">
                ChinaGo is currently available exclusively for iPhone and iPad. 
                Please visit the App Store on your iOS device to download.
            </p>
            <div style="display: flex; gap: 1rem; justify-content: center;">
                <button onclick="closeModal()" style="
                    padding: 0.75rem 1.5rem;
                    background: #007AFF;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 600;
                ">Got it</button>
            </div>
        </div>
    `;
    
    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);
    
    // Close modal function
    window.closeModal = function() {
        document.body.removeChild(backdrop);
        delete window.closeModal;
    };
    
    // Close on backdrop click
    backdrop.addEventListener('click', function(e) {
        if (e.target === backdrop) {
            window.closeModal();
        }
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe elements when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .guide-category, .tech-card, .value-card, .team-member');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// Copy to clipboard functionality (for contact info)
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copied to clipboard!', 'success');
    }).catch(() => {
        showNotification('Failed to copy to clipboard', 'error');
    });
}

// Add click handlers for email links
document.addEventListener('DOMContentLoaded', function() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Allow normal mailto functionality, but also show copy option
            const email = this.getAttribute('href').replace('mailto:', '');
            setTimeout(() => {
                if (confirm('Email address copied to clipboard. Click OK to also open your email client.')) {
                    copyToClipboard(email);
                }
            }, 100);
        });
    });
});

// Privacy policy table of contents smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    const tocLinks = document.querySelectorAll('.policy-toc a[href^="#"]');
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active link
                tocLinks.forEach(l => l.style.color = '#007AFF');
                this.style.color = '#0056CC';
                this.style.fontWeight = '600';
            }
        });
    });
});

// Form validation helpers
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ff4757';
        } else {
            input.style.borderColor = '#e1e5e9';
        }
        
        // Email specific validation
        if (input.type === 'email' && input.value && !validateEmail(input.value)) {
            isValid = false;
            input.style.borderColor = '#ff4757';
        }
    });
    
    return isValid;
} 