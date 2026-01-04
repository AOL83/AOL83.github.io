const setActiveNav = () => {
  const path = window.location.pathname.replace(/\/+$/, "/") || "/";
  const navLinks = document.querySelectorAll(".site-nav a");

  navLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname.replace(/\/+$/, "/");
    if (linkPath === path) {
      link.setAttribute("aria-current", "page");
    }
  });
};

const setFooterYear = () => {
  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
};

const setupContactForm = () => {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  const status = form.querySelector(".form-status");
  const showError = (field, message) => {
    const error = form.querySelector(`[data-error-for="${field.id}"]`);
    if (error) error.textContent = message;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let hasErrors = false;

    form.querySelectorAll(".error").forEach((node) => {
      node.textContent = "";
    });

    form.querySelectorAll("input[required], textarea[required]").forEach((field) => {
      if (!field.value.trim()) {
        showError(field, "This field is required.");
        hasErrors = true;
        return;
      }

      if (field.type === "email" && !field.checkValidity()) {
        showError(field, "Please enter a valid email address.");
        hasErrors = true;
      }

      if (field.minLength > 0 && field.value.trim().length < field.minLength) {
        showError(field, `Please enter at least ${field.minLength} characters.`);
        hasErrors = true;
      }
    });

    if (hasErrors) {
      status.textContent = "Please review the highlighted fields.";
      return;
    }

    status.textContent = "Thanks! Your message is ready to send. I'll reply soon.";
    form.reset();
  });
};

setActiveNav();
setFooterYear();
setupContactForm();
