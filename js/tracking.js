// JS Check
console.log("JS tracking.js loaded")

// GTM Check
if (typeof dataLayer === 'undefined') {
    console.error('GTM not loaded, dataLayer is missing')
}

// Debug Function For Buttons
function trackButton(selector, buttonName) {
    let button = document.querySelector(selector)
    
    if (!button) {
        console.warn(`Missing: ${selector}`)
        return
    }
    button.addEventListener('click', function(){
        dataLayer.push({
            event: 'button_click',
            button_name: buttonName
        })
        console.log(`Tracked: ${buttonName}`)
    })
}

// Debug Function For Links
function trackLink(selector, linkName) {
    let link = document.querySelector(selector)
    
    if (!link) {
        console.warn(`Missing: ${selector}`)
        return
    }

    link.addEventListener('click', function() {
        dataLayer.push({
            event: 'link_click',
            link_name: linkName
        })
        console.log(`Tracked: ${linkName}`)
    })
}


// Section 1: Functions For Buttons With No Errors
trackButton("#btn-signup", "Sign Up")
trackButton("#btn-learn", "Learn More")
trackButton("#btn-buy", "Buy Now")

// Section 2: Functions For Links With No Errors
trackLink("#link-pricing", "View Pricing")
trackLink("#link-contact", "Contact Us")

// Section3: Buttons With Errors

// Button 1: Empty Event Name
let missingEvent = document.querySelector("#btn-broken-1")

if (missingEvent) {
    missingEvent.addEventListener('click', function() {
        dataLayer.push({
            event: '',   // Bug: empty event name
            button_name: "Click Me 1"
        })
    })
}

// Button 2: Undefined Variable (crashes on page load with no if...)
let undefinedVariable = document.querySelector("#btn-broken-2")

undefineVariable.addEventListener('click', function(){  
    dataLayer.push({
        event:'button_click',
        button_name:'Click Me 2'
    })
})

// Button3: Wrong Selector (null error)
let typoButton = document.querySelector('#btn-broken-33') // Bug: should be #btn-broken-3

typoButton.addEventListener('click', function(){
    dataLayer.push({
        event:'button_click',
        button_name: 'Click Me 3'
    })
})










