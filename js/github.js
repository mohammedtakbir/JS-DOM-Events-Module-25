document.getElementById('delete-confirm').addEventListener('keyup', function(event){
    const deleteButton = document.getElementById('btn-delete');
    const text = event.target.value;
    if(text === 'delete'){
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled', true);
    }
})
/* document.getElementById('btn-delete').addEventListener('click', function(){
    const secretInfo = document.getElementById('secret-info');

}) */