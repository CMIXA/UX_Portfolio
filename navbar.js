// // Function to toggle the mobile navigation menu
// function toggleMenu() {
//   const overlay = document.getElementById("overlay");
//   overlay.classList.toggle("active");
// }

// // Add event listener to toggle menu when hamburger menu is clicked
// const hamburgerMenu = document.getElementById("hamburgerMenu");
// hamburgerMenu.addEventListener("click", () => {
//   toggleMenu();
// });

// // Close the menu when a link is clicked
// const mobileNavlinks = document.querySelectorAll(".mobile-navlinks a");
// for (const link of mobileNavlinks) {
//   link.addEventListener("click", () => {
//     toggleMenu();
//   });
// }

// // Close the menu when the "x" cancel button is clicked
// const cancelButton = document.querySelector(".cancel");
// cancelButton.addEventListener("click", () => {
//   toggleMenu();
// });

// Function to toggle the mobile navigation menu
function toggleMenu() {
  const overlay = document.getElementById("overlay");
  overlay.classList.toggle("active");
}

// Add event listener to toggle menu when hamburger menu is clicked
const hamburgerMenu = document.getElementById("hamburgerMenu");
hamburgerMenu.addEventListener("click", toggleMenu);

// Close the menu when a link is clicked
const mobileNavlinks = document.querySelectorAll(".mobile-navlinks a");
for (const link of mobileNavlinks) {
  link.addEventListener("click", () => {
    toggleMenu();
  });
}

// // Function to toggle the mobile navigation menu
// function toggleMenu() {
//   const overlay = document.getElementById("overlay");
//   overlay.classList.toggle("active");
// }

// // Add event listener to toggle menu when hamburger menu is clicked
// const hamburgerMenu = document.getElementById("hamburgerMenu");
// hamburgerMenu.addEventListener("click", () => {
//   toggleMenu();
// });

// // Close the menu when a link is clicked
// const mobileNavlinks = document.querySelectorAll(".mobile-navlinks a");
// for (const link of mobileNavlinks) {
//   link.addEventListener("click", () => {
//     toggleMenu();
//   });
// }

// // Close the menu when the "x" cancel button is clicked
// const cancelButton = document.querySelector(".cancel");
// cancelButton.addEventListener("click", () => {
//   toggleMenu();
// });
