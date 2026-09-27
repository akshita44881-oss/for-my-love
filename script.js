/* =========================================
   VARIABLES
========================================= */

let noCount = 0;
let giftChosen = false;
let heartInterval = null;


/* =========================================
   PAGE NAVIGATION
========================================= */

function goToPage(pageNumber) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    let target;

    if (pageNumber === 4) {
        target = document.getElementById("page4");
    } else {
        target = document.getElementById("page" + pageNumber);
    }

    if (target) {
        target.classList.add("active");
    }

    if (pageNumber === 5) {
        startHeartAnimation();
    }
}


/* =========================================
   NO BUTTON
========================================= */

function sayNo() {

    noCount++;

    const teddy = document.getElementById("teddy");
    const question = document.getElementById("question");
    const reaction = document.getElementById("reaction");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    teddy.classList.add("sad");

    if (noCount === 1) {

        question.innerHTML = "Are you sure? 🥺";
        reaction.innerHTML = "The teddy is getting sad... 💔";

    } else if (noCount === 2) {

        question.innerHTML = "Really?? 😭";
        reaction.innerHTML = "Think again... please? 🥺💜";

    } else if (noCount === 3) {

        question.innerHTML = "You REALLY said no? 😭";
        reaction.innerHTML = "Okay but... look at the teddy 🥺";

    } else if (noCount === 4) {

        question.innerHTML = "Come onnnnn 😭💜";
        reaction.innerHTML =
            "The YES button is looking pretty good right now... 👀";

    } else {

        question.innerHTML = "Okay okay... just press YES 😭💜";
        reaction.innerHTML =
            "I'll stop bothering you after this... maybe 👀";
    }

    let yesScale = 1 + (noCount * 0.25);

    if (yesScale > 3.5) {
        yesScale = 3.5;
    }

    yesBtn.style.transform = `scale(${yesScale})`;

    if (noCount >= 3) {

        let noScale = 1 - ((noCount - 2) * 0.12);

        if (noScale < 0.45) {
            noScale = 0.45;
        }

        noBtn.style.transform = `scale(${noScale})`;
    }
}


/* =========================================
   YES BUTTON
========================================= */

function sayYes() {

    const teddy = document.getElementById("teddy");
    const question = document.getElementById("question");
    const reaction = document.getElementById("reaction");

    teddy.classList.remove("sad");

    question.innerHTML = "YAYYYYY!! 💜";
    reaction.innerHTML = "I knew you'd say yes hehe 🥰";

    setTimeout(function () {
        goToPage(2);
    }, 1000);
}


/* =========================================
   GIFT SYSTEM
========================================= */

function openGift(giftNumber) {

    /* Stop if a gift has already been selected */

    if (giftChosen) {
        return;
    }

    giftChosen = true;


    /* Get all gifts */

    const gifts = document.querySelectorAll(".gift");


    /* Lock all gifts */

    gifts.forEach(function (gift) {
        gift.classList.add("locked");
    });


    /* Select the gift that was clicked */

    const selectedGift =
        document.getElementById("gift" + giftNumber);

    if (selectedGift) {
        selectedGift.classList.add("selected");
    }


    /* Get reveal elements */

    const revealEmoji =
        document.getElementById("revealEmoji");

    const revealTitle =
        document.getElementById("revealTitle");

    const revealText =
        document.getElementById("revealText");


    /* Gift 1 */

    if (giftNumber === 1) {

        revealEmoji.innerHTML = "✨";

        revealTitle.innerHTML = "3 WISHES";

        revealText.innerHTML =
            "Yayyy! You got three wishes. Ask for anything you want... and I'll try my best to make them happen. 💜";
    }


    /* Gift 2 */

    if (giftNumber === 2) {

        revealEmoji.innerHTML = "💋";

        revealTitle.innerHTML = "UNLIMITED KISSES";

        revealText.innerHTML =
            "Yep... unlimited kisses. Through VM hehe. 💋💜";
    }


    /* Gift 3 */

    if (giftNumber === 3) {

        revealEmoji.innerHTML = "💙";

        revealTitle.innerHTML = "ONE SPECIAL REQUEST";

        revealText.innerHTML =
            "You unlocked your special request. Ask me for one thing... and I'll try my best to make it happen. 💙";
    }


    /* =====================================
       SHOW REVEAL PAGE
    ===================================== */

    const giftPage =
        document.getElementById("page3");

    const revealPage =
        document.getElementById("giftReveal");


    /* Hide gift page */

    if (giftPage) {
        giftPage.classList.remove("active");
    }


    /* Show reveal page */

    if (revealPage) {
        revealPage.classList.add("active");
    }
}


/* =========================================
   LETTER
========================================= */

function openLetter() {

    const envelope =
        document.getElementById("envelope");

    const envelopeText =
        document.getElementById("envelopeText");

    const letter =
        document.getElementById("letter");


    envelope.classList.add("open");

    envelopeText.innerHTML =
        "Opening your letter... 💜";


    setTimeout(function () {

        envelope.style.display = "none";

        envelopeText.style.display = "none";

        letter.classList.add("show");

    }, 700);
}


/* =========================================
   FLOATING HEARTS
========================================= */

function startHeartAnimation() {

    if (heartInterval !== null) {
        return;
    }

    heartInterval = setInterval(function () {
        createHeart();
    }, 500);
}


/* =========================================
   CREATE HEART
========================================= */

function createHeart() {

    const container =
        document.getElementById("heartContainer");

    if (!container) {
        return;
    }

    const heart =
        document.createElement("div");

    heart.classList.add("floating-heart");


    const symbols = [
        "💜",
        "💙",
        "💗",
        "✨",
        "♡"
    ];


    heart.innerHTML =
        symbols[Math.floor(Math.random() * symbols.length)];


    heart.style.left =
        Math.random() * 100 + "%";


    const size =
        18 + Math.random() * 30;

    heart.style.fontSize =
        size + "px";


    const duration =
        4 + Math.random() * 4;

    heart.style.animationDuration =
        duration + "s";


    container.appendChild(heart);


    setTimeout(function () {
        heart.remove();
    }, duration * 1000);
}
