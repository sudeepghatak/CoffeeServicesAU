// Function to toggle the menu
function toggleMenu(event) {
	if (event) event.stopPropagation(); // Prevent event propagation

	const menucontainer = document.querySelector('#nav-menu-container');
	const menu = document.querySelector('.nav-menu');
	const hamburger = document.querySelector('.hamburger i'); // Target the icon inside the hamburger

	if (window.innerWidth <= 768) { // Check for mobile view
		if (menu.style.display === 'flex') {
			menu.style.display = 'none'; // Hide the menu
			menucontainer.style.height = '0px'; // Reset the height of the menu container
			hamburger.style.color = 'white'; // Restore the hamburger color to white
		} else {
			menu.style.display = 'flex'; // Show the menu
			menucontainer.style.height = '500px'; // Set height for the menu container
			hamburger.style.color = 'black'; // Change the hamburger color to black
		}
	}
}

// Function to close the menu if clicked outside
function clickOutsideMenu(event) {
	const menucontainer = document.querySelector('#nav-menu-container');
	const menu = document.querySelector('.nav-menu');
	const hamburger = document.querySelector('.hamburger i'); // Target the icon inside the hamburger

	if (window.innerWidth <= 768) { // Check for mobile view
		if (!menu.contains(event.target) && !document.querySelector('.hamburger').contains(event.target)) {
			menu.style.display = 'none'; // Hide the menu
			menucontainer.style.height = '0px';
			hamburger.style.color = 'white'; // Restore the hamburger color to white
		}
	}
}

// Function to enable hover functionality for dropdown menus
function enableDropdownHover() {
	const dropdowns = document.querySelectorAll('.dropdown, .dropdown-submenu');

	dropdowns.forEach(function (dropdown) {
		dropdown.addEventListener('mouseenter', function () {
			const submenu = this.querySelector('.dropdown-menu');
			if (submenu) submenu.style.display = 'block';
		});

		dropdown.addEventListener('mouseleave', function () {
			const submenu = this.querySelector('.dropdown-menu');
			if (submenu) submenu.style.display = 'none';
		});
	});
}

// Function to initialize event listeners and handle initial setup
function init() {
	const menucontainer = document.querySelector('#nav-menu-container');
	const menu = document.querySelector('.nav-menu');
	const hamburger = document.querySelector('.hamburger i'); // Target the icon inside the hamburger

	// Ensure the menu is always visible on larger screens (web)
	if (window.innerWidth > 768) {
		menu.style.display = 'flex'; // Keep menu visible on web
	} else {
		menu.style.display = 'none'; // Hide the menu by default on mobile
		hamburger.style.color = 'white';
		menucontainer.style.height = '0px';
	}

	// Attach event listeners
	document.querySelector('.hamburger').addEventListener('click', toggleMenu);
	document.addEventListener('click', clickOutsideMenu);

	// Handle window resize to update menu visibility
	window.addEventListener('resize', function () {
		if (window.innerWidth > 768) {
			menu.style.display = 'flex'; // Always display on larger screens
			menucontainer.style.height = 'auto';
		} else {
			menu.style.display = 'none'; // Hide on mobile
			menucontainer.style.height = '0px';
		}
	});

	// Enable hover functionality for dropdown menus
	enableDropdownHover();
}

// Initialize the script on DOMContentLoaded
document.addEventListener('DOMContentLoaded', init);

document.addEventListener('DOMContentLoaded', function () {
	const dropdowns = document.querySelectorAll('.dropdown, .dropdown-submenu');

	dropdowns.forEach(function (dropdown) {
		dropdown.addEventListener('mouseenter', function () {
			const submenu = this.querySelector('.dropdown-menu');
			if (submenu) submenu.style.display = 'block';
		});

		dropdown.addEventListener('mouseleave', function () {
			const submenu = this.querySelector('.dropdown-menu');
			if (submenu) submenu.style.display = 'none';
		});
	});
});
