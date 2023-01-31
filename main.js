window.onload = function () {
    var anph = document.getElementById("anph13-activate");
    var anphText = document.getElementById("anph13-h1");
    //create a new instance of shake.js.
    // var myShakeEvent = new Shake({
    //     threshold: 15
    // });

    // // start listening to device motion
    // myShakeEvent.start();

    // // register a shake event
    // window.addEventListener('shake', shakeEventDidOccur, false);

    // //shake event callback
    // function shakeEventDidOccur() {

    //     //put your own code here etc.
    //     anph.style.display = "block";
    //     anphText.style.display = "none";
    //     startAnimate();
    // }

    if (location.protocol != "https:") {
        location.href = "https:" + window.location.href.substring(window.location.protocol.length);
    }
    function permission() {
        if (typeof (DeviceMotionEvent) !== "undefined" && typeof (DeviceMotionEvent.requestPermission) === "function") {
            // (optional) Do something before API request prompt.
            DeviceMotionEvent.requestPermission()
                .then(response => {
                    // (optional) Do something after API prompt dismissed.
                    if (response == "granted") {
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

                    }
                })
                .catch(console.error)
        } else {
            alert("DeviceMotionEvent is not defined");
        }
    }
    const btn = document.getElementById("request");
    btn.addEventListener("click", permission);



};