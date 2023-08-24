window.addEventListener("keydown", function (e) {
    if ((e.key == "Esc" || e.key == "Escape") || (e.shiftKey && e.key == "E")) {
        kill_ad();
    }
});

function kill_ad() {
    elements = document.querySelector("button[class*=ad-skip]");
    if (elements) {
        elements.click();
    }
    elements = document.querySelector("button[class*=ad-overlay-close]");
    if (elements) {
        elements.click();
    }
}