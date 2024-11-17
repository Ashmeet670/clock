const days = {
    "0":"Sunday",
    "1":"monday",
    "2":"tuesday",
    "3":"wednesday",
    "4":"thursday",
    "5":"friday",
    "6":"saturday",
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

//   document.getElementById("time").innerText = `${Date().split(" ")[4].split(":")[0]-12}:${Date().split(" ")[4].split(":")[1]}:${Date().split(" ")[4].split(":")[2]}` 12hr
  
document.getElementById("time").innerText = `${Date().split(" ")[4]}`
document.getElementById("day").innerText = days[new Date().getDay()]
document.getElementById("date").innerText = `${new Date().getDate()} ${months[new Date().getMonth()]},${new Date().getFullYear()}`

setInterval(() => {
    document.getElementById("time").innerText = `${Date().split(" ")[4]}`

}, 1000);


function buttonClick(btn) {
  btn.classList.add('buttonClick')
  setTimeout(() => {
      btn.classList.remove('buttonClick')
  }, 350);
}
