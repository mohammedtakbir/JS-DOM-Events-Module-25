// * option 2
function makeLightCoral(){
    document.body.style.backgroundColor = 'lightcoral'
}
// * option 3
const lightSkyButton = document.getElementById('makeLightSkyBlue');
lightSkyButton.onclick = makeLightSky;
function makeLightSky(){
    document.body.style.backgroundColor = 'lightskyblue';
}
// * option 3.1 another
const makeGrayButton = document.getElementById('make-gray');
makeGrayButton.onclick = function(){
    document.body.style.backgroundColor = 'gray'
}
// * option 4 addEventListener()
const makeSteelBlueButton = document.getElementById('make-steelBlue');
makeSteelBlueButton.addEventListener('click', makeSteelBlue);
function makeSteelBlue(){
    document.body.style.backgroundColor = 'lightsteelblue';
}
// * option 4.1 addEventListener()
const lightGreenButton = document.getElementById('make-lightgreen');
lightGreenButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'lightgreen';
})
// * option 4.2 final addEventListener()
// ! we will use this method
document.getElementById('make-lightsalmon').addEventListener('click', () =>{
    document.body.style.backgroundColor = 'lightsalmon';
})

// * more events
// ? 1. onclick
document.getElementById('btn-more').addEventListener('click', function(){
    console.log('event triggerd');
});

// ? 2. mouseEnter
document.getElementById('btn-more').addEventListener('mouseenter', function(){
    console.log('event triggerd');
});
// ? 3. mouseMove
document.getElementById('btn-more').addEventListener('mousemove', function(){
    console.log('event triggerd');
});
// ? 4. focus
document.getElementById('input-field').addEventListener('focus', () =>{
    console.log('focus triggerd')
})
// ? 5. blur
document.getElementById('input-field').addEventListener('blur', () =>{
    console.log('blur triggerd')
})
// ? 5. keydown
/* document.getElementById('input-field').addEventListener('keydown', (e) =>{
    console.log(e.target.value)
}) */
// ? 5. keypress
/* document.getElementById('input-field').addEventListener('keypress', (event) =>{
    console.log(event.target.value)
}) */
// ? 5. keyup
document.getElementById('input-field').addEventListener('keyup', (event) =>{
    console.log(event.target.value)
})

// * add comment
/* document.getElementById('comment-btn').addEventListener('click', function(){
    const comentBox = document.getElementById('comment-box');
    const newComment = comentBox.value;

    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = newComment;
    commentContainer.appendChild(p);
    comentBox.value = '';
}) */

// * delete confirmation github
document.getElementById('delete-confirm').addEventListener('keyup', function(event){
    const deleteButton = document.getElementById('delete-btn');
    const text = event.target.value;
    if(text === 'delete'){
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled', true)
    }

})