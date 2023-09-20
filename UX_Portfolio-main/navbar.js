const hamburgerMenu = document.getElementById('hamburgerMenu');
const dropdownMenu = document.getElementById('dropdownMenu');

hamburgerMenu.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Event listener to close the dropdown menu when clicking outside of it
document.addEventListener('click', (event) => {
    const target = event.target;
    if (target !== dropdownMenu && target !== hamburgerMenu) {
      dropdownMenu.style.display = 'none';
    }
  });