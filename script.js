function goPage2() {
    window.location.href = "page2.html";
}

let scale = 1;

let texts = [
    "Chị có yêu em nhiều hog? 🥺",
    "Thiệt luôn đó? 😢",
    "Suy nghĩ kỹ chưa vậy 😭",
    "Bấm Có đi mà 😆",
    "Đừng bấm Không nữa mà 🥹",
    "Yêu em đi rồi biết 💖"
];

let index = 0;

function makeYesBig() {
    let yes = document.getElementById("yesBtn");
    let q = document.getElementById("question");

    // RUNG
    yes.classList.add("shake");
    setTimeout(() => {
        yes.classList.remove("shake");
    }, 400);

    // PHÓNG TO
    scale += 0.6;
    yes.style.transform = `scale(${scale})`;

    index++;
    if (index >= texts.length) {
        index = texts.length - 1; 
    }

    q.innerText = texts[index];
}


function showReason() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}



if (document.getElementById("petals")) {
    setInterval(() => {
        let petal = document.createElement("div");
        petal.className = "fall";
        petal.innerHTML = "🌸";
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = (3 + Math.random()*2) + "s";
        document.getElementById("petals").appendChild(petal);


        setTimeout(()=>petal.remove(),5000);
    }, 150);
}

if (document.getElementById("hearts")) {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.className = "fall";
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (3 + Math.random()*2) + "s";
        document.getElementById("hearts").appendChild(heart);


        setTimeout(()=>heart.remove(),5000);
    }, 150);
}

