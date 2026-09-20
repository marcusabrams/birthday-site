const bear = document.querySelector("#bear-button");
const openingScreen = document.querySelector(".opening-screen");
const birthdayScreen = document.querySelector(".birthday-screen");
const surpriseButton = document.querySelector("#surprise-button");
const photoScreen = document.querySelector(".photo-screen");
const daylightSong = document.querySelector("#daylight-song");

bear.addEventListener("click", function() {
    openingScreen.style.display = "none";
    birthdayScreen.style.display = "flex";

    for (let i = 0; i < 12; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "\u2764";
    heart.style.left = Math.random() * 100 + "%";
    birthdayScreen.appendChild(heart);
    heart.style.animationDelay = Math.random() * 2 + "s";
}
});

surpriseButton.addEventListener("click", function() {
    birthdayScreen.style.display = "none";
    photoScreen.style.display = "flex";
    daylightSong.play();
});

