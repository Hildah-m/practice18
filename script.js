var paragraph = document.getElementById("myParagraph");
var button = document.getElementById("myButton");

// Add an event listener to the button
button.addEventListener("click", function() {
  // Change the text content of the paragraph
  paragraph.textContent = "Hello, world!";
});