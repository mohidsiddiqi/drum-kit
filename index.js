var drums = document.querySelectorAll(".drum");
drums.forEach(function (drum) {
    // onclick event
    drum.addEventListener("click", function () {
        checkKey(this.innerHTML);
        buttonAnimate(this.innerHTML);

    })

})

document.addEventListener("keydown", function (e) {
    checkKey(e.key);
    buttonAnimate(e.key);
})

function checkKey(btnPressed) {
    relativepath = "sounds/";
    ext = ".mp3";

    switch (btnPressed) {
        case "w":
            playsound(relativepath, "tom-1", ext);
            break;

        case "a":
            playsound(relativepath, "tom-2", ext);
            break;
        case "s":
            playsound(relativepath, "tom-3", ext);
            break;
        case "d":
            playsound(relativepath, "tom-4", ext);
            break;
        case "j":
            playsound(relativepath, "snare", ext);
            break;
        case "k":
            playsound(relativepath, "crash", ext);
            break;
        case "l":
            playsound(relativepath, "kick-bass", ext);
            break;
        default:
            console.log(btnPressed + " pressed!");
    }

}
function playsound(path, name, extension) {
    var audio = new Audio(path + name + extension);
    audio.play();
}

function buttonAnimate(currentKey) {
    var key = document.querySelector("." + currentKey);
    key.classList.add("pressed")
    setTimeout(function(){
        key.classList.remove("pressed")
    },100);
}