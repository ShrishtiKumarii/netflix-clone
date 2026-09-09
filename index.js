const movieCards = document.querySelectorAll(".movieCard");

const movieDetails = [
    {
        name: "Dhamaal 4",
        rating: "8.0",
        year: "2026",
        genre: "Comedy",
        description: "A fun-filled comedy adventure with a group of friends getting into another crazy situation."
    },
    {
        name: "Gandhari",
        rating: "8.2",
        year: "2026",
        genre: "Action",
        description: "An intense story filled with action, suspense and powerful characters."
    },
    {
        name: "Operation Safed Sagar",
        rating: "8.5",
        year: "2026",
        genre: "Action",
        description: "An action-packed story inspired by a high-stakes military operation."
    },
    {
        name: "Alpha",
        rating: "8.3",
        year: "2026",
        genre: "Action",
        description: "A powerful action story featuring courage, teamwork and unexpected challenges."
    },
    {
        name: "Cocktail 2",
        rating: "8.0",
        year: "2026",
        genre: "Romance",
        description: "A new story of friendship, relationships, love and complicated choices."
    },
    {
        name: "G.D.N",
        rating: "8.1",
        year: "2026",
        genre: "Drama",
        description: "A gripping story filled with drama, ambition and determination."
    },
    {
        name: "Musafir Cafe",
        rating: "7.9",
        year: "2026",
        genre: "Drama",
        description: "An emotional journey that brings different people together."
    },
    {
        name: "Gatta Kusthi 2",
        rating: "8.2",
        year: "2026",
        genre: "Comedy",
        description: "A fun and entertaining story packed with competition and unexpected moments."
    },
    {
        name: "Peddi",
        rating: "8.4",
        year: "2026",
        genre: "Drama",
        description: "A powerful story filled with emotions, action and determination."
    },
    {
        name: "Korean Kanakaraju",
        rating: "8.0",
        year: "2026",
        genre: "Comedy",
        description: "A light-hearted entertainer filled with comedy and unexpected adventures."
    }
];


// Create movie popup
const modal = document.createElement("div");

modal.classList.add("movieModal");

modal.innerHTML = `
    <div class="movieDetails">

        <button class="closeButton">&times;</button>

        <img class="modalPoster" src="" alt="Movie Poster">

        <div class="movieInfo">

            <h2 class="movieTitle"></h2>

            <div class="movieMeta">
                ⭐ <span class="movieRating"></span>
                <span>•</span>
                <span class="movieYear"></span>
                <span>•</span>
                <span class="movieGenre"></span>
            </div>

            <p class="movieDescription"></p>

            <button class="modalGetStarted">
                Get Started
            </button>

        </div>

    </div>
`;

document.body.appendChild(modal);

function showNotification(message) {
    const notification = document.createElement("div");

    notification.className = "notification";
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add("show");
    }, 10);

    setTimeout(() => {
        notification.classList.remove("show");

        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}


// Main Get Started button
const mainButton = document.querySelector(".getStartedButton");

mainButton.addEventListener("click", () => {

    const emailInput = document.querySelector("#emailInput");
    const email = emailInput.value.trim();

    if (email === "" || !email.includes("@")) {

        showNotification(
            "Please enter a valid email address to continue."
        );

    } else {

        showNotification(
            "You're all set! Welcome to Netflix Clone 🎬"
        );

    }

});



const modalButton = document.querySelector(".modalGetStarted");

modalButton.addEventListener("click", () => {

    showNotification(
        "Enter your Email to get started! 🎬"
    );

});

const modalPoster = document.querySelector(".modalPoster");
const movieTitle = document.querySelector(".movieTitle");
const movieRating = document.querySelector(".movieRating");
const movieYear = document.querySelector(".movieYear");
const movieGenre = document.querySelector(".movieGenre");
const movieDescription = document.querySelector(".movieDescription");


movieCards.forEach((card, index) => {

    card.addEventListener("click", () => {

        const movie = movieDetails[index];

      
        modalPoster.src = card.querySelector("img").src;
        movieTitle.textContent = movie.name;
        movieRating.textContent = movie.rating;
        movieYear.textContent = movie.year;
        movieGenre.textContent = movie.genre;
        movieDescription.textContent = movie.description;

      
        localStorage.setItem("selectedMovie", JSON.stringify(movie));

      
        modal.classList.add("active");
    });

});


document.querySelector(".closeButton").addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.classList.remove("active");
    }

});
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        modal.classList.remove("active");
    }

});

