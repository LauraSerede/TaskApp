console.log("script is running!")
const submit = document.getElementById("submit");
const newTask = document.getElementById("newTask");
submit.disabled = true;
newTask.addEventListener("input", () => {
    submit.disabled = newTask.value.trim() === "";
});

document.getElementById("taskForm").addEventListener("submit", (event) => {

    event.preventDefault();

    
    const task = newTask.value.trim();

    if (task !== "") {
        
        const listItem = document.createElement("li");
        listItem.textContent = task;

        
        document.getElementById("taskList").append(listItem);

        
        newTask.value = "";
        submit.disabled = true;
    }

    return false;
});
