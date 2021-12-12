let daily = document.getElementsByClassName('daily');
let weekly = document.getElementsByClassName('weekly');
let monthly = document.getElementsByClassName('monthly');

window.onload = function() {
    $(daily).hide();
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

window.addEventListener("hashchange", hideAndShow);


$('#user__frequency__weekly').focus();
