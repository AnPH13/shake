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

    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        if (typeof (DeviceMotionEvent) !== "undefined" && typeof (DeviceMotionEvent.requestPermission) === "function") {
            // (optional) Do something before API request prompt.
            DeviceMotionEvent.requestPermission()
                .then(response => {
                    // (optional) Do something after API prompt dismissed.
                    if (response == "granted") {
                        var sensitivity = 20;

                        // Position variables
                        var x1 = 0, y1 = 0, z1 = 0, x2 = 0, y2 = 0, z2 = 0;

                        // Listen to motion events and update the position
                        window.addEventListener('devicemotion', function (e) {
                            x1 = e.accelerationIncludingGravity.x;
                            y1 = e.accelerationIncludingGravity.y;
                            z1 = e.accelerationIncludingGravity.z;
                        }, false);

                        // Periodically check the position and fire
                        // if the change is greater than the sensitivity
                        setInterval(function () {
                            var change = Math.abs(x1 - x2 + y1 - y2 + z1 - z2);

                            if (change > sensitivity) {
                                anph.style.display = "block";
                                anphText.style.display = "none";
                                startAnimate();
                            }

                            // Update new position
                            x2 = x1;
                            y2 = y1;
                            z2 = z1;
                        }, 150);
                    }
                })
                .catch(console.error)
        } else {
            alert("DeviceMotionEvent is not defined");
        }
    } else {
        var sensitivity = 20;

        // Position variables
        var x1 = 0, y1 = 0, z1 = 0, x2 = 0, y2 = 0, z2 = 0;

        // Listen to motion events and update the position
        window.addEventListener('devicemotion', function (e) {
            x1 = e.accelerationIncludingGravity.x;
            y1 = e.accelerationIncludingGravity.y;
            z1 = e.accelerationIncludingGravity.z;
        }, false);

        // Periodically check the position and fire
        // if the change is greater than the sensitivity
        setInterval(function () {
            var change = Math.abs(x1 - x2 + y1 - y2 + z1 - z2);

            if (change > sensitivity) {
                anph.style.display = "block";
                anphText.style.display = "none";
                startAnimate();
            }

            // Update new position
            x2 = x1;
            y2 = y1;
            z2 = z1;
        }, 150);
    }

};