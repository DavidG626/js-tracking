console.log("Practice page loaded");

let signupButton = document.querySelector("#btn-signup");
let learnButton = document.querySelector("#btn-learn");
let buyButton = document.querySelector("#btn-buy");

signupButton.addEventListener("click", function() {
  console.log("Sign Up clicked");
  dataLayer.push({
    event: 'button_click',
    button_name: 'Sign Up',
});
});

learnButton.addEventListener("click", function() {
  console.log("Learn More clicked");
  dataLayer.push({
    event: 'button_click',
    button_name: 'Learn More',
});
});

buyButton.addEventListener("click", function() {
  console.log("Buy Now clicked");
  dataLayer.push({
    event: 'button_click',
    button_name: 'Buy Now',
  });
});

let brokenButton = document.querySelector("#btn-broken");

brokenButton.addEventListener("click", function() {
  console.log("Broken button clicked");
  dataLayer.push({
    'event': 'button_click',
    'button_name': 'Broken'
  });
});