const btn1 = document.querySelector(".ggdropbtn");
const btn2 = document.querySelector(".mycsgobtn");
const btn3 = document.querySelector(".wondercasebtn");

btn1.addEventListener("click", () => {
    function openPage() {
        window.location.href = 'https://ggdrop.live/user/4556949';
    };
    openPage()
});

btn2.addEventListener("click", () => {
    function openPage() {
        window.location.href = 'https://mycsgo.shop/user/5856685';
    };
    openPage()
});

btn3.addEventListener("click", () => {
    function openPage() {
        window.location.href = 'https://wondercase.live/Profile';
    };
    openPage()
});

function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();