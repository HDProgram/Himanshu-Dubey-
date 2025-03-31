/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
    // Active link
    navLink.forEach(n => n.classList.remove('active-link'));
    this.classList.add('active-link');
    
    // Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL PROJECTS*/
sr.reveal('.projects__item',{interval: 200}); 

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 

/*===== FORM VALIDATION =====*/
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form fields
        const nameInput = this.querySelector('input[placeholder="Name"]');
        const emailInput = this.querySelector('input[placeholder="Email"]');
        const subjectInput = this.querySelector('input[placeholder="Subject"]');
        const messageInput = document.getElementById('message');
        
        // Reset errors
        document.querySelectorAll('.form__error').forEach(error => error.textContent = '');
        
        // Validate fields
        let isValid = true;
        
        if(!nameInput.value.trim()) {
            document.getElementById('nameError').textContent = 'Name is required';
            isValid = false;
        }
        
        if(!emailInput.value.trim()) {
            document.getElementById('emailError').textContent = 'Email is required';
            isValid = false;
        } else if(!isValidEmail(emailInput.value)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email';
            isValid = false;
        }
        
        if(!subjectInput.value.trim()) {
            document.getElementById('subjectError').textContent = 'Subject is required';
            isValid = false;
        }
        
        if(!messageInput.value.trim()) {
            document.getElementById('messageError').textContent = 'Message is required';
            isValid = false;
        }
        
        if(isValid) {
            // Form is valid, show success message
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
            
            // Here you would typically send the form data to a server
            // For now, we'll just simulate a successful submission
        }
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/*===== DARK/LIGHT MODE TOGGLE =====*/
const toggleModeBtn = document.getElementById('toggleMode');
const body = document.body;

// Check for saved mode preference or default to light
const currentMode = localStorage.getItem('mode') || 'light';
if(currentMode === 'dark') {
    body.classList.add('dark-mode');
    toggleModeBtn.querySelector('i').classList.replace('bx-moon', 'bx-sun');
}

// Toggle mode when button is clicked
if(toggleModeBtn) {
    toggleModeBtn.addEventListener('click', () => {
        // Toggle class on body
        body.classList.toggle('dark-mode');
        
        // Update icon
        const icon = toggleModeBtn.querySelector('i');
        if(body.classList.contains('dark-mode')) {
            icon.classList.replace('bx-moon', 'bx-sun');
            localStorage.setItem('mode', 'dark');
        } else {
            icon.classList.replace('bx-sun', 'bx-moon');
            localStorage.setItem('mode', 'light');
        }
    });
}
