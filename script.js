// Đếm ngược đến ngày hẹn
function startCountdown(targetDate) {
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            document.getElementById("timer").innerHTML = "Hôm nay là ngày đặc biệt rồi!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Đặt ngày hẹn ở đây (YYYY, MM - 1, DD)
const targetDate = new Date(2025, 1, 4, 19, 0, 0).getTime(); // Ngày 4/2/2025 19:00
startCountdown(targetDate);

// Chọn gói đi chơi
function selectPackage(packageName, imagePath) {
    document.getElementById("selectedPackage").innerText = `anh chọn gói này hả : ${packageName}`;
    const image = document.getElementById("packageImage");
    image.src = imagePath;
    image.style.display = "block";
}

// Gửi lời nhắn yêu thương
function sendMessage() {
    const message = document.getElementById("loveMessage").value;
    if (message.trim() === "") {
        alert("Vui lòng nhập lời nhắn trước khi gửi!");
        return;
    }
    document.getElementById("displayMessage").innerText = `Lời nhắn của bạn: ${message}`;
    document.getElementById("displayMessage").style.display = "block";
    alert("Lời nhắn đã được gửi thành công!");
}
