const days = {
    "0": "Sunday",
    "1": "monday",
    "2": "tuesday",
    "3": "wednesday",
    "4": "thursday",
    "5": "friday",
    "6": "saturday",
}

const months = {
    "0": 'January',
    "1": 'February',
    "2": 'March',
    "3": 'April',
    "4": 'May',
    "5": 'June',
    "6": 'July',
    "7": 'August',
    "8": 'September',
    "9": 'October',
    "10": 'November',
    "11": 'December'
};

const light = {
    "--primary": "rgb(235, 235, 235)",
    "--secondary": "white",
    "--primaryText": "black",
    "--shadow": "rgb(200, 200, 200)",
    "--settingOutline": "rgb(200, 200, 200)",
    "--checkBoxOn": "rgb(0, 200, 255)",
}

const dark = {
    "--primary": "rgb(35, 35, 35)",
    "--secondary": "black",
    "--primaryText": "rgb(210, 210, 210)",
    "--shadow": "rgb(35, 35, 35)",
    "--settingOutline": "rgb(210, 210, 210)",
    "--checkBoxOn": "rgb(0, 130, 165)",
}

theme = localStorage.getItem("themes")
showSeconds = localStorage.getItem("showSeconds")

if (showSeconds == null) {
    localStorage.setItem("showSeconds", "true")
}
if (theme == null) {
    localStorage.setItem("themes", "light")
}
if (theme == "dark") {
    document.getElementById("dark").classList.remove("d-none")
    document.getElementById("light").classList.add("d-none")
    for (i in dark) {
        document.documentElement.style.setProperty(i, dark[i]);
    }
}
if (theme == "light") {
    for (i in light) {
        document.documentElement.style.setProperty(i, light[i]);
    }
}


//   document.getElementById("time").innerText = `${Date().split(" ")[4].split(":")[0]-12}:${Date().split(" ")[4].split(":")[1]}:${Date().split(" ")[4].split(":")[2]}` 12hr


document.getElementById("time").innerText = `${Date().split(" ")[4]}`
document.getElementById("day").innerText = days[new Date().getDay()]
document.getElementById("date").innerText = `${new Date().getDate()} ${months[new Date().getMonth()]},${new Date().getFullYear()}`

setInterval(() => {
    document.getElementById("time").innerText = `${time()}`
}, 1000);

function time() {
    if (showSeconds == "true") {
        return Date().split(" ")[4]
    }
    else if (showSeconds == "false") {
        return Date().split(" ")[4].slice(0, 5)
    }
}

function buttonClick(btn) {
    btn.classList.add('buttonClick')
    setTimeout(() => {
        btn.classList.remove('buttonClick')
    }, 300);
}

function checkboxToggle(box) {
    if (box.getAttribute('aria-state') == "on") {
        box.classList.remove("checkboxOn")
        box.classList.remove("checkboxAnim")
        box.classList.add("checkboxOffAnim")
        setTimeout(() => {
            box.classList.remove("checkboxOffAnim")
        }, 450);
        box.setAttribute('aria-state', "off")
    }
    else if (box.getAttribute('aria-state') == "off") {

        box.classList.add("checkboxOn")
        box.classList.add("checkboxAnim")
        setTimeout(() => {
            box.classList.remove("checkboxAnim")
        }, 450);
        box.setAttribute('aria-state', "on")
    }
}

function settingBar(activity) {
    if (activity == 'show') {
        document.getElementById("settingBar").classList.remove("d-none")
        document.getElementById("blurStuff").classList.add("blur")

    }

    if (activity == 'hide') {

        document.getElementById("settingBar").classList.add("settingBarOutAnim")
        document.getElementById("blurStuff").classList.remove("blur")

        setTimeout(() => {
            document.getElementById("settingBar").classList.remove("settingBarOutAnim")
            document.getElementById("settingBar").classList.add("d-none")

        }, 800);

    }
}

function themeSet(theme, themeStr, pressed) {
    for (i in theme) {
        document.documentElement.style.setProperty(i, theme[i]);
    }
    localStorage.setItem("themes", themeStr)
    pressed.classList.add("d-none")
    document.getElementById(themeStr).classList.remove("d-none")
}

function seconds(ele) {

    if (ele.getAttribute('aria-state') == "on") {
        console.log("on in")
        showSeconds = "true"
        localStorage.setItem("showSeconds","true")
        
    }
    else if (ele.getAttribute('aria-state') == "off") {
        showSeconds = "false"
        localStorage.setItem("showSeconds","false")
    }
}