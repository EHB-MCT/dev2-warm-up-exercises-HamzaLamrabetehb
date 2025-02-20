import { getRandomScores, getStudentJSON, runTitle } from "./lib.js";

runTitle();
warmup1();

function warmup1() {
	console.log("Exercise week 1");
	document.getElementById("button-1a").addEventListener("click", function () {
		const content1 = document.getElementById("content-1");
		content1.textContent = "Hallo, dit is de oefening van Hamza";
	});

	document.getElementById("button-1b").addEventListener("click", function () {
		const section1 = document.getElementById("section-1");
		section1.style.backgroundColor = "lightblue";
	});

	document.getElementById("button-1c").addEventListener("click", function () {
		const content1 = document.getElementById("content-1");
		const h1 = document.createElement("h1");
		h1.textContent = "Ik ben er klaar voor.";
		content1.appendChild(h1);
	});
}

function warmup2() {
	console.log("Exercise week 2");
	const scores = getRandomScores(10);

	document.querySelector("#button-2a").addEventListener("click", function () {
		console.log("ok");

		scores = scores.sort(function (a, b) {
			if (a > b) {
				return 1;
			} else {
				return -1;
			}
		});

		const sum = scores.reduce(function (total, current) {
			return total + current;
		});
		console.log();

		let html = `<ul>`;

		scores.forEach(function (score) {
			console.log(scores);
			console.log(score);
			html += `<li>$(score)</li>`;
		});
		html += `</ul>`;
	});
}

function warmup3() {
	let student = getStudentJSON();
}

function warmup4() {
	let main, min, max;
}

function warmup5() {}
