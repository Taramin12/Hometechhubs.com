if (bar) {
    bar.addeventlistener("click", () => {
        nav.classlist.add("active")
    })
}
if (bar) {
    bar.addeventlistener("click", () => {
        navbar.classlist.add("active")
    })
}


window.matchMedia("orientation:portrait").addEventListener("change", e => {
    const portrait = e.matches;
    if (portrait) {
        alert("you are in portrait");

    } else {
        alert("you are in landscape");
    }
});