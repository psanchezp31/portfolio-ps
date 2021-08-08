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
    let i = document.createElement("i");
    i.id = icon;
    i.className = icons[icon] + " overlay";
    if (i.id === "VueJs") {
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
    if (elementHoverId === 'VueJs') {
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
    changeFontSizeScreenSize(event);

}

function changeFontSizeScreenSize(event) {
    let x = window.matchMedia("(max-width: 610px)");
    let y = window.matchMedia("(max-width: 472px)");
    if (x.matches) {
        event.target.style.fontSize = "40px";
    }
    if (y.matches) {
        event.target.style.fontSize = "35px";
    }
}

changeFontSizeScreenSize();


const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
};

function showTecnologiesNames() {
    if (deviceType() === "tablet" || deviceType() === "mobile") {
        console.log("holaa");
        icons.forEach(function (icon) {
            let nameDiv = document.createElement("div");
            nameDiv.innerHTML = icon;
            fragment.appendChild(nameDiv);
        })
    }
}

showTecnologiesNames();
grid.appendChild(fragment);
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
            1000: {
                perView: 3
            },
            800: {
                perView: 2
            },
            700: {
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




