//* option 1
function onClickButton(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Text updated by onclick button';
}
//* option 2
document.getElementById('event-listener').addEventListener('click', function(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Text updated by addEventListener'
})
//* option 2 Recap
document.getElementById('updateButton').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    const DisplayinputText = document.getElementById('display-input-text');
    DisplayinputText.innerText = inputText;

    inputField.value = '';
})