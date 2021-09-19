// update the time // 
let toDoItems = [];

    




function updateTime(){
    let time = new Date();
    strTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    timeStamp.innerHTML = "stored at " + strTime;
}

function createForm() 
{
    let parentNode = document.getElementById("reminders");
    let node = document.createElement("div");
    let button = document.createElement("button");
    button.innerHTML = "remove";
    // remove button// 
    let item = document.createElement("input");
    node.appendChild(item);
    node.appendChild(button);
    parentNode.appendChild(node);   
    button.addEventListener("click", remove);
}


function remove() {
    this.parentElement.remove();
} 


function storeItems()
{
    let reminders = document.getElementById("reminders");
    let length = reminders.getElementsByTagName("div").length;

    let arrayReminders = [];
    for(let i = 0; i<length; i++)
    {
        let text = reminders.getElementsByTagName("input")[i].value
        arrayReminders.push(text);

    }
    toDoItems = arrayReminders;
    updateTime();
    storeLocalStorage(arrayReminders);
    setTimeout(storeItems,2000);
} 

function storeLocalStorage(array)
{
    localStorage.setItem("reminders", JSON.stringify(array));
}


function initialize()
{
   createForm(); 
   document.getElementById("add").addEventListener("click", createForm);

}





//
localStorage.clear();
initialize();
storeItems();
// testing if updateTime works
// updateTime();
