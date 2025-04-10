const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
const buyButton = document.getElementById("btn-buy");
const buttonSwitch = document.getElementById("slider");


const translations = {
    en: {
        "woman-en": "WOMAN",
        "man-en": "MAN",
        "all-en": "ALL",
        "add-en": "The popularity of Jordan 1s haven’t changed since their release in 1984. The classic silhouette has been seen in countless colorways over the years. Sneakerheads in their teens and twenties also love to wear Air Jordan 1s, in their eyes the original AJ1s are already part of sneaker history. This is proof of being truely iconic, isn’t it?",
        "size-en-one": "SKU: 554724-073 EU40.5-EU47",
        "size-en-two": "SKU: 554725-073 (GS) EU36-EU40",
        "size-en-thr": "Release date: October 2020",
        "white-color-en": "White",
        "black-color-en": "Black",
        "btn-buy": "BUY",
    },
    ua: {
        "woman-en": "ЖІНКИ",
        "man-en": "ЧОЛОВІКИ",
        "all-en": "ВСІ",
        "add-en": "Популярність Jordan 1s не змінилася з моменту їх випуску в 1984 році. Протягом багатьох років класичний силует можна було побачити в незліченних кольорах. Снікерхеди також люблять носити Air Jordan 1s, на їхню думку, оригінальні кросівки AJ1 вже є частиною історії кросівок. Це доказ того, що він справді культовий, чи не так?",
        "size-en-one": "SKU: 554724-073 EU40.5-EU47",
        "size-en-two": "SKU: 554725-073 (GS) EU36-EU40",
        "size-en-thr": "Дата релізу: Жовтень 2020",
        "white-color-en": "Білий",
        "black-color-en": "Чорний",
        "btn-buy": "Купити",
    }
};

function updateBuyButtonTheme() {
    if (body.classList.contains("dark-theme")) {
        buyButton.style.backgroundColor = "white";
        buyButton.style.color = "black";
    } else {
        buyButton.style.backgroundColor = "black";
        buyButton.style.color = "white";
    }
}
function updateButtonSwitchTheme() {
    if (body.classList.contains("dark-theme")) {
        buttonSwitch.style.backgroundColor = "white";
        buttonSwitch.style.color = "black";
    } else {
        buttonSwitch.style.backgroundColor = "black";
        buttonSwitch.style.color = "white";
    }
}

function updateSwitchTheme() {
    if (body.classList.contains("dark-theme")) {
        slider.style.color = "white";
    } else {
        slider.style.color = "black";
    }
}

function changeLanguage(lang){
    if(!translations[lang]) return;

    Object.keys(translations[lang]).forEach(id => {
        let element = document.getElementById(id);
        if (element) {
            element.textContent = translations[lang][id];
        }
    });

    localStorage.setItem("selectedLanguage", lang);
}

document.getElementById("en-link").addEventListener("click", () => changeLanguage("en"));
document.getElementById("ua-link").addEventListener("click", () => changeLanguage("ua"));

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("selectedLanguage") || "en";
    changeLanguage(savedLang);
})

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
    toggleButton.checked = true;
    buttonSwitch.checked = true;
    
} else {
    body.classList.add("light-theme");
    toggleButton.checked = false;
    buttonSwitch.checked = false;
}

updateBuyButtonTheme();
updateButtonSwitchTheme();
updateSwitchTheme();

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");
    
    const currentTheme = body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);

    buttonSwitch.checked = body.classList.contains("dark-theme");
    
    updateBuyButtonTheme();
    updateButtonSwitchTheme();
    updateSwitchTheme();
});

document.addEventListener("DOMContentLoaded", () => {
    const enLink = document.getElementById("en-link");
    const uaLink = document.getElementById("ua-link");

    function changeLanguage(lang) {
        if (!translations[lang]) return;

        Object.keys(translations[lang]).forEach(id => {
            let element = document.getElementById(id);
            if (element) {
                element.textContent = translations[lang][id];
            }
        });

        localStorage.setItem("selectedLanguage", lang);

        if (lang === "en") {
            enLink.classList.add("active");
            uaLink.classList.remove("active");
        } else {
            uaLink.classList.add("active");
            enLink.classList.remove("active");
        }
    }

    enLink.addEventListener("click", () => changeLanguage("en"));
    uaLink.addEventListener("click", () => changeLanguage("ua"));

    const savedLang = localStorage.getItem("selectedLanguage") || "en";
    changeLanguage(savedLang);

});

