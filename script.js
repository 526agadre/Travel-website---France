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
let currentGallerySet = 0;
const galleryImages = [
    [
        "https://via.placeholder.com/300x200?text=Paris+by+Grok",
        "https://via.placeholder.com/300x200?text=Provence+by+Grok",
        "https://via.placeholder.com/300x200?text=Riviera+by+Grok"
    ],
    [
        "https://via.placeholder.com/300x200?text=Louvre+by+Grok",
        "https://via.placeholder.com/300x200?text=Normandy+by+Grok",
        "https://via.placeholder.com/300x200?text=Alsace+by+Grok"
    ]
];

function loadGallery() {
    const gallery = document.getElementById("gallery");
    if (gallery) {
        gallery.innerHTML = "";
        galleryImages[currentGallerySet].forEach((src, index) => {
            const col = document.createElement("div");
            col.className = "col-md-4 mb-4";
            col.innerHTML = `<img src="${src}" alt="Gallery image ${index + 1}" class="img-fluid rounded">`;
            gallery.appendChild(col);
        });
    }
}

function changeGallery() {
    currentGallerySet = (currentGallerySet + 1) % galleryImages.length;
    loadGallery();
}
function exploreNow() {
    alert("Welcome to your French adventure! Let's explore France together.");
}
function changeVideo() {
    const videoSelect = document.getElementById("videoSelect");
    const cultureVideo = document.getElementById("cultureVideo");
    if (videoSelect && cultureVideo) {
        const value = videoSelect.value;
        let src = "";
        if (value === "art") {
            src = "https://via.placeholder.com/500x300?text=Art+Video";
        } else if (value === "history") {
            src = "https://via.placeholder.com/500x300?text=History+Video";
        } else if (value === "fashion") {
            src = "https://via.placeholder.com/500x300?text=Fashion+Video";
        }
        cultureVideo.src = src;
    }
}
function showRecipe() {
    const recipeSelect = document.getElementById("recipeSelect");
    const recipeContent = document.getElementById("recipeContent");
    if (recipeSelect && recipeContent) {
        const value = recipeSelect.value;
        let title = "";
        let description = "";
        if (value === "croissant") {
            title = "Croissant";
            description = "A buttery, flaky pastry perfect for breakfast.";
        } else if (value === "ratatouille") {
            title = "Ratatouille";
            description = "A traditional French vegetable stew.";
        } else if (value === "crepe") {
            title = "Crepe";
            description = "A thin pancake, often filled with sweet or savory ingredients.";
        }
        recipeContent.innerHTML = `<h4>${title}</h4><p>${description}</p>`;
    }
}
window.onload = function() {
    loadGallery();
};