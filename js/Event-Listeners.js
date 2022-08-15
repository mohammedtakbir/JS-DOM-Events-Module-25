const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

/* grandparent.addEventListener("click", e => {
    console.log(e.target);
})  */
/* grandparent.addEventListener("click", e => {
    console.log('grandparent 1');
})  */
/* grandparent.addEventListener("click", e => {
    console.log('grandparent 2');
})  */

// * bubble phase
/* grandparent.addEventListener("click", e => {
    console.log('grandparent 1');
}) 
parent.addEventListener("click", e => {
    console.log('parent 1');
}) 
child.addEventListener("click", e => {
    console.log('child 1');
}) 
document.addEventListener('click', e => {
    console.log('document 1')
}) */

// * capture Event
/* grandparent.addEventListener("click", e => {
    console.log('grandparent 1');
},
    { capture: true }
)
parent.addEventListener("click", e => {
    console.log('parent 1');
})
child.addEventListener("click", e => {
    console.log('child 1');
})
document.addEventListener('click', e => {
    console.log('document 1')
}) */

// * capture event and bubble event
/* grandparent.addEventListener("click", e => {
    console.log('grandparent capture');
},
    { capture: true }
)
grandparent.addEventListener("click", e => {
    console.log('grandparent bubble');
})


parent.addEventListener("click", e => {
    console.log('parent capture');
},
    { capture: true }
)
parent.addEventListener("click", e => {
    console.log('parent bubble');
})


child.addEventListener("click", e => {
    console.log('child capture');
},
    { capture: true }
)
child.addEventListener("click", e => {
    console.log('child bubble');
})


document.addEventListener('click', e => {
    console.log('document capture')
},
    { capture: true })
document.addEventListener('click', e => {
    console.log('document bubble')
}) */

// * stopPropagation()

/* grandparent.addEventListener("click", e => {
    console.log('grandparent capture');
},
    { capture: true }
)
grandparent.addEventListener("click", e => {
    console.log('grandparent bubble');
})


parent.addEventListener("click", e => {
    console.log('parent capture');
    e.stopPropagation();
},
    { capture: true }
)
parent.addEventListener("click", e => {
    // e.stopPropagation();
    console.log('parent bubble');
})


child.addEventListener("click", e => {
    console.log('child capture');
},
    { capture: true }
)
child.addEventListener("click", e => {
    console.log('child bubble');
})


document.addEventListener('click', e => {
    console.log('document capture')
},
    { capture: true })
document.addEventListener('click', e => {
    console.log('document bubble')
}) */

// * once property--->this event will run one time and then remove itself immedietly
/* grandparent.addEventListener("click", e => {
    console.log('grandparent bubble');
},
{once: true})

parent.addEventListener("click", e => {
    console.log('parent bubble');
})

child.addEventListener("click", e => {
    console.log('child bubble');
}) */

// * removeaddEventListener()




// * delegate
/* document.addEventListener('click', e =>{
    if(e.target.matches('div')){ // ! matches() function---->it just take css selector and if the target matches it returns true
        console.log('hi')
    }
}) */

addGlobalEventListener('click', 'div', e => {
    console.log('hi')
})

// ? create a function for this 
function addGlobalEventListener(type, selector, callback){
    document.addEventListener(type, e =>{
        if(e.target.matches(selector)) callback(e);
    })
}
/* const divs = document.querySelectorAll('div');
for(const div of divs){
    div.addEventListener('click', () =>{
        console.log('hi');
    })
} */
const newDiv = document.createElement('div');
newDiv.style.width = '200px';
newDiv.style.height = '200px';
newDiv.style.backgroundColor = 'pink';

document.body.appendChild(newDiv);