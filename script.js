//your JS code here. If required.
 function updateTimer() {
            const now = new Date();
            document.getElementById("timer").innerText = now.toLocaleString();
        }

       
        updateTimer();

        
        setInterval(updateTimer, 1000);