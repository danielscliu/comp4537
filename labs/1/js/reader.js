

function updateReminders()
{
    let reminders = localStorage.getItem("reminders");
    reminders = JSON.parse(reminders);

    if (reminders.length != null)
    {
    createReminders(reminders);
    }
    setTimeout(updateReminders, 2000);
    updateTime();


}

function updateTime(){
    let time = new Date();
    strTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    timeStamp.innerHTML = "updated at " + strTime;
    }


function createReminders(reminders)
{
    let parentNode = document.getElementById("reminders");
    
    while(parentNode.firstChild){
        parentNode.removeChild(parentNode.firstChild);
        }

    for(let i = 0; i<reminders.length; i++)
    {
        let node = document.createElement("div");
        node.innerHTML = reminders[i];
        parentNode.appendChild(node);
    }


} 

updateReminders();


