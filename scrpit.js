const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
	menu.classList.toggle("active");
});

// SHOP
document.querySelector(".feedback-form").addEventListener("submit", (event) => {
	event.preventDefault(); // Зупиняє відправлення форми для демонстрації
	alert("Your message has been sent!");
});
