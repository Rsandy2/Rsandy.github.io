//Timer functions for meeting dates.

//Modify this to change set date. Code will handle rest. Automation be added soon

var setDate = new Date("December 25, 2019 12:00:00").getTime();

// Setting  a function to update counts
var countsfunc = setInterval(function() {
  //Today's date
  var todayDate = new Date().getTime();

  var difference = setDate - todayDate;

  //calcs
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  //Output

  document.getElementById("demo2").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // Over text
  if (difference < 0) {
    clearInterval(countsfunc);
    document.getElementById("demo2").innerHTML = "Meeting is in progress";
  }
}, 1000);
