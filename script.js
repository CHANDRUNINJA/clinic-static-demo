// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Appointment Form Logic (WhatsApp)
const appointmentForm = document.getElementById('appointmentForm');

appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('ap-name').value;
    const phone = document.getElementById('ap-phone').value;
    const date = document.getElementById('ap-date').value;
    const time = document.getElementById('ap-time').value;
    const msg = document.getElementById('ap-msg').value;

    const phoneNumber = "8248930293"; // Replace with actual clinic WhatsApp number
    const text = `Hello VitalCare! I would like to book an appointment.
Name: ${name}
Phone: ${phone}
Date: ${date}
Preferred Time: ${time}
Notes: ${msg}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
});

// Enquiry Form Logic (Mailto)
const enquiryForm = document.getElementById('enquiryForm');

enquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('en-name').value;
    const email = document.getElementById('en-email').value;
    const msg = document.getElementById('en-msg').value;

    const clinicEmail = "saran.r1408@gmail.com";
    const subject = "Website Enquiry from " + name;
    const body = `Name: ${name}
Email: ${email}
Message: ${msg}`;

    window.location.href = `mailto:${clinicEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

// Simple Scroll Animation (Reveal on Scroll)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

// Initial state for scroll animation
document.querySelectorAll('.section').forEach(s => {
    s.style.opacity = "0";
    s.style.transform = "translateY(20px)";
    s.style.transition = "all 0.6s ease-out";
});