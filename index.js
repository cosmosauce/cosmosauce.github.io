function tabChange(evt, catName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("stuffs-grid");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("cat-selector");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(catName).style.display = "block";
    evt.currentTarget.className += "cat-selected";
    }

// Reddit Tip
tippy('.sns', {
    theme: 'light',
    placement: 'bottom',
    animation: 'shift-away-subtle',
});