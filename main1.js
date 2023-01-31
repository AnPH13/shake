function getMobileOperatingSystem() {
    var anph = document.getElementById("anph13-activate");
    var anphText = document.getElementById("anph13-h1");

    if (location.protocol != "https:") {
        location.href = "https:" + window.location.href.substring(window.location.protocol.length);
    }

    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        permission()
        return 0;
    }

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

    return 0;
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


window.onload = getMobileOperatingSystem()