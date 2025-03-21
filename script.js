// ✅ Mobile Menu Toggle
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}

function closeMenu() {
  document.getElementById("mobileMenu").classList.remove("active");
}

// ✅ Booking Modal Functionality
const bookingModal = document.getElementById("bookingModal");
const bookButtons = document.querySelectorAll(".book-btn");
const closeButtons = document.querySelectorAll(".close-modal");

// Open Booking Modal
bookButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    bookingModal.style.display = "flex";
  });
});

// Close Booking Modal
closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    bookingModal.style.display = "none";
  });
});

// ✅ Close Modal When Clicking Outside
window.addEventListener("click", (e) => {
  if (e.target === bookingModal) {
    bookingModal.style.display = "none";
  }
});

// ✅ Form Submission with AJAX
const bookingForm = document.querySelector(".form-container");
const formResponse = document.getElementById("form-response");

bookingForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(bookingForm);

  try {
    const response = await fetch(bookingForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      formResponse.textContent = "Booking submitted successfully!";
      formResponse.style.color = "green";
      formResponse.style.display = "block";

      // ✅ Reset form and close modal
      bookingForm.reset();
      setTimeout(() => {
        formResponse.style.display = "none";
        bookingModal.style.display = "none";
      }, 3000); // Hide message and close modal after 3 seconds
    } else {
      formResponse.textContent = "Error submitting form. Please try again.";
      formResponse.style.color = "red";
      formResponse.style.display = "block";
    }
  } catch (error) {
    formResponse.textContent = "An error occurred. Please try again.";
    formResponse.style.color = "red";
    formResponse.style.display = "block";
  }
});
const response = await fetch(bookingForm.action, {
  method: "POST",
  body: formData,
  headers: {
    Accept: "application/json", // Ensures Formspree accepts the request
  },
});
