function updateReminders() {
  const msg_notSupported = "Sorry web Storage is not supported!";
  if (typeof Storage == "undefined") {
    document.write(msg_notSupported);
    window.stop();
  }

  let reminders = localStorage.getItem("reminders");
  reminders = JSON.parse(reminders);

  if (reminders.length != null) {
    createReminders(reminders);
  }
  setTimeout(updateReminders, 2000);
  updateTime();
}

function updateTime() {
  let time = new Date();
  strTime = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  timeStamp.innerHTML = "updated at " + strTime;
}

function createReminders(reminders) {
  let parentNode = document.getElementById("reminders");

  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
  }

  for (let i = 0; i < reminders.length; i++) {
    let node = document.createElement("div");
    console.log(reminders[i]);
    node.innerHTML = reminders[i].text;
    parentNode.appendChild(node);
  }
}

function goBackHome() {
  location.href = "index.html";
}

updateReminders();