const faqQuestions = document.querySelectorAll(".faqQuestion");

faqQuestions.forEach((question) => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;
        const icon = question.querySelector(".faqIcon");

        if (answer.style.display === "block") {

            answer.style.display = "none";
            icon.textContent = "+";

        } else {

            answer.style.display = "block";
            icon.textContent = "×";

        }

    });

});

const languageSelect = document.querySelector("#languageSelect");

languageSelect.addEventListener("change", () => {

    if (languageSelect.value === "hi") {

        document.querySelector("#heroTitle").textContent =
            "अनलिमिटेड फ़िल्में, शो और बहुत कुछ";

        document.querySelector("#heroSubtitle").textContent =
            "₹149 से शुरू। जब चाहें कैंसल करें।";

        document.querySelector("#trendingTitle").textContent =
            "अभी ट्रेंडिंग में";

        document.querySelector("#reasonsTitle").textContent =
            "हमसे जुड़ने के और कारण";

        document.querySelector("#faqTitle").textContent =
            "अक्सर पूछे जाने वाले सवाल";

        document.querySelector("#signInButton").textContent =
            "साइन इन";

            document.querySelector("#readyTitle").textContent =
    "देखना शुरू करने के लिए तैयार हैं?";

document.querySelector("#readyText").textContent =
    "अपनी सदस्यता शुरू करने या फिर से शुरू करने के लिए अपना ईमेल दर्ज करें।";

document.querySelector("#emailInput").placeholder =
    "ईमेल पता";

document.querySelector("#getStartedButton").textContent =
    "शुरू करें";
            
        document.querySelector("#tvTitle").textContent =
    "अपने टीवी पर आनंद लें";

document.querySelector("#tvText").textContent =
    "स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर और अन्य डिवाइस पर देखें।";

document.querySelector("#downloadTitle").textContent =
    "अपने शो डाउनलोड करें और ऑफलाइन देखें";

document.querySelector("#downloadText").textContent =
    "अपनी पसंदीदा फ़िल्में और शो सेव करें और बिना इंटरनेट के भी कभी भी देखें।";

document.querySelector("#watchTitle").textContent =
    "हर जगह देखें";

document.querySelector("#watchText").textContent =
    "अपने फोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें।";

document.querySelector("#kidsTitle").textContent =
    "बच्चों के लिए प्रोफ़ाइल बनाएं";

document.querySelector("#kidsText").textContent =
    "बच्चों को उनकी पसंदीदा फ़िल्में और शो देखने के लिए अपनी अलग जगह दें।";

    document.querySelector("#faqQuestion1").textContent =
    "Netflix क्या है?";

document.querySelector("#faqAnswer1").textContent =
    "Netflix एक स्ट्रीमिंग सेवा है जहाँ आप फ़िल्में, टीवी शो, डॉक्यूमेंट्री और बहुत कुछ देख सकते हैं।";

document.querySelector("#faqQuestion2").textContent =
    "Netflix की कीमत कितनी है?";

document.querySelector("#faqAnswer2").textContent =
    "Netflix अलग-अलग सदस्यता प्लान प्रदान करता है। आप अपनी जरूरत के अनुसार प्लान चुन सकते हैं।";

document.querySelector("#faqQuestion3").textContent =
    "मैं Netflix कहाँ देख सकता हूँ?";

document.querySelector("#faqAnswer3").textContent =
    "आप Netflix को स्मार्ट टीवी, स्मार्टफोन, टैबलेट, लैपटॉप, गेमिंग कंसोल और अन्य समर्थित डिवाइस पर देख सकते हैं।";

document.querySelector("#faqQuestion4").textContent =
    "मैं अपनी सदस्यता कैसे रद्द करूँ?";

document.querySelector("#faqAnswer4").textContent =
    "आप अपनी अकाउंट सेटिंग्स से किसी भी समय अपनी सदस्यता रद्द कर सकते हैं।";

document.querySelector("#faqQuestion5").textContent =
    "मैं Netflix पर क्या देख सकता हूँ?";

document.querySelector("#faqAnswer5").textContent =
    "Netflix पर फ़िल्में, टीवी शो, डॉक्यूमेंट्री, ओरिजिनल सीरीज़ और कई अन्य मनोरंजन उपलब्ध हैं।";

document.querySelector("#faqQuestion6").textContent =
    "क्या Netflix बच्चों के लिए अच्छा है?";

document.querySelector("#faqAnswer6").textContent =
    "हाँ। Netflix बच्चों के लिए उम्र के अनुसार उपयुक्त फ़िल्मों और शो के साथ एक अलग किड्स अनुभव प्रदान करता है।";
    }

    else {

        document.querySelector("#heroTitle").textContent =
            "Unlimited movies, shows, and more";

        document.querySelector("#heroSubtitle").textContent =
            "Starts at ₹149. Cancel at any time.";

        document.querySelector("#trendingTitle").textContent =
            "Trending Now";

        document.querySelector("#reasonsTitle").textContent =
            "More Reasons to Join";

        document.querySelector("#faqTitle").textContent =
            "Frequently Asked Questions";

        document.querySelector("#signInButton").textContent =
            "Sign In";

            document.querySelector("#readyTitle").textContent =
    "Ready to watch?";

document.querySelector("#readyText").textContent =
    "Enter your email to create or restart your membership.";

document.querySelector("#emailInput").placeholder =
    "Email address";

document.querySelector("#getStartedButton").textContent =
    "Get Started";

         document.querySelector("#tvTitle").textContent =
    "Enjoy on your TV";

document.querySelector("#tvText").textContent =
    "Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.";

document.querySelector("#downloadTitle").textContent =
    "Download your shows to watch offline";

document.querySelector("#downloadText").textContent =
    "Save your favourite movies and shows so you can watch them anytime, even without an internet connection.";

document.querySelector("#watchTitle").textContent =
    "Watch everywhere";

document.querySelector("#watchText").textContent =
    "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.";

document.querySelector("#kidsTitle").textContent =
    "Create profiles for kids";

document.querySelector("#kidsText").textContent =
    "Give kids their own space to enjoy their favourite characters and shows.";

    document.querySelector("#faqQuestion1").textContent =
    "What is Netflix?";

document.querySelector("#faqAnswer1").textContent =
    "Netflix is a streaming service where you can watch movies, TV shows, documentaries and more on internet-connected devices.";

document.querySelector("#faqQuestion2").textContent =
    "How much does Netflix cost?";

document.querySelector("#faqAnswer2").textContent =
    "Netflix offers different membership plans. Choose a plan that works best for you and enjoy streaming your favourite movies and shows.";

document.querySelector("#faqQuestion3").textContent =
    "Where can I watch?";

document.querySelector("#faqAnswer3").textContent =
    "You can watch Netflix on smart TVs, smartphones, tablets, laptops, gaming consoles and other supported devices.";

document.querySelector("#faqQuestion4").textContent =
    "How do I cancel?";

document.querySelector("#faqAnswer4").textContent =
    "You can cancel your membership at any time from your account settings.";

document.querySelector("#faqQuestion5").textContent =
    "What can I watch on Netflix?";

document.querySelector("#faqAnswer5").textContent =
    "Netflix has movies, TV shows, documentaries, original series and many other types of entertainment.";

document.querySelector("#faqQuestion6").textContent =
    "Is Netflix good for kids?";

document.querySelector("#faqAnswer6").textContent =
    "Yes. Netflix provides a dedicated kids experience with age-appropriate movies and shows.";
    }
});