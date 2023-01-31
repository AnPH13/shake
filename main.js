window.onload = function () {
    var container = document.getElementById("container-app");
    var anph = document.getElementById("anph13-activate");
    var anphText = document.getElementById("anph13-h1");
    var btnPermission = document.getElementById("permission");

    if (location.protocol != "https:") {
        location.href = "https:" + window.location.href.substring(window.location.protocol.length);
    }
    function permission() {
        if (typeof (DeviceMotionEvent) !== "undefined" && typeof (DeviceMotionEvent.requestPermission) === "function") {
            DeviceMotionEvent.requestPermission()
                .then(response => {
                    if (response == "granted") {
                        var myShakeEvent = new Shake({
                            threshold: 15
                        });
                        myShakeEvent.start();
                        window.addEventListener('shake', shakeEventDidOccur, false);
                        function shakeEventDidOccur() {
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
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        btnPermission.style.display = "flex";
        const btn = document.getElementById("request");
        btn.addEventListener("click", permission);
    }
    else{
        container.style.display = "flex";
        var myShakeEvent = new Shake({
            threshold: 15
        });
        myShakeEvent.start();
        window.addEventListener('shake', shakeEventDidOccur, false);
        function shakeEventDidOccur() {
            anph.style.display = "block";
            anphText.style.display = "none";
            startAnimate();
        }
    }
    
};