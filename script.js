/*   ⠀
⠀⠀ ⣴⠟⠉⠉⠛⢦⡀⢀⣴⠛⠉⠈⠙⠻⣄
⠀⠀⣼⠃⠀⠀⠀⠀⠀⠙⠋⠀⠀⠀⠀⠀⠀⠹⣦
⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿
⠀⠀⠿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡆
⠀⠀⠀⢻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠃
⠀⠀⠀⠀⠀⠻⢦⣄⠀⠀⠀⠀⠀⣠⡴⠛
⠀⠀⠀⠀⠀⠀⠀⠉⠛⠶⣄⠶⠋ ⠀⠀*/


const button = document.getElementById('button');
// Get the ID of 'button' element !
// <3
const meatContainer = document.getElementById('meat');
// Get the ID of 'meat' img element & creates a container !

button.onclick = yearningHunger;
// Clicking the button will start the 'yearningHunger' function XD

function yearningHunger() {
    // The function & it's steps !
    // 1. Declare an image variable :p
    var meatHeart = document.createElement('img');

    // 2. Set the source (src) of the image >.<
    meatHeart.src = 'https://wilardo.crd.co/assets/images/gallery06/3fb70f55.png?v=e2d503a4';
    // IMPORTANT: Change this to your image path !
    meatHeart.alt = 'Meat Image';
    // Alt text is good for accessibility eheh. . .

    // 3. Append the new image to the 'meatContainer' div !!
    meatContainer.appendChild(meatHeart);
    /* appendChild takes the 'meatHeart' element 
  and adds it as a child to the 'meatContainer' element */

}

// How it duplicates images (o_O) ↴

/* SINCE 'MEATCONTAINER' IS ALREADY PART OF THE VISIBLE WEBPAGE, 
ADDING 'MEATHEART' TO IT IMMEDIATELY DISPLAYS THE NEW IMAGE ON THE PAGE ! */





