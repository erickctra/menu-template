// menu button
const menu = document.getElementById("menu");
// menu popup
const menuContent = document.getElementById("menu-content");
// options submenus
const submenus = document.getElementsByClassName("has-items");
const anchors = document.getElementsByClassName("menuAnchor");



// state of menu / open or closed
let menuFocused = false;

// close menu if click outside of the popup
function hideMenus(event) {
	if (!menuContent.contains(event.target) && !menu.contains(event.target)) {
		menuFocused = false;
		return document
			.getElementById("menu-content")
			.classList.remove("popup-animation");
	}

	if (menu.contains(event.target) && !menuFocused) {
		menuFocused = false;

		return document
			.getElementById("menu-content")
			.classList.remove("popup-animation");
	}
	for (const elem of submenus) {
		if (!elem.contains(event.target)) {
			elem.classList.remove("active");
			elem.children[1].classList.remove("showSubMenu");
		}
	}
}

for (const anchor of anchors) {
  anchor.addEventListener("click", (event) => {
    menuFocused = false;
    return document
    .getElementById("menu-content")
    .classList.remove("popup-animation");
  })
}


menu.addEventListener("click", () => {
	if (menuFocused) {
		menuFocused = false;
		return document
			.getElementById("menu-content")
			.classList.remove("popup-animation");
	}
	if (!menuFocused) {
		menuFocused = true;
		return document
			.getElementById("menu-content")
			.classList.add("popup-animation");
	}
});

for (const elem of submenus) {
	elem.addEventListener("click", () => {
		elem.classList.add("active");
		elem.children[1].classList.add("showSubMenu");
	});
}
