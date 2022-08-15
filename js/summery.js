// * option 1
function makeGreen(){
    document.body.style.backgroundColor='green';
}
// * option 2
document.getElementById('make-yellow').addEventListener('click', function(){
    document.body.style.backgroundColor='yellow';
})

// * option 3
const makePinkButton = document.getElementById('make-pink');
makePinkButton.onclick = makePink;
function makePink(){
    document.body.style.backgroundColor='pink';
}

document.getElementById('user-email').addEventListener('keyup', function(event){
    console.log(event.target.value);
})