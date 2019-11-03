
function genQuote() {
    var randNum = Math.floor(Math.random() * 10) + 1;
    document.getElementById('quote').innerHTML = quotes[randNum];
    var tweetQuote = quotes[randNum].split(' ').join('%20');
    tweetQuote = tweetQuote.split('<br>').join('');
    tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
    $('.twitter-share-button').attr('href', tweetQuote);

    var x = document.getElementById("snackbar2");
  x.className = "show";
  setTimeout(function() {
    x.className = x.className.replace("show", "");
  }, 3000);

  var tempE = document.getElementById("buttonStyle2");
  tempE.className = "inst";
  setTimeout(function() {
    tempE.className = tempE.className.replace("inst", "");
  }, 3000);
  }
  
  var quotes = [
  "Blank",
  '"Dude, suckin\' at something is the first step at being sorta good at something."<br>-  Jake <small><em>(Adventure Time)</em></small>',
  '"Either I will find a way, or I will make one."<br> - Philip Sidney',
  '"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."<br>- Thomas A. Edison',
  '"You are never too old to set another goal or to dream a new dream."<br>- C.S Lewis',
  '"If you can dream it, you can do it."<br>- Walt Disney',
  '"Never give up, for that is just the place and time that the tide will turn."<br>- Harriet Beecher Stowe',
  "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"<br>- Muhammad Ali",
  '"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them."<br>- Bruce Lee',
  '"You can\'t be happy unless you\'re unhappy sometimes."<br>- Lauren Oliver Delirium',
  '"The best way to cheer yourself is to try to cheer someone else up. "―Mark Twain'
];
