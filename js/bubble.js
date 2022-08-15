/* document.getElementById('item-2').addEventListener('click', function(event){
    console.log('item-2 checked')
    event.stopPropagation();
}) */
document.getElementById('item-2').addEventListener('click', function(event){
    console.log('item-2 first-checked');
    event.stopImmediatePropagation();
})
document.getElementById('item-2').addEventListener('click', function(event){
    console.log('item-2 second-checked')
})
document.getElementById('item-2').addEventListener('click', function(event){
    console.log('item-2 third-checked')
})
document.getElementById('item-2').addEventListener('click', function(event){
    console.log('item-2 fourth-checked')
})
document.getElementById('list-ul').addEventListener('click', function(){
    console.log('ul-clicked')
})
document.getElementById('list-container').addEventListener('click', function(){
    console.log('section clicked')
})
document.getElementById('body').addEventListener('click', function(){
    console.log('body clicked')
})