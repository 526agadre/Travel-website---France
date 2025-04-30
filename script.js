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
document.addEventListener('DOMContentLoaded', () => {
    const recipeButtons = document.querySelectorAll('.view-recipe');
    const recipeContent = document.getElementById('recipeContent');
    const recipeModalLabel = document.getElementById('recipeModalLabel');

    const recipes = {
        'coq-au-vin': `
            <h4>Coq au Vin Recipe</h4>
            <p><strong>Ingredients:</strong></p>
            <ul>
                <li>1 whole chicken, cut into pieces</li>
                <li>750ml red wine</li>
                <li>200g mushrooms</li>
                <li>2 onions, chopped</li>
                <li>2 cloves garlic</li>
            </ul>
            <p><strong>Instructions:</strong></p>
            <ol>
                <li>Marinate chicken in wine overnight.</li>
                <li>Sauté onions and garlic, add chicken, and brown.</li>
                <li>Add mushrooms and wine marinade, simmer for 1.5 hours.</li>
                <li>Serve with mashed potatoes.</li>
            </ol>
        `,
        'bouillabaisse': `
            <h4>Bouillabaisse Recipe</h4>
            <p><strong>Ingredients:</strong></p>
            <ul>
                <li>1kg mixed fish (e.g., cod, snapper)</li>
                <li>500g shellfish</li>
                <li>2 tomatoes, chopped</li>
                <li>1 fennel bulb</li>
                <li>Saffron, olive oil</li>
            </ul>
            <p><strong>Instructions:</strong></p>
            <ol>
                <li>Sauté fennel and tomatoes in olive oil.</li>
                <li>Add fish, saffron, and water, simmer for 20 minutes.</li>
                <li>Add shellfish and cook for 5 minutes.</li>
                <li>Serve with rouille and crusty bread.</li>
            </ol>
        `,
        'ratatouille': `
            <h4>Ratatouille Recipe</h4>
            <p><strong>Ingredients:</strong></p>
            <ul>
                <li>1 zucchini</li>
                <li>1 eggplant</li>
                <li>2 tomatoes</li>
                <li>1 bell pepper</li>
                <li>1 onion, garlic, herbs</li>
            </ul>
            <p><strong>Instructions:</strong></p>
            <ol>
                <li>Slice vegetables thinly.</li>
                <li>Sauté onion and garlic, add chopped tomatoes.</li>
                <li>Arrange sliced vegetables in a spiral in a baking dish.</li>
                <li>Bake at 375°F for 40 minutes.</li>
            </ol>
        `,
        'steak-frites': `
            <h4>Steak Frites Recipe</h4>
            <p><strong>Ingredients:</strong></p>
            <ul>
                <li>2 ribeye steaks</li>
                <li>500g potatoes</li>
                <li>Butter, thyme</li>
                <li>Salt, pepper</li>
            </ul>
            <p><strong>Instructions:</strong></p>
            <ol>
                <li>Cut potatoes into fries, soak in water, then fry until crispy.</li>
                <li>Season steaks and sear in butter with thyme.</li>
                <li>Cook to desired doneness.</li>
                <li>Serve with fries and béarnaise sauce.</li>
            </ol>
        `,
        'creme-brulee': `
            <h4>Crème Brûlée Recipe</h4>
            <p><strong>Ingredients:</strong></p>
            <ul>
                <li>500ml heavy cream</li>
                <li>5 egg yolks</li>
                <li>100g sugar</li>
                <li>1 vanilla bean</li>
            </ul>
            <p><strong>Instructions:</strong></p>
            <ol>
                <li>Heat cream with vanilla bean.</li>
                <li>Whisk egg yolks with sugar, temper with hot cream.</li>
                <li>Bake in ramekins at 325°F for 30 minutes.</li>
                <li>Chill, sprinkle with sugar, and torch to caramelize.</li>
            </ol>
        `,
        'macarons': `
            <h4>Macarons Recipe</h4>
            <p><strong>Ingredients:</strong></p>
            <ul>
                <li>100g almond flour</li>
                <li>175g powdered sugar</li>
                <li>3 egg whites</li>
                <li>50g granulated sugar</li>
            </ul>
            <p><strong>Instructions:</strong></p>
            <ol>
                <li>Sift almond flour and powdered sugar.</li>
                <li>Whip egg whites to stiff peaks, add sugar.</li>
                <li>Fold in dry ingredients, pipe onto trays.</li>
                <li>Bake at 300°F for 15 minutes, fill with buttercream.</li>
            </ol>
        `,
        'tarte-tatin': `
            <h4>Tarte Tatin Recipe</h4>
            <p><strong>Ingredients:</strong></p>
            <ul>
                <li>6 apples</li>
                <li>100g sugar</li>
                <li>50g butter</li>
                <li>1 puff pastry sheet</li>
            </ul>
            <p><strong>Instructions:</strong></p>
            <ol>
                <li>Caramelize sugar and butter in a skillet.</li>
                <li>Add peeled, halved apples, cook until soft.</li>
                <li>Cover with puff pastry, bake at 375°F for 30 minutes.</li>
                <li>Invert onto a plate to serve.</li>
            </ol>
        `,
        'eclairs': `
            <h4>Éclairs Recipe</h4>
            <p><strong>Ingredients:</strong></p>
            <ul>
                <li>100g flour</li>
                <li>100g butter</li>
                <li>4 eggs</li>
                <li>500ml custard</li>
                <li>200g chocolate</li>
            </ul>
            <p><strong>Instructions:</strong></p>
            <ol>
                <li>Make choux pastry with butter, water, flour, and eggs.</li>
                <li>Pipe into strips, bake at 400°F for 25 minutes.</li>
                <li>Fill with custard.</li>
                <li>Dip in melted chocolate.</li>
            </ol>
        `
    };

    recipeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const recipeKey = button.getAttribute('data-recipe');
            recipeContent.innerHTML = recipes[recipeKey];
            recipeModalLabel.textContent = button.parentElement.querySelector('.card-title').textContent + ' Recipe';
            const modal = new bootstrap.Modal(document.getElementById('recipeModal'));
            modal.show();
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const activityButtons = document.querySelectorAll('.view-details');
    const activityContent = document.getElementById('activityContent');
    const activityModalLabel = document.getElementById('activityModalLabel');
    const planCheckboxes = document.querySelectorAll('.add-to-plan');
    const travelPlanList = document.getElementById('travelPlanList');
    const clearPlanButton = document.getElementById('clearPlan');

    const activities = {
        'eiffel-tower': `
            <h4>Eiffel Tower Details</h4>
            <p><strong>Location:</strong> Paris</p>
            <p><strong>Description:</strong> Climb or take the elevator to the top of this iconic structure for panoramic views of Paris. Visit at night for a sparkling light show.</p>
            <p><strong>Tips:</strong></p>
            <ul>
                <li>Book tickets in advance to skip lines.</li>
                <li>Visit early morning for fewer crowds.</li>
            </ul>
            <p><strong>Hours:</strong> 9:30 AM - 11:00 PM</p>
        `,
        'versailles': `
            <h4>Palace of Versailles Details</h4>
            <p><strong>Location:</strong> Versailles, near Paris</p>
            <p><strong>Description:</strong> Tour the opulent palace, Hall of Mirrors, and expansive gardens. A UNESCO World Heritage site.</p>
            <p><strong>Tips:</strong></p>
            <ul>
                <li>Rent a golf cart to explore the gardens.</li>
                <li>Check for fountain shows in summer.</li>
            </ul>
            <p><strong>Hours:</strong> 9:00 AM - 6:30 PM (closed Mondays)</p>
        `,
        'loire-valley': `
            <h4>Loire Valley Details</h4>
            <p><strong>Location:</strong> Central France</p>
            <p><strong>Description:</strong> Visit stunning châteaux like Chambord and Chenonceau, and enjoy wine tastings in the region.</p>
            <p><strong>Tips:</strong></p>
            <ul>
                <li>Join a guided château tour for history.</li>
                <li>Rent a bike to explore the countryside.</li>
            </ul>
            <p><strong>Hours:</strong> Varies by château</p>
        `,
        'mont-saint-michel': `
            <h4>Mont Saint-Michel Details</h4>
            <p><strong>Location:</strong> Normandy</p>
            <p><strong>Description:</strong> Explore this medieval island abbey, a UNESCO site, surrounded by unique tidal waters.</p>
            <p><strong>Tips:</strong></p>
            <ul>
                <li>Check tide schedules for dramatic views.</li>
                <li>Stay overnight for a magical experience.</li>
            </ul>
            <p><strong>Hours:</strong> 9:00 AM - 7:00 PM</p>
        `,
        'louvre': `
            <h4>Louvre Museum Details</h4>
            <p><strong>Location:</strong> Paris</p>
            <p><strong>Description:</strong> Home to the Mona Lisa, Venus de Milo, and thousands of artworks across centuries.</p>
            <p><strong>Tips:</strong></p>
            <ul>
                <li>Purchase timed-entry tickets online.</li>
                <li>Focus on specific wings to avoid overwhelm.</li>
            </ul>
            <p><strong>Hours:</strong> 9:00 AM - 6:00 PM (closed Tuesdays)</p>
        `,
        'wine-tasting': `
            <h4>Wine Tasting in Bordeaux Details</h4>
            <p><strong>Location:</strong> Bordeaux</p>
            <p><strong>Description:</strong> Sample world-renowned wines at vineyards and learn about winemaking traditions.</p>
            <p><strong>Tips:</strong></p>
            <ul>
                <li>Book a guided vineyard tour.</li>
                <li>Visit during harvest season (September).</li>
            </ul>
            <p><strong>Hours:</strong> Varies by vineyard</p>
        `,
        'provence-lavender': `
            <h4>Provence Lavender Fields Details</h4>
            <p><strong>Location:</strong> Provence</p>
            <p><strong>Description:</strong> Wander through stunning lavender fields, especially vibrant from June to August.</p>
            <p><strong>Tips:</strong></p>
            <ul>
                <li>Visit Valensole for the best fields.</li>
                <li>Bring a camera for photography.</li>
            </ul>
            <p><strong>Hours:</strong> Open access (best in daylight)</p>
        `,
        'carnival-nice': `
            <h4>Carnival in Nice Details</h4>
            <p><strong>Location:</strong> Nice</p>
            <p><strong>Description:</strong> Enjoy colorful parades, floats, and festivities during this famous annual event in February.</p>
            <p><strong>Tips:</strong></p>
            <ul>
                <li>Book accommodations early for February.</li>
                <li>Reserve seats for the best parade views.</li>
            </ul>
            <p><strong>Hours:</strong> Varies by event</p>
        `
    };

    activityButtons.forEach(button => {
        button.addEventListener('click', () => {
            const activityKey = button.getAttribute('data-activity');
            activityContent.innerHTML = activities[activityKey];
            activityModalLabel.textContent = button.parentElement.querySelector('.card-title').textContent;
            const modal = new bootstrap.Modal(document.getElementById('activityModal'));
            modal.show();
        });
    });

    let travelPlan = [];

    planCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const activityName = checkbox.parentElement.parentElement.querySelector('.card-title').textContent;
            if (checkbox.checked) {
                if (!travelPlan.includes(activityName)) {
                    travelPlan.push(activityName);
                }
            } else {
                travelPlan = travelPlan.filter(item => item !== activityName);
            }
            updateTravelPlan();
        });
    });

    function updateTravelPlan() {
        travelPlanList.innerHTML = '';
        travelPlan.forEach(item => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = item;
            travelPlanList.appendChild(li);
        });
    }

    clearPlanButton.addEventListener('click', () => {
        travelPlan = [];
        planCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        updateTravelPlan();
    });
});
