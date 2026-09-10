document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("learn-more").addEventListener("click", function () {
        alert("You clicked Learn More!");
    });

    document.querySelectorAll(".feature-btn").forEach(button => {
        button.addEventListener("click", function () {
            alert("Feature: " + this.innerText);
        });
    });
});

let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-text');
const dots = document.querySelectorAll('.dot');

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

document.querySelector('.prev-slide').addEventListener('click', () => {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
});

document.querySelector('.next-slide').addEventListener('click', () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentTestimonial = index;
    showTestimonial(currentTestimonial);
  });
});

// Initialize
showTestimonial(currentTestimonial);