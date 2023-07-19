// let prevScrollPos = window.pageYOffset;

// function handleScroll() {
//   const currentScrollPos = window.pageYOffset;
//   const navbar = document.querySelector(".navbar");

//   if (prevScrollPos > currentScrollPos) {
//     // Scrolling up, show the navbar
//     navbar.style.transform = "translateY(0)";
//   } else {
//     // Scrolling down, hide the navbar
//     navbar.style.transform = "translateY(-100%)";
//   }

//   prevScrollPos = currentScrollPos;
// }

// window.addEventListener("scroll", handleScroll);


let prevScrollPos = window.pageYOffset;
let isLargeScreen = window.matchMedia("(min-width: 900px)").matches;

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

function handleWindowSizeChange(e) {
  isLargeScreen = e.matches;
  if (isLargeScreen) {
    // Add the event listener for larger screens
    window.addEventListener("scroll", handleScroll);
  } else {
    // Remove the event listener for smaller screens
    window.removeEventListener("scroll", handleScroll);
  }
}

// Initial check for window size and add event listener if needed
const initialMediaQuery = window.matchMedia("(min-width: 1000px)");
initialMediaQuery.addListener(handleWindowSizeChange);
handleWindowSizeChange(initialMediaQuery);