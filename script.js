document.getElementById("contactBtn").addEventListener("click", function() {
    // Toggle the class to apply and remove the animation
    this.classList.add("shake-animation");
    setTimeout(() => {
      this.classList.remove("shake-animation");
    }, 500); // Set the timeout to match the animation duration
  });
  