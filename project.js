document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Perform login validation here
    if (username === "deepa" && password === "123") {
      alert("Login successful!");
      // Redirect to another page
    //   window.location.href = "#veg";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });