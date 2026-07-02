// Show a message when the page loads
window.onload = function () {
    console.log("Virtual Gift Website Loaded!");
};

// Optional confirmation before opening the gift
function openGift() {
    let answer = confirm("Are you ready to open your gift? ❤️");

    if (answer) {
        window.location.href = "flowers.html";
    }
}

// Go to the "Aw Please?" page
function declineGift() {
    window.location.href = "decline.html";
}

// Open the love letter
function openLetter() {
    window.location.href = "letter.html";
}