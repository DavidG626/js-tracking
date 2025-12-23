console.log("JS tracking.js loaded");


// Section 1 Simple Buttons Start

// Sign Up Button
let signupButton = document.querySelector("#btn-signup")
signupButton.addEventListener('click', function() {
    console.log("Sign Up Clicked");
    dataLayer.push({
        event: 'button_click',
        button_name: 'Sign Up'
    })
})

// Learn More Button
let learnmoreButton = document.querySelector("#btn-learn")
learnmoreButton.addEventListener('click', function() {
    console.log("Learn More Button Clicked");
    dataLayer.push({
        event: 'button_click',
        button_name: 'Learn More'
    })
})

// Buy Button
let buyButton = document.querySelector("#btn-buy")
buyButton.addEventListener('click', function() {
    console.log("Buy Now Button Clicked")
    dataLayer.push ({
        event: 'button_click',
        button_name: 'Buy Now'
    })
})
// Section 1 Simple Buttons End


// Section 2 Links Start

// View Pricing Link
let viewPricingLink = document.querySelector("#link-pricing")
viewPricingLink.addEventListener('click', function() {
    console.log("View Pricing Clicked")
    dataLayer.push ({
        event: 'link_click',
        link_name: 'View Pricing'
    })
})

// Contact Us Link
let contactusLink = document.querySelector("#link-contact")
contactusLink.addEventListener('click', function() {
    console.log("Contact Us Clicked")
    dataLayer.push ({
        event: 'link_click',
        link_name: 'Contact Us'
    })
})
// Section 2 End


// Section 3 Broken Buttons Start 

// Broken Button 1 Missing Event Name
let missingEvent = document.querySelector('#btn-broken-1')
missingEvent.addEventListener('click', function(){
    console.log('Click Me 1')
    dataLayer.push ({
        event: '',  
        button_name: 'btn-broken-3'
    })
})

// Broken Button 2 Undefined Variable
let undefinedVariable = document.querySelector("#btn-broken-2")
undefineVariable.addEventListener('click', function(){
    console.log('Click Me 2')
    dataLayer.push ({
        event: 'button_click',
        button_name: 'btn-broken-2'
    })
})

// Broken Button 3 Typo
let typoButton = document.querySelector("#btn-broken-33")
typoButton.addEventListener('click', function() {
    console.log('Click Me 3')
    dataLayer.push ({
        event: 'button_click',
        button_name: 'btn-broken-1'
    })
})

