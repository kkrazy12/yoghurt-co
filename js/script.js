console.log('Loaded'); //ensures the JS file is linked to my HTMl correctly

var btn = document.querySelector('.mobileNavBTN');
var menu = document.querySelector('.menu');
// creating a variable called button, 
// then look into the DOM and use query selector which will select my class, tag, id etc and use that element.
//Currently, my mobile nav menu is being selected so that I can create a burger for the mobile version of my wesbite. 
//console.log(btn); using the console log to make sure the nav menu is selected correctly and showing on the console on my browser

btn.addEventListener('click', () => {
    menu.classList.toggle('hide');
});
//I am making the button listen out for an event so that it works correctly. In this case, the event I am waiting for is 
//when the user clicks the button. Once the button is clicked, the fat arrow syntax tells the code that we are firing a 
//callback fucntion. Whatever is definied in between the fat arrow syntax is what I want to happen. I also used a console log
//so that I can make sure the code is working. 

window.addEventListener('resize', () => {
    if (window.innerWidth > 420) { //If the window width of the screen is greater than 420 then add hide to the button to show the 
        btn.classList.add('hide'); //menu list.
        menu.classList.remove('hide'); // Then remove hide from the menu because on screens greater than 420, I want to show 
        //the full menu.
    } else if (window.innerWidth < 420) {
        btn.classList.remove('hide'); //I am removing hide from the button/burger so that I can see it on screens smaller than 420
        menu.classList.add('hide'); //I am adding hide to the menu because I am using a burger for screens smaller than 420 so 
        //the menu will not be needed.

    }
})