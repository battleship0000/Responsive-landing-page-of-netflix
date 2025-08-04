// Interactive Navigation Menu Effects
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Login Form Functions
function showLoginForm() {
    document.getElementById('loginModal').style.display = 'block';
    document.getElementById('signupModal').style.display = 'none';
}

function closeLoginForm() {
    document.getElementById('loginModal').style.display = 'none';
}

function showSignupForm() {
    document.getElementById('signupModal').style.display = 'block';
    document.getElementById('loginModal').style.display = 'none';
}

function closeSignupForm() {
    document.getElementById('signupModal').style.display = 'none';
}

// Login Form Validation and Authentication
document.addEventListener('DOMContentLoaded', () => {
    // Login form handling
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Clear previous errors
            document.getElementById('emailError').textContent = '';
            document.getElementById('passwordError').textContent = '';
            
            let isValid = true;
            
            // Email validation
            if (!email) {
                document.getElementById('emailError').textContent = 'Please enter your email.';
                isValid = false;
            } else if (!isValidEmail(email)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email address.';
                isValid = false;
            }
            
            // Password validation
            if (!password) {
                document.getElementById('passwordError').textContent = 'Your password must contain between 4 and 60 characters.';
                isValid = false;
            } else if (password.length < 4) {
                document.getElementById('passwordError').textContent = 'Your password must contain between 4 and 60 characters.';
                isValid = false;
            }
            
            if (isValid) {
                // Simulate login success
                alert('Login successful! Redirecting to movies...');
                localStorage.setItem('userLoggedIn', 'true');
                localStorage.setItem('userEmail', email);
                window.location.href = 'movies.html';
            }
        });
    }
    
    // Signup form handling
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            
            if (fullName && isValidEmail(email) && password.length >= 4) {
                alert('Account created successfully! You can now sign in.');
                localStorage.setItem('userRegistered', 'true');
                showLoginForm();
            } else {
                alert('Please fill all fields correctly.');
            }
        });
    }
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// Quick signup from hero section
function quickSignup() {
    const email = document.getElementById('heroEmail').value;
    if (email && isValidEmail(email)) {
        document.getElementById('signupEmail').value = email;
        showSignupForm();
    } else {
        alert('Please enter a valid email address.');
    }
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Modal close on outside click
window.addEventListener('click', (e) => {
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const movieModal = document.getElementById('movieModal');
    const videoModal = document.getElementById('videoModal');
    
    if (e.target === loginModal) {
        closeLoginForm();
    }
    if (e.target === signupModal) {
        closeSignupForm();
    }
    if (e.target === movieModal) {
        closeMovieModal();
    }
    if (e.target === videoModal) {
        closeVideoModal();
    }
});

// Logout function
function logout() {
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('userEmail');
    window.location.href = 'index.html';
}

// Check authentication for movies page
function checkAuth() {
    if (window.location.pathname.includes('movies.html')) {
        if (!localStorage.getItem('userLoggedIn')) {
            window.location.href = 'index.html';
        }
    }
}

// Movie modal functions (for movies.html)
function closeMovieModal() {
    if (document.getElementById('movieModal')) {
        document.getElementById('movieModal').style.display = 'none';
    }
}

function closeVideoModal() {
    if (document.getElementById('videoModal')) {
        document.getElementById('videoModal').style.display = 'none';
        const video = document.getElementById('movieVideo');
        video.pause();
        video.src = '';
    }
}

// Initialize authentication check
checkAuth();

