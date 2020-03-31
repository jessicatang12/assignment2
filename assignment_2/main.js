const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
<<<<<<< Updated upstream

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
thumbBar.appendChild(newImage);
=======
for (i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');
    var picture = 'images/pic' + i + '.jpg';
    newImage.setAttribute('src', picture);
    thumbBar.appendChild(newImage);
    
/* When clicked, changes displayed image to thumbnail image */
    newImage.onclick = function refresh(pict) {
        displayedImage.src = pict.target.src;
    }
} 
>>>>>>> Stashed changes

/* Wiring up the Darken/Lighten button  */
