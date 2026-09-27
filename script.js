/* =========================================
   WEBSITE VARIABLES
========================================= */

let noCount = 0;
let giftChosen = false;


/* =========================================
   PAGE NAVIGATION
========================================= */

function goToPage(pageNumber) {

    // Hide every page
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    // Show requested page
    const nextPage = document.getElementById("page" + pageNumber);

    if (nextPage) {
        nextPage.classList.add("active");
    }

    // Start hearts when reaching final page
    if (pageNumber === 5) {
        startHeartAnimation();
    }
}


/* =========================================
   PAGE 1 — NO BUTTON
========================================= */

function sayNo() {

    noCount++;

    const teddy = document.getElementById("teddy");
    const question = document.getElementById("question");
    const reaction = document.getElementById("reaction");
    const yesButton = document.getElementById("yesBtn");
    const noButton = document.getElementById("noBtn");


    // Make teddy sad
    teddy.classList.add("sad");


    /* -----------------------------------------
       Change messages depending on NO count
    ----------------------------------------- */

    if (noCount === 1) {

        question.innerHTML =
            "Why tap on no? 🥺<br>Try again...";

        reaction.innerHTML =
            "The teddy is already sad 💔";

    }

    else if (noCount === 2) {

        question.innerHTML =
            "Umm... that was the wrong button 👀";

        reaction.innerHTML =
            "Maybe try YES this time? 💜";

    }

    else if (noCount === 3) {

        question.innerHTML =
            "Are you REALLY saying no? 😭";

        reaction.innerHTML =
            "I'm giving you another chance...";

    }

    else if (noCount === 4) {

        question.innerHTML =
            "Okay... I see how it is. 🥲";

        reaction.innerHTML =
            "The YES button is getting bigger btw 👀";

    }

    else if (noCount === 5) {

        question.innerHTML =
            "PLEASE JUST SAY YES 😭💜";

        reaction.innerHTML =
            "Why are we doing this...";

    }

    else {

        question.innerHTML =
            "THERE IS ONLY ONE CORRECT ANSWER NOW 😭";

        reaction.innerHTML =
            "The YES button has had enough.";

    }


    /* -----------------------------------------
       YES button grows every time NO is clicked
    ----------------------------------------- */

    let newScale = 1 + (noCount * 0.25);

    // Prevent it from becoming ridiculously huge
    newScale = Math.min(newScale, 3.5);

    yesButton.style.transform = `scale(${newScale})`;


    /* -----------------------------------------
       Make NO button slightly smaller
    ----------------------------------------- */

    let noScale = Math.max(1 - (noCount * 0.08), 0.55);

    noButton.style.transform = `scale(${noScale})`;


    /* -----------------------------------------
       After several NO clicks, move the NO button
    ----------------------------------------- */

    if (noCount >= 4) {

        const randomX =
            Math.floor(Math.random() * 120) - 60;

        const randomY =
            Math.floor(Math.random() * 80) - 40;

        noButton.style.transform =
            `translate(${randomX}px, ${randomY}px) scale(${noScale})`;
    }
}


/* =========================================
   PAGE 1 — YES BUTTON
========================================= */

function sayYes() {

    const teddy = document.getElementById("teddy");
    const question = document.getElementById("question");
    const reaction = document.getElementById("reaction");

    // Make teddy happy again
    teddy.classList.remove("sad");

    question.innerHTML =
        "I KNEW YOU'D SAY YES! 💜";

    reaction.innerHTML =
        "Okay... let's go ✨";

    // Small delay before transition
    setTimeout(() => {
        goToPage(2);
    }, 1000);
}


/* =========================================
   PAGE 3 — GIFT SYSTEM
========================================= */

function openGift(giftNumber) {

    // Prevent choosing another gift
    if (giftChosen) {
        return;
    }

    giftChosen = true;


    const gift1 = document.getElementById("gift1");
    const gift2 = document.getElementById("gift2");
    const gift3 = document.getElementById("gift3");

    const selectedGift =
        document.getElementById("gift" + giftNumber);


    /* -----------------------------------------
       Lock every gift
    ----------------------------------------- */

    [gift1, gift2, gift3].forEach(gift => {

        gift.classList.add("locked");

    });


    // Highlight selected gift
    selectedGift.classList.remove("locked");
    selectedGift.classList.add("selected");


    /* -----------------------------------------
       Gift information
    ----------------------------------------- */

    const resultEmoji =
        document.getElementById("giftResultEmoji");

    const resultTitle =
        document.getElementById("giftResultTitle");

    const resultText =
        document.getElementById("giftResultText");


    if (giftNumber === 1) {

        resultEmoji.innerHTML = "💜🎁";

        resultTitle.innerHTML =
            "You got 3 wishes!";

        resultText.innerHTML =
            "Yayyy! You have three wishes now. " +
            "Ask for anything you want... " +
            "but choose them wisely hehe 👀💜";

    }


    else if (giftNumber === 2) {

        resultEmoji.innerHTML = "💋💙";

        resultTitle.innerHTML =
            "Unlimited Kisses!";

        resultText.innerHTML =
            "Yep... unlimited. Through VM hehe. " +
            "Don't blame me if you run out of storage 😂💜";

    }


    else if (giftNumber === 3) {

        resultEmoji.innerHTML = "✨💌";

        resultTitle.innerHTML =
            "One Special Request!";

        resultText.innerHTML =
            "You unlocked your special request. " +
            "Ask me for one thing... " +
            "and I'll try my best to make it happen. 💙";

    }


    /* -----------------------------------------
       Show result
    ----------------------------------------- */

    const result =
        document.getElementById("giftResult");

    result.classList.add("show");

}


/* =========================================
   PAGE 4 — LETTER
========================================= */

function openLetter() {

    const envelope =
        document.getElementById("envelope");

    const letter =
        document.getElementById("letter");

    const envelopeText =
        document.getElementById("envelopeText");


    // Open envelope animation
    envelope.classList.add("open");


    // Change text
    envelopeText.innerHTML =
        "For you 💜";


    // Give animation time before showing letter
    setTimeout(() => {

        envelope.style.display = "none";

        envelopeText.style.display = "none";

        letter.classList.add("show");

    }, 700);

}


/* =========================================
   PAGE 5 — FLOATING HEARTS
========================================= */

function startHeartAnimation() {

    const container =
        document.getElementById("heartContainer");


    // Clear old hearts
    container.innerHTML = "";


    // Create hearts continuously
    setInterval(() => {

        createHeart();

    }, 350);

}


/* =========================================
   CREATE ONE HEART
========================================= */

function createHeart() {

    const container =
        document.getElementById("heartContainer");

    const heart =
        document.createElement("div");


    heart.classList.add("floating-heart");


    // Different heart symbols
    const hearts = [
        "💜",
        "💙",
        "💗",
        "✨",
        "♡"
    ];


    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];


    // Random horizontal position
    heart.style.left =
        Math.random() * 100 + "%";


    // Random size
    const size =
        Math.random() * 20 + 15;

    heart.style.fontSize =
        size + "px";


    // Random animation duration
    const duration =
        Math.random() * 4 + 4;

    heart.style.animationDuration =
        duration + "s";


    container.appendChild(heart);


    // Remove after animation
    setTimeout(() => {

        heart.remove();

    }, duration * 1000);

}
