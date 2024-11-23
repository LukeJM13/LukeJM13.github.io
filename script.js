const copyEmailAddress = (email) => {
  navigator.clipboard
    .writeText(email)
    .then(() => {
      alert("Email copied to clipboard!");
    })
    .catch((error) => {
      console.error("Failed to copy text: ", error);
    });
};

window.addEventListener("scroll", () => {
  const homeBtn = document.getElementById("home-btn");
  const work = document.getElementById("work");
  const projects = document.getElementById("projects");
  const contact = document.getElementById("contact");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 300) {
    work.classList.add("show");
  } else {
    work.classList.remove("show");
  }

  if (scrollPosition > 1000) {
    homeBtn.classList.add("show");
  } else {
    homeBtn.classList.remove("show");
  }

  if (scrollPosition > 1600) {
    projects.classList.add("show");
  } else {
    projects.classList.remove("show");
  }

  if (scrollPosition > 1800) {
    contact.classList.add("show");
  } else {
    contact.classList.remove("show");
  }
});

// Helper function to reveal a section and scroll to it
function revealAndScroll(sectionId) {
  const section = document.getElementById(sectionId);

  // Add the 'show' class to make the section visible
  section.classList.add("show");

  // Scroll to the section
  section.scrollIntoView({ behavior: "smooth" });
}

// Navigation button event listeners
document.getElementById("nav-work").addEventListener("click", () => {
  revealAndScroll("work");
});

document.getElementById("down").addEventListener("click", () => {
  revealAndScroll("work");
});

document.getElementById("nav-projects").addEventListener("click", () => {
  revealAndScroll("projects");
});

document.getElementById("nav-contact").addEventListener("click", () => {
  revealAndScroll("contact");
});

document.getElementById("home-btn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
