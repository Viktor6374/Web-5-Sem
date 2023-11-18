
function addCurrentPointMenu(){
    var buttons = this.document.getElementsByClassName("navigation__item")
    for (var button of buttons){
        if(window.location.pathname.split('/').at(-1) === button.href.split('/').at(-1)){
            button.classList.add("current_navigation__item")
        }
    }
}

( function () {
   function addTimeload() {
        var loadTime = performance.measure("time-measure").duration;
        document.getElementsByClassName("timeload")[0].textContent = `Page load time is ${loadTime} seconds`
    }

    window.addEventListener('load', addTimeload);
}());

window.addEventListener('load', addCurrentPointMenu);