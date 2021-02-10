

let container = document.getElementById("grid-container");

let styleSheet = document.styleSheets[1];

createGrid();

function createGrid(number=16) {

	createGridCSS(number);	

	if (number > 100) {
		console.log("error");
		return "The limit is 100"
		
	};

	let squares = number** 2

	createSquares(squares);
	
}

function createSquares(squares) {
	for (let i = 0; i < squares; i++) {
	
		let square = document.createElement('div');
		square.classList.add('square');
	
		square.addEventListener('mouseover', () => {
			square.classList.add('hovered');
		})
	
		container.appendChild(square);
		
	}
};

function createGridCSS(number) {

	let size = 480 / number;

	let squareRule = `.square {
		width: ${size}px;
		height: ${size}px;
		background-color: rgb(226, 226, 226) ;
	}`

	styleSheet.insertRule(squareRule, 0);

	let gridRule = `#grid-container { width: 480px; height: 480px; display: grid; 
		align-content: center; grid-template-columns: repeat(${number}, ${size}px); 
		grid-template-rows: repeat(${number}, ${size}px); }`
	
	styleSheet.insertRule(gridRule, 0);

	/* 
	styleSheet.insertRule(cssText, index) 
	& 
	styleSheet.deleteRule (index);
		*/

};

function deleteGridCSS() {
	
	let ruleNames = ["#grid-container", ".square"];

	for (let i = 0; i < styleSheet.cssRules.length; i++) {
		if (ruleNames.includes(styleSheet.cssRules[i].selectorText)) {
			styleSheet.deleteRule(i);
			i--;
		}
	}
}


let btn = document.getElementById("reset-btn");

function deleteGrid() {
	container.innerHTML = "";
};

btn.addEventListener('click', () => {
	deleteGrid();
	deleteGridCSS();

	let quantity = parseInt(prompt("How many squares per side would you like?"));

	while (isNaN(quantity) || typeof quantity !== "number" || quantity > 100) {
		quantity = parseInt(prompt("Please introduce a number. The limit is 100"))
	}

	createGrid(quantity);
})