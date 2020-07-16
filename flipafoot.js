var flipping = false;
function flip() {
    if(flipping)
        return;

    var foot = document.getElementById("foot");
    var result = document.getElementById("result");
    
    result.innerText = "";

    var ud = Math.round(Math.random());
    foot.style.transition = "4s";
    foot.style.transform = "rotateX(" + (1800 + 180 * ud) + "deg)";

    flipping = true;

    setTimeout(function() {
        foot.style.transition = "0s";
        foot.style.transform = "rotateX(" + (180 * ud) + "deg)";

        result.innerText = "it's " + (ud == 0 ? "feets!" : "ankles!");

        flipping = false;
     }, 4000);
}