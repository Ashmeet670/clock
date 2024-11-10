document.getElementById("time").innerText = Date().split(" ")[4]

setInterval(() => {
    document.getElementById("time").innerText = Date().split(" ")[4]

}, 1000);