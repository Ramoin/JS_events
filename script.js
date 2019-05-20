
// Fonctionnalité 1 et 1bis *****************************

let footer = document.querySelector("footer");
let clickCount = 1

function clickOnFooter() {
        console.log(`Tu as cliqué ${clickCount} fois !`);
        clickCount += 1;       
};

footer.addEventListener("click", clickOnFooter);

// Fonctionnalité 2 *****************************

let burger = document.querySelector("button");
let scroll = document.getElementById("navbarHeader");

function clickOnBurger() {
        scroll.classList.toggle("collapse")
	};
burger.addEventListener("click", clickOnBurger);

// Fonctionnalité 3 *****************************

let card = document.getElementsByClassName("card mb-4")[0];
let edit = document.querySelectorAll("button")[2];

function goRed(){
	this.style.color = "red";
};
card.addEventListener("click", goRed);

// Fonctionnalité 4 *****************************

let card2 = document.getElementsByClassName("card mb-4")[1];
let edit2 = document.querySelectorAll("button")[4];

function goGreen(){
	if (card2.style.color === "green"){
		card2.style.color = "";
	}
	else {card2.style.color = "green"}	
}

card2.addEventListener("click", goGreen);

// Fonctionnalité 5 *****************************

let navbar = document.getElementsByClassName("navbar")[0];

function hideCss(){
	if (document.styleSheets[0].disabled === false) {
        document.styleSheets[0].disabled = true;
    }
    else if (document.styleSheets[0].disabled = false) {
        var headID = document.getElementsByTagName("head")[0];
        var x = document.createElement("link");
        headID.appendChild(x)
        x.href ='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
    }
};
navbar.addEventListener("dblclick", hideCss);

// Fonctionnalité 6 *****************************

let cardButton = document.querySelectorAll(".btn-success");
let cardImage = document.getElementsByClassName('card-img-top');
let cardText = document.getElementsByClassName("card-text");
let cardStatus = false

for(let i = 0; i <= cardButton.length-1; i++){
    
    function reduce(){
        if (cardStatus === false) {
            cardImage[i].style.width = "20%";
            cardText[i].style.display = "none";
            cardStatus = true;
        }
        else {
            cardImage[i].style.width = "100%";
            cardText[i].style.display = "initial";
            cardStatus = false;
        }
    }
cardButton[i].addEventListener("mouseover", reduce);
}

// Fonctionnalité 7 *****************************

let buttonSecondary = document.getElementsByClassName("btn-secondary")[0];
let divCards = document.getElementsByClassName("row")[1];
let cards = document.getElementsByClassName("col-md-4");
let swipeRightCounter = 0

function swipeRight(){
    let card2move = cards[cards.length-1];
    divCards.insertBefore(card2move, cards[0])
    swipeRightCounter += 1
} 
buttonSecondary.addEventListener("click", swipeRight);










