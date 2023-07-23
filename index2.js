let prevScrollPos = window.pageYOffset;

function handleScroll() {
  const currentScrollPos = window.pageYOffset;
  const navbar = document.querySelector(".navbar");

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up, show the navbar
    navbar.style.transform = "translateY(0)";
  } else {
    // Scrolling down, hide the navbar
    navbar.style.transform = "translateY(-100%)";
  }

  prevScrollPos = currentScrollPos;
}

window.addEventListener("scroll", handleScroll);
