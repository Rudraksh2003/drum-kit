var drumbotton = document.querySelectorAll(".drum").length;
for (var i = 0; i < drumbotton; i++)

{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var botton = this.innerHTML;
        makesound(botton);
        animation(botton);

    });
}
document.addEventListener("keypress", function(event) {
        makesound(event.key);
        animation(event.key);
    }

);

function makesound(key) {
    switch (key) {

        //1
        case "w":
            var audio = new Audio("tom-1.mp3");
            audio.play();
            break;
            //2
        case "a":
            var tom = new Audio("tom-2.mp3");
            tom.play();
            break;
            //3
        case "s":
            var audio2 = new Audio("tom-3.mp3");
            audio2.play();
            break;
            //4
        case "d":
            var audio3 = new Audio("tom-4.mp3");
            audio3.play();
            break;
            //5
        case "j":
            var audio4 = new Audio("snare.mp3");
            audio4.play();
            break;
            //6
        case "k":
            var audio5 = new Audio("crash.mp3");
            audio5.play();
            break;
            //7
        case "l":
            var audio7 = new Audio("kick-bass.mp3");
            audio7.play();
            break;
        default:
            console.log("key");
    };
}

function animation(currentkey) {
    var active = document.querySelector("." + currentkey);
    active.classList.add("pressed");
    setTimeout(function() { active.classList.remove("pressed"); }, 100);
}