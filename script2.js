document.addEventListener("DOMContentLoaded", function() {
    var messageLines = document.getElementsByClassName("message-line");
  
    for (var i = 0; i < messageLines.length; i++) {
      animateLine(messageLines[i], i);
    }
  
    function animateLine(line, index) {
      setTimeout(function() {
        line.style.opacity = "1";
        line.style.transform = "translateY(0)";
      }, index * 2000);
    }
  });
  document.addEventListener("DOMContentLoaded", function() {
    var audio = new Audio("happy-birthday-music-box.mp3");
    
    audio.play();
  });