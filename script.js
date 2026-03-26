const songs = [
    "கண்ணம்மா உன்ன மனசில் நினைக்கிறேன் பார்வைபாரடி பெண்ணே",
    "அவள் குழல் உதிா்த்திடும் இலை எனை துளைத்திடும்",
    "நிஜமே நீதானே நான் தேடும் சிறு மழையே",
    "இசையும் போனது திமிரும் போனது தனிமை தீயிலே வாடினேன்",
    "தனியாக தவிக்கின்றேன் துணை வேண்டாம் அன்பே போ",
    "அவ என்ன என்ன தேடி வந்த அஞ்சல",
    "சக்கரை நிலவே பெண் நிலவே காணும் போதே",
    "கனவில் வந்த பெண்ணே நீயே நீதானோ உன்னை",
    "மை போட்ட கண்ணால கட்டி இழுத்து போறாளே",
    "கண்ணுக்குள்ள நிக்கிற என் காதலியே உன்ன விட்டா",
    "மனதோரம் ஒரு காயம் உன்னை எண்ணாத நாலில்லையே",
    "அடி ஒவ்வொரு ராப்பொழுதும் ஒன அப்படி நான்ரசிச்சேன்",
    "முதலும் ஒரு முடிவும் என் வாழ்வில் நீதானே",
    "முழுமதி அவளது முகமாகும் மல்லிகை அவளது மணமாகும்",
    "உனக்கென மட்டும் வாழும் இதயம் அடி உயிா்",
    "ஓஓ என்னவென்று சொல்வதம்மா வஞ்சி அவள் பேரழகை",
    "காலை கனவினில் காதல் கொண்டேன் கண் விழித்தேன்",
    "விழிகளிலே உன் தேடல் செவிகளிலே உன் பாடல்",
    "கண்ணால என் கண்ணோட மோதும் கண்னடி பூவே நீதானடி",
    "வானம் பார்த்து கிடந்தேனே மழையாய் வந்து விழுந்தாயே",
    "உன்னை இன்று பார்த்ததும் என்னை நானே கேட்க்கிறேன்",
    "தேனீக் காத்தோட தேனத் தெளிச்சாலே தேளாக என்",
    "அடியாத்தி இது என்ன ஃபீலு உன்னால நான் ஃபெயிலு",
    "என் மூச்சவன் பேச்சவன் பேர் சொல்லும் அழகவன்",
    "முகம் காட்டு நீ முழு வெண்பனி ஓடாதே நீ",
    "ஹேய் மல்லிப்பூ வெச்சு வெச்சு வாடுதே அந்த"
];

let remainingSongs = [...songs];
let currentSong = "";
let words = [];
let revealed = [];
let usedDice = [];

function startGame() {
    if (remainingSongs.length === 0) {
        alert("All songs completed 🎉");
        return;
    }

    let index = Math.floor(Math.random() * remainingSongs.length);
    currentSong = remainingSongs[index];
    remainingSongs.splice(index, 1);

    words = currentSong.split(" ");
    revealed = Array(words.length).fill("_");
    usedDice = [];

    document.getElementById("song").innerText = revealed.join(" ");
    document.getElementById("number").innerText = "New Song Started 🎶";
}

function rollDice() {
    if (!currentSong) {
        alert("Press Start first!");
        return;
    }

    if (usedDice.length === 6) {
        alert("All dice numbers used for this song!");
        return;
    }

    let dice;

    // Ensure no repeat
    do {
        dice = Math.floor(Math.random() * 6) + 1;
    } while (usedDice.includes(dice));

    usedDice.push(dice);

    document.getElementById("number").innerText = "🎲 Dice: " + dice;

    let index = dice - 1;

    if (index < words.length) {
        revealed[index] = words[index];
    }

    document.getElementById("song").innerText = revealed.join(" ");

    // animation
    document.getElementById("dice").style.transform =
        "rotate(" + (dice * 60) + "deg)";
}