document.addEventListener("DOMContentLoaded", function () {
  // Dark Mode Toggle
  const darkModeToggle = document.querySelector(".dark-mode-toggle");
  const darkModeStyle = document.getElementById("darkModeStyle");
  let darkMode = localStorage.getItem("darkMode") === "enabled";

  if (darkMode) {
    enableDarkMode();
  }

  darkModeToggle.addEventListener("click", () => {
    darkMode = !darkMode;
    if (darkMode) {
      enableDarkMode();
      localStorage.setItem("darkMode", "enabled");
    } else {
      disableDarkMode();
      localStorage.setItem("darkMode", "disabled");
    }
  });

  function enableDarkMode() {
    darkModeStyle.disabled = false;
    document.body.classList.add("dark-mode");
  }

  function disableDarkMode() {
    darkModeStyle.disabled = true;
    document.body.classList.remove("dark-mode");
  }

  // Mobile Navigation
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // Sticky Navigation
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);

    // Back to Top Button
    const backToTop = document.querySelector(".back-to-top");
    backToTop.classList.toggle("active", window.scrollY > 300);
  });

  // Back to Top Button
  document.querySelector(".back-to-top").addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Portfolio Filter
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      portfolioItems.forEach((item) => {
        if (
          filterValue === "all" ||
          item.getAttribute("data-category") === filterValue
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Typed.js Animation
  if (document.querySelector(".typed-text")) {
    const typed = new Typed(".typed-text", {
      strings: [
        "Web Developer",
        "Video Editor",
        "UI/UX Designer",
        "Digital Marketer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });
  }

  // ScrollReveal Animations
  ScrollReveal().reveal(".section-header", {
    delay: 200,
    origin: "top",
    distance: "30px",
    duration: 1000,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    reset: true,
  });

  ScrollReveal().reveal(".hero-content, .hero-image", {
    delay: 300,
    origin: "bottom",
    distance: "50px",
    duration: 1000,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    interval: 200,
    reset: true,
  });

  ScrollReveal().reveal(".about-image, .about-text", {
    delay: 300,
    origin: "bottom",
    distance: "50px",
    duration: 1000,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    interval: 200,
    reset: true,
  });

  ScrollReveal().reveal(".portfolio-item, .service-card", {
    delay: 200,
    origin: "bottom",
    distance: "30px",
    duration: 800,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    interval: 150,
    reset: true,
  });

  ScrollReveal().reveal(".contact-info, .contact-form", {
    delay: 300,
    origin: "bottom",
    distance: "50px",
    duration: 1000,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    interval: 200,
    reset: true,
  });

  // Current Year in Footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Form Submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Here you would typically send the form data to a server
      // For demonstration, we'll just log it and show an alert
      console.log({ name, email, subject, message });

      alert("Thank you for your message! I will get back to you soon.");
      contactForm.reset();
    });
  }

  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll(".skill-level");

  function animateSkillBars() {
    skillBars.forEach((bar) => {
      const width = bar.style.width;
      bar.style.width = "0";
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    });
  }

  // Intersection Observer for skill bars
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateSkillBars();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll(".skills").forEach((skills) => {
    observer.observe(skills);
  });
});
