const calendar = document.getElementById("calendar");
const todayBox = document.getElementById("todayBox");
const popup = document.getElementById("popup");

const today = new Date();
const currentDay = today.getDate();
const daysInMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
).getDate();

todayBox.innerText = currentDay;

for (let i = 1; i <= daysInMonth; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerText = i;

    const img = document.createElement("img");
    img.style.width = "40px";
    img.style.position = "absolute";
    img.style.bottom = "5px";
    img.style.right = "8px";

    if (i <= currentDay) {
        img.src = "unlock.png";
    } else {
        img.src = "lock.png";
    }

    box.appendChild(img);

    box.onclick = () => {
        popup.classList.add("active");
    };

    calendar.appendChild(box);
}

window.onclick = function(e) {
    if (e.target === popup) {
        popup.classList.remove("active");
    }
}

function goTo(page) {
    alert("Ke halaman " + page);
}
