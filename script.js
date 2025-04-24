document.addEventListener("DOMContentLoaded", function() {
    const factContainer = document.createElement("p");
    factContainer.className = "text-center mt-3";
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factContainer.textContent = "Did you know? " + randomFact;
    document.querySelector(".hero-section .container").appendChild(factContainer);
});
function exploreNow() {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good morning! Welcome to your journey through France!";
    } else if (hour < 18) {
        greeting = "Good afternoon! Ready to explore France?";
    } else {
        greeting = "Good evening! Let’s discover the magic of France!";
    }

    alert(greeting);
}