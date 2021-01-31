let i = 0;
const colors = ["red", "blue", "green"];
const textarea = document.createElement("textarea");
textarea.addEventListener("oninput", catchChange1);

function catchChange() {
	console.log("change");
	const ta = document.getElementById("ta");
	console.log("type" + typeof(ta.value));
	const inputChar = ta.value.substr(-1);
	console.log(inputChar);
	let spanEl = document.createElement("span");
	spanEl.textContent = inputChar;
	spanEl.setAttribute("style", `color: ${colors[i++%3]}`);
	const container = document.getElementById("container");
	container.appendChild(spanEl);
}
function catchChange1() {
	const ta = this;
	const inputChar = ta.value.substr(-1);
	console.log(inputChar);
	let spanEl = document.createElement("span");
	spanEl.textContent = inputChar;
	spanEl.setAttribute("style", `color: ${colors[i++%3]}`);
	const container = document.getElementById("container");
	container.appendChild(spanEl);
}
function triggerClick() {
	const ta = document.getElementById("ta");
	console.log("trigger");
	textarea.focus();
}
