'use strict';

let elementButton = document.getElementById("elementButton");
elementButton.addEventListener('click', function(e){
    let element = document.getElementsByClassName('foo');
    console.log(element);
    for (let i=0; i < element.length; i++){
        console.log(element[i]);
    }

}, false)


let triggerButton = document.getElementById("triggerButton");
triggerButton.addEventListener('click', function(e){
    let text = document.getElementsByName('inputText');
    console.log(text);
    console.log(text[0].value);
}, false);