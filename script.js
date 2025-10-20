// Mini Hospital Appointment System - Shared JavaScript Functions
// This file contains utility functions that can be used across all pages

/**
 * Utility function to format date for display
 * @param {Date} date - The date to format
 * @returns {string} - Formatted date string
 */
function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Utility function to format time for display
 * @param {string} time - Time in 24-hour format (e.g., "14:00")
 * @returns {string} - Formatted time string (e.g., "2:00 PM")
 */
function formatTime(time) {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
}

/**
 * Utility function to validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Utility function to validate phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid phone format
 */
function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

/**
 * Utility function to show notification messages
 * @param {string} message - Message to display
 * @param {string} type - Type of notification ('success', 'error', 'info')
 */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#27ae60';
            break;
        case 'error':
            notification.style.backgroundColor = '#e74c3c';
            break;
        case 'info':
        default:
            notification.style.backgroundColor = '#3498db';
            break;
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

/**
 * Utility function to generate unique ID
 * @returns {string} - Unique ID string
 */
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * Utility function to save data to localStorage with error handling
 * @param {string} key - localStorage key
 * @param {any} data - Data to save
 * @returns {boolean} - True if successful
 */
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error('Error saving to localStorage:', error);
        showNotification('Error saving data. Please try again.', 'error');
        return false;
    }
}

/**
 * Utility function to load data from localStorage with error handling
 * @param {string} key - localStorage key
 * @param {any} defaultValue - Default value if key doesn't exist
 * @returns {any} - Loaded data or default value
 */
function loadFromLocalStorage(key, defaultValue = null) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (error) {
        console.error('Error loading from localStorage:', error);
        showNotification('Error loading data. Please refresh the page.', 'error');
        return defaultValue;
    }
}

/**
 * Utility function to clear specific data from localStorage
 * @param {string} key - localStorage key to clear
 * @returns {boolean} - True if successful
 */
function clearFromLocalStorage(key) {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (error) {
        console.error('Error clearing localStorage:', error);
        showNotification('Error clearing data. Please try again.', 'error');
        return false;
    }
}

/**
 * Utility function to check if user is logged in
 * @returns {boolean} - True if user is logged in
 */
function isLoggedIn() {
    // Simple check - in a real app, this would be more sophisticated
    return localStorage.getItem('isLoggedIn') === 'true';
}

/**
 * Utility function to log out user
 */
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}

/**
 * Utility function to validate required form fields
 * @param {HTMLFormElement} form - Form element to validate
 * @param {Array} requiredFields - Array of field names that are required
 * @returns {boolean} - True if all required fields are filled
 */
function validateForm(form, requiredFields) {
    let isValid = true;
    const errors = [];
    
    requiredFields.forEach(fieldName => {
        const field = form.querySelector(`[name="${fieldName}"]`);
        if (!field || !field.value.trim()) {
            isValid = false;
            errors.push(`${fieldName} is required`);
        }
    });
    
    if (!isValid) {
        showNotification(errors.join(', '), 'error');
    }
    
    return isValid;
}

/**
 * Utility function to debounce function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
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

// Add CSS for notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mini Hospital Appointment System loaded successfully');
    
    // Add logout functionality to all logout links
    const logoutLinks = document.querySelectorAll('.logout');
    logoutLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Are you sure you want to logout?')) {
                logout();
            }
        });
    });
    
    // Add smooth scrolling to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
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
});
