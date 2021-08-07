
document.body.addEventListener("click", function (e) {
    if (e.target.matches("css-doodle")) {
        e.target.refresh();
    }
});

let grid = document.getElementById("technologies-grid");

let icons = {
    JavaScript: "icon-javascript-alt",
    Html5: "icon-html5-alt",
    Css3: "icon-css3-alt",
    React: "icon-reactjs",
    VueJs: "fab fa-vuejs",
    Python: "icon-python",
    Java: " icon-java",
    SpringBoot: "icon-spring",
    Git: "icon-git",
    MySQL: "icon-mysql",
};

let fragment = document.createDocumentFragment();

Object.keys(icons).forEach(function (icon) {
    console.log(icon)
    let i = document.createElement("i");
    i.id = icon;
    i.className = icons[icon] + " overlay";
    if (i.id == "VueJs") {
        i.className += " iconfa";
    }
    i.addEventListener("mouseover", mouseOver, false);
    i.addEventListener("mouseout", mouseOut, false);
    fragment.appendChild(i);
});

grid.appendChild(fragment);
grid.children;
//console.log(grid.children);
//console.log(grid)

function mouseOver(event) {
    let elementHoverId = this.id;
    event.target.innerHTML = elementHoverId;
    if (elementHoverId == 'VueJs') {
        event.target.innerHTML = "";
    }
    event.target.style.fontSize = "15px";
    event.target.style.color = "#4d089a";
    event.target.style.fontStyle = "normal";
}

function mouseOut(event) {
    event.target.innerHTML = "";
    event.target.style.fontSize = "50px";
    event.target.style.transition = ".3s ease";
}

/*Projects slider */

window.addEventListener('load', () => {

    const glide = new Glide('.glide', {
        type: "carousel",
        touchAngle: 45,
        focusAt: 1,
        startAt: 1,
        perView: 3.5,
        keyboard: true,
        gap: 20,
        autoplay: false,
        hoverpause: true,
        animationDuration: 5000,
        breakpoints: {
            1000:{
                perView:3
            },
            800: {
                perView: 2
            },
            500: {
                perView: 1
            }
        },
        peek: {
            before: 50,
            after: 50
        },

    })

    glide.mount()

})




