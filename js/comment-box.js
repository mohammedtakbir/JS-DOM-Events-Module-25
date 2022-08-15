//* step 1.add event listener to the post button
document.getElementById('post-btn').addEventListener('click', function(){
    //* step 2.get the comment inside the textarea
    const commentBox = document.getElementById('new-comment');
    const newComment = commentBox.value;
    //* step 3.set the comment inside the comment container
    //? 1.get the comment container
    //? 2.create a new element (p tag)
    //? 3.set the text of comment as innerText of the p tag
    //? 4.add the p tag to the comment container using appendChild()
    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = newComment;
    commentContainer.appendChild(p);
    //* step 4.clear the text area
    commentBox.value = '';
})