document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "images/sneakers1.png",
        "images/sneakers2.png",
        "images/sneakers3.png",
        "images/sneakers4.png",
        "images/sneakers5.png",
        "images/sneakers6.png",
    ];

    const titles = [
        "AIR JORDAN 1 MID LIGHT SMOKE GREY",
        "AIR JORDAN 1 MID ISLAND GREEN",
        "AIR JORDAN 1 MID GS 'CHICAGO 2020",
        "AIR JORDAN 1 ZOOM CMFT STADIUM GREEN",
        "AIR JORDAN 1 RETRO HIGH OG ROYAL TOE",
        "AIR JORDAN 1 RETRO HIGH OG ROYAL TOE",
    ];

    const descriptions = [
        "The popularity of Jordan 1s haven’t changed since their release in 1984. The classic silhouette has been seen in countless colorways over the years. Sneakerheads in their teens and twenties also love to wear Air Jordan 1s, in their eyes the original AJ1s are already part of sneaker history. This is proof of being truely iconic, isn’t it?",
        "The first Air Jordan 1 colorway was introduced in 1984 and the success of the silhouette is unbroken. Countless colorways and collaborations have been released since then, many of them have become true icons. AJ1s are undoubtedly one of the most popular sneakers for sneakerheads today.",
        "The first Air Jordan 1 colorway was introduced in 1984 and the success of the silhouette is unbroken. Countless colorways and collaborations have been released since then, many of them have become true icons. AJ1s are undoubtedly one of the most popular sneakers for sneakerheads today.",
        "The first Air Jordan 1 colorway was introduced in 1984 and the success of the silhouette is unbroken. Countless colorways and collaborations have been released since then, many of them have become true icons. AJ1s are undoubtedly one of the most popular sneakers for sneakerheads today.",
        "The collaboration between Michael Jordan and Nike has a successful history amounting to almost four decades. More than thirty-four generations of Jordan sneakers have already been released, but the “One” has a special place in the heart of sneaker fans. Endless number of colorways have already been released, so everybody can find his/her favourite Air Jordan 1s.",
        "The popularity of Jordan 1s haven’t changed since their release in 1984. The classic silhouette has been seen in countless colorways over the years. Sneakerheads in their teens and twenties also love to wear Air Jordan 1s, in their eyes the original AJ1s are already part of sneaker history. This is proof of being truely iconic, isn’t it?",
    ];  

    const sizesOne = [
        "SKU: 554724-073 EU40.5-EU47",
        "SKU: 554724-132 EU40.5-EU47",
        "SKU: 554724-173 EU40.5-EU47",
        "SKU: CT0979-300",
        "SKU: 555088-041 EU40.5-EU47",
        "SKU: 554724-073 EU40.5-EU47",

    ];

    const sizesTwo = [
        "SKU: 554725-073 (GS) EU36-EU40",
        "SKU: 554725-132 (GS) EU35.5-EU40",
        "SKU: 554725-173 (GS) EU36-EU40",
        " ",
        "SKU: 575441-041 (GS) EU36-EU40",
        "SKU: 554725-073 (GS) EU36-EU40",

    ];

    const releaseDates = [
        "Release date: October 2020",
        "Release date: June 2021",
        "Release date: July 2020",
        "Release date: April 2021",
        "Release date: May 2020",
        "Release date: October 2020",
    ];

    const currentImg = document.querySelector(".current-img");
    const titleElement = document.getElementById("description-add-en");
    const descElement = document.getElementById("add-en");
    const sizeOneElement = document.getElementById("size-en-one");
    const sizeTwoElement = document.getElementById("size-en-two");
    const releaseElement = document.getElementById("size-en-thr");

    const upBtns = document.querySelectorAll(".go-up");
    const downBtns = document.querySelectorAll(".go-down");
    const body = document.body;

    let index = parseInt(localStorage.getItem("selectedSneakerIndex")) || 0;

    function updateContent(nextIndex) {
        currentImg.classList.add("fade-out");

        setTimeout(() => {
            index = (nextIndex + images.length) % images.length;
            currentImg.src = images[index];
            titleElement.innerText = titles[index];
            descElement.innerText = descriptions[index];
            sizeOneElement.innerText = sizesOne[index];
            sizeTwoElement.innerText = sizesTwo[index];
            releaseElement.innerText = releaseDates[index];

            localStorage.setItem("selectedSneakerIndex", index);

            currentImg.classList.remove("fade-out");
        }, 200);
    }

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-theme");
        document.querySelector(".white-text").style.display = "none";
        document.querySelector(".black-text").style.display = "block";
    } else {
        body.classList.add("light-theme");
        document.querySelector(".black-text").style.display = "none";
        document.querySelector(".white-text").style.display = "block";
    }

    upBtns.forEach(btn => btn.addEventListener("click", () => updateContent(index - 1)));
    downBtns.forEach(btn => btn.addEventListener("click", () => updateContent(index + 1)));

    currentImg.src = images[index];
    titleElement.innerText = titles[index];
    descElement.innerText = descriptions[index];
    sizeOneElement.innerText = sizesOne[index];
    sizeTwoElement.innerText = sizesTwo[index];
    releaseElement.innerText = releaseDates[index];
});
