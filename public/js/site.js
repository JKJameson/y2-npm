
/*
    Hamburger navigation toggle
*/
let isNavToggled = false;
function toggleNavMenu() {
    let navElem = document.querySelector("nav ul");
    let navFocusElem = document.querySelector("#navfocus");
    if (isNavToggled || navElem.checkVisibility()) {
        resetNav();
    } else {
        // the nav is hidden due to window size
        navElem.style.display = 'initial';
        navFocusElem.style.display = 'inline';
        isNavToggled = true;
    }
}

function resetNav() {
    let navElem = document.querySelector("nav ul");
    let navFocusElem = document.querySelector("#navfocus");

    navElem.style.display = '';
    navFocusElem.style.display = '';
    isNavToggled = false;
}

/*
    Highlight the current page in the nav
*/
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav a").forEach(function (link) {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("nav-active");
        }
    });
});

/*
    Handle page resizing
*/
window.addEventListener("resize", function() {
    let hamElem = document.getElementById('hamburger');
    // if the hamburger menu was opened but the icon is no longer visible, the size was extended beyond the small scope
    if (isNavToggled && !hamElem.checkVisibility()) {
        isNavToggled = false;

        resetNav();
    }
});

/*
    Scroll-to-bottom button (large screens only; hidden via CSS on small)
*/
document.addEventListener("DOMContentLoaded", function () {
    var btn = document.createElement("button");
    btn.id = "scroll-bottom-btn";
    btn.setAttribute("aria-label", "Go to bottom of page");
    btn.innerHTML = "&#8595;"; /* ↓ */
    btn.addEventListener("click", function () {
        document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
    });
    document.body.appendChild(btn);
});
