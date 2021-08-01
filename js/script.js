console.log('Loaded'); //ensures the JS file is linked to our HTMl correctly

var btn = document.querySelector('.mobileNavBTN');
var menu = document.querySelector('.menu');
// creating a variable called button, 
//we then look into the DOM and use query selector which will select our class, tag, id etc and use that element.
//Currently, our mobile nav menu is being selected so that we can create a burger for the mobile version of our wesbite. 
//console.log(btn); using the console log to make sure the nav menu is selected correctly and showing on the console on our browser

btn.addEventListener('click', () => {
    menu.classList.toggle('hide');
});
//we are making the button listen out for an event so that it works correctly. In this case, the event we are waiting for is 
//when the user clicks the button. Once the button is clicked, the fat arrow syntax tells the code that we are firing a 
//callback fucntion. Whatever is definied in between the fat arrow syntax is what we want to happen. We also used a console log
//so that we can make sure the code is working. 

window.addEventListener('resize', () => {
    if (window.innerWidth > 420) { //If the window width of the screen is greater than 420 then add hide to the button to show the 
        btn.classList.add('hide'); //menu list.
        menu.classList.remove('hide'); // We then remove hide from the menu because on screens greater than 420, we want to show 
        //the full menu.
    } else if (window.innerWidth < 420) {
        btn.classList.remove('hide'); //We are removing hide from the button/burger so that we can see it on screens smaller than 420
        menu.classList.add('hide'); //We are adding hide to the menu because we are using a burger for screens smaller than 420 so 
        //the menu will not be needed.

    }
})