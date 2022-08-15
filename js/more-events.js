// * more events
// * 1. onclick
/* document.getElementById('btn-more').addEventListener('click', function(){
    console.log('event trigger!!')
}) */
// * 2. mouseenter
/* document.getElementById('btn-more').addEventListener('mouseenter', function(){
    console.log('event trigger!!')
}) */
// * 3. mousemove
/* document.getElementById('btn-more').addEventListener('mousemove', function(){
    console.log('event trigger!!')
}) */
/* // * 4. focus
document.getElementById('text-field').addEventListener('focus', function(){
    console.log('event triggerd inside the input field');
}) */
/* // * 5. blur
document.getElementById('text-field').addEventListener('blur', function(){
    console.log('event triggerd outside the input field (blur)');
}) */
// * 5. keydown
/* document.getElementById('text-field').addEventListener('keydown', function(event){
    console.log(event.target.value);
}) */
// * 5. keypress
/* document.getElementById('text-field').addEventListener('keypress', function(event){
    console.log(event.target.value);
}) */
// * 5. keyup
// ! use keyup
document.getElementById('text-field').addEventListener('keyup', function(event){
    console.log(event.target.value);
})