let daily = document.getElementsByClassName('daily');
let weekly = document.getElementsByClassName('weekly');
let monthly = document.getElementsByClassName('monthly');

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

let frequency = document.querySelectorAll('.user__frequency__link');
for (let i = 0; i < frequency.length; i++) {
    frequency[i].addEventListener('click', function (_event) {  
        hideAndShow(this); 
    });
}
