//REFERENCES
let redButton = document.querySelector('.redbttn');
let blueButton = document.querySelector('.greenbttn');
let greenButton = document.querySelector('.bluebttn');

function button_click(color) {
    console.log('test')
    document.querySelector('body').style.backgroundColor = color;
}

// redButton.onclick = button_click;
// blueButton.onclick = button_click;
// greenButton.onclick = button_click;

redButton.addEventListener('click', function(event) { button_click('red') })
blueButton.addEventListener('click', function(event) { button_click('green') })
greenButton.addEventListener('click', function(event) { button_click('blue') })
