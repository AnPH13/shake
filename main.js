window.onload = function () {
    var anph = document.getElementById("anph13-activate");
    var anphText = document.getElementById("anph13-h1");
    //create a new instance of shake.js.
    var myShakeEvent = new Shake({
        threshold: 15
    });

    // start listening to device motion
    myShakeEvent.start();

    // register a shake event
    window.addEventListener('shake', shakeEventDidOccur, false);

    //shake event callback
    function shakeEventDidOccur() {

        //put your own code here etc.
        anph.style.display = "block";
        anphText.style.display = "none";
        startAnimate();
    }
};