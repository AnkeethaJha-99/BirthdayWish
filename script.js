document.getElementById('cake').addEventListener('click', function() {
    this.classList.add('blow');
    document.getElementById('wishMessage').classList.remove('hidden');
  
    setTimeout(function() {
      document.getElementById('fulfilledMessage').classList.remove('hidden');
    }, 3000);
  });
  
  function redirectToMessage() {
    window.location.href = "message.html";
  }
  