// * option 1.directly set on the html elememt
// ? 1.<button onclick="document.body.style.backgroundColor='lightskyblue'">Make lightskyblue</button>
// ? 2.<button onclick="console.log(7)">Click me</button>

// * option 2.add onclick function on the html element
// ! important: we will use this
// ? <button onclick="makeRed()">Make Red</button>
function makeRed(){
    document.body.style.backgroundColor='red';
}

// * option.3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor='lightblue';
}

// * option.3.1 another
const makePurlpeButton = document.getElementById('make-purple');
makePurlpeButton.onclick = function makePurple(){
    document.body.style.backgroundColor= 'purple';
}

// * option.4
const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', makePink);
function makePink(){
    document.body.style.backgroundColor= 'pink';
}
// * option. 4.1 another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor= 'green';
})

// * option. 4.2 final
// ! important: we will use this
document.getElementById('make-orange').addEventListener('click', function(){
    document.body.style.backgroundColor= 'orange';
})
// ? Note: 4.2 ekhane function er name dite hobe na