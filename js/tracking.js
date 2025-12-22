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



// Error 1: Typo in selector (btn-brokn instead of btn-broken-1)
let broken1 = document.querySelector("#btn-brokn-1");
broken1.addEventListener("click", function() {
  dataLayer.push({ 'event': 'button_click', 'button_name': 'Broken 1' });
});

// Error 2: Undefined variable
let broken2 = document.querySelector("#btn-broken-2");
broken2.addEventListener("click", function() {
  dataLayer.push({ 'event': 'button_click', 'button_name': userName });  // userName doesn't exist
});

// Error 3: Missing event name
let broken3 = document.querySelector("#btn-broken-3");
broken3.addEventListener("click", function() {
  dataLayer.push({ 'button_name': 'Broken 3' });  // no 'event' key — GTM won't trigger
});