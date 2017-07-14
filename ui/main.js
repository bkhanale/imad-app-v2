console.log('Loaded!');


// Change the value of main-content
var element = document.getElementById('main-content');
element.innerHTML = 'New value';

// Make the picture of madi move like in animation on clicking

var img = document.getElementById('madi');
var marginLeft = 0;

function moveRight () {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function() {
    var interval = setInterval(moveRight,50);
};