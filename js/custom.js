document.addEventListener("DOMContentLoaded", function() {
    // Set the date we're counting down to
    var countDownDate = new Date("Aug 23, 2025 00:00:00").getTime();

    // Function to update the countdown
    var updateCountdown = function() {
        // Get today's date and time
        var now = new Date().getTime();
        
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        
        // Time calculations for days
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        
        // Display the result in the element with id="countdown"
        document.getElementById("countdown").innerHTML = days + " days";

        
        // If the count down is finished, write some text 
        if (distance < 0) {
            document.getElementById("countdown").innerHTML = "Legally Wed!";
        }
    };

    // Update the count down once a day
    updateCountdown(); // Update on initial load
    setInterval(updateCountdown, 86400000); // 86400000 milliseconds in a day
});