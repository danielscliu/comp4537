// update the time //
let toDoItems = [];

function Note(text) {
  this.text = text;
}

function updateTime() {
  let time = new Date();
  strTime = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  timeStamp.innerHTML = "stored at " + strTime;
}

function createForm() {
  const removeButtonText = "remove";

  let parentNode = document.getElementById("reminders");
  let node = document.createElement("div");
  node.style.display = "flex";
  node.style.alignItems = "center";
  let button = document.createElement("button");
  button.style.margin = "20px";
  button.innerHTML = removeButtonText;
  // remove button//
  let item = document.createElement("textarea");
  item.setAttribute("rows", "4");
  item.setAttribute("columns", "40");
  node.appendChild(item);
  node.appendChild(button);
  parentNode.appendChild(node);
  button.addEventListener("click", remove);
}

function remove() {
  this.parentElement.remove();
}

function storeItems() {
  let reminders = document.getElementById("reminders");
  let length = reminders.getElementsByTagName("div").length;

  let arrayReminders = [];
  for (let i = 0; i < length; i++) {
    let text = reminders.getElementsByTagName("textarea")[i].value;
    arrayReminders.push(new Note(text));
  }
  toDoItems = arrayReminders;
  updateTime();
  storeLocalStorage(arrayReminders);
  setTimeout(storeItems, 2000);
}

function storeLocalStorage(array) {
  const msg_notSupported = "Sorry web Storage is not supported!";
  if (typeof Storage == "undefined") {
    document.write(msg_notSupported);
    window.stop();
  }
  localStorage.setItem("reminders", JSON.stringify(array));
}

function initialize() {
  createForm();
  document.getElementById("add").addEventListener("click", createForm);
}

function goBackHome() {
  location.href = "index.html";
}

//
localStorage.clear();
initialize();
storeItems();
// testing if updateTime works
// updateTime();
