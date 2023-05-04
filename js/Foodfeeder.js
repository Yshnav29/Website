window.addEventListener("load", () => {
    
    var video = document.getElementById("video");
    var btn = document.getElementById('button');

    btn.addEventListener('click',() => {

        if(video.paused) {
            video.play();
            btn.innerHTML = "Pause";
        }
        else {
            video.pause();
            btn.innerHTML = "Play";
        }
    });



    var butt = document.getElementById("play");
    var demo = document.getElementById("demo");
    var div = document.getElementById("layer");

    div.addEventListener("click",() => {
        console.log("outside if");
        if(!demo.paused) {
            console.log("inside if");
            demo.pause();
            butt.style.display = "block";
        }
        else {
            demo.play();
            butt.style.display = "none";
        }
    });
});

$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        loop:true,
        nav:false,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplaySpeed:2000,
        autoplayHoverPause:true
    })
})