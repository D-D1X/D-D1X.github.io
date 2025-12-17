function getResults() { 
    let userImageLink = "https://w0.peakpx.com/wallpaper/209/179/HD-wallpaper-doggo-cute-puppies-puppy.jpg"
    let timeStart, timeEnd;
    let downloadSize = 79094; // size of image
    let downloadImgSrc = new Image();
    let result = document.getElementById("results");

    timeStart = new Date().getTime();
    downloadImgSrc.src = userImageLink;

    downloadImgSrc.onload = function() {
        timeEnd = new Date().getTime();
        displaySpeed();
    }

    function displaySpeed() {
        let timeDuration = (timeEnd - timeStart) / 1000;
        let loadedBits = downloadSize * 8;
        // Convert to a string and round 2 places
        let bps = (loadedBits / timeDuration).toFixed(2);
        let speedInKbps = (bps / 1024).toFixed(2);
        let speedInMbps = (speedInKbps / 1024).toFixed(2);
        result.innerHTML = "Your internet connection speed is:<br>" + bps + "bps<br>" + speedInKbps + " kbps<br>" + speedInMbps + " Mbps<br><br>";
    }
}

