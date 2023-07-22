// Handle form submission
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    
    // Get the form values
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var message = document.querySelector('textarea[name="message"]').value;
    
    // Perform form validation
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }
    
    // Send form data to the server (you can customize this part based on your requirements)
    // Example: Using fetch API to send a POST request
    fetch("/bezalelhero@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: name, email: email, message: message })
    })
    .then(function (response) {
      if (response.ok) {
        alert("Thank you for your message! We will get back to you soon.");
        // Clear the form fields after successful submission
        document.querySelector('input[name="name"]').value = "";
        document.querySelector('input[name="email"]').value = "";
        document.querySelector('textarea[name="message"]').value = "";
      } else {
        alert("Oops! Something went wrong. Please try again later.");
      }
    })
    .catch(function (error) {
      console.log(error);
      alert("Oops! Something went wrong. Please try again later.");
    });
  });
  
  // Example: Adding interactivity to the navigation menu
  var navLinks = document.querySelectorAll("nav ul li a");
  
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor click behavior
  
      var targetSectionId = this.getAttribute("href").slice(1);
      var targetSection = document.getElementById(targetSectionId);
      
      // Scroll smoothly to the target section
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  }
  