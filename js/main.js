let daily = document.getElementsByClassName('daily');
let weekly = document.getElementsByClassName('weekly');
let monthly = document.getElementsByClassName('monthly');
// let frequency = document.getElementsByClassName('user__frequency__link'); 
// let frequencyNo = frequency.length; 
// let i;

window.onload = function() {
    $(weekly).hide();
    $(monthly).hide();
};

function hideAndShow() {
    if(location.hash === '#daily') {
        $(daily).show();
        $(weekly).hide();
        $(monthly).hide();
    } else if (location.hash === '#weekly') {
        $(daily).hide();
        $(weekly).show();;
        $(monthly).hide();
    } else if (location.hash === '#monthly') {
        $(daily).hide();
        $(weekly).hide();
        $(monthly).show();
    }
};

// for(i = 0; i < frequencyNo; i++) {
//     frequencyNo[i].addEventListener('click', hideAndShow);
// };

// document.querySelectorAll('.user__frequency__link').forEach(item => {
//     item.addEventListener('click', () => {
//         hideAndShow(this);
//     })
// })
let frequency = document.querySelectorAll('.user__frequency__link');
for (let i = 0; i < frequency.length; i++) {
    frequency[i].addEventListener('click', function (_event) {  
        // prevent browser's default action
        // event.preventDefault();

        // call your awesome function here
        hideAndShow(this); // 'this' refers to the current button on for loop
    });
}
