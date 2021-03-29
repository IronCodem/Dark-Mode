// Dark Mode
var theme = document.createElement("BUTTON");
theme.innerHTML = "Dark Mode";
document.body.appendChild(theme);
theme.onclick = function dark() {

	document.body.style.background = "#000";

};
