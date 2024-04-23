const items = document.querySelectorAll(".nav-bar .item");

items.forEach((item) => {
	item.addEventListener("mouseover", () => {
		item.classList.add("hover");
	});
});

items.forEach((item) => {
	item.addEventListener("mouseout", () => {
		item.classList.remove("hover");
	});
});