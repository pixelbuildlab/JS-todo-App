console.log("script is loaded");
let tasks = [
  "buy car",
  "make tea",
  "attend ceremony",
  "watch movie",
  "wake up",
  "have breakfast",
];
const addbutton = document.querySelector("button");
const controller = document.querySelector(".controller");
const searchTask = document.querySelector("#search-task");
const searchTaskbtn = document.querySelector("#searchtaskbtn");
const taskList = document.querySelector("ul");
const inputTask = document.querySelector("#addtaskin");
const inputTaskBtn = document.querySelector("#add-task");
const note = document.getElementById("no-task");
createTaskList();
taskList.addEventListener("click", (e) => {
  const hasClass = e.target.matches(".fa-trash-can");
  if (hasClass) {
    let currentTask = e.target.parentElement.innerText;
    currentTask = currentTask.toLowerCase();
    console.log(currentTask);
    const arrLen = tasks.length;
    console.log(arrLen);
    e.target.parentElement.remove();

    for (let index = 0; index < arrLen; index++) {
      const element = tasks[index];
      if (element === currentTask) {
        for (index; index < arrLen - 1; index++) {
          const element = tasks[index];
          const nextElement = tasks[index + 1];
          tasks[index] = nextElement;
          tasks[index + 1] = element;
        }
        console.log("removed: ", tasks[arrLen - 1]);
        tasks.pop();
        console.log(tasks);
        if (tasks.length == 0) {
          note.classList.remove("hide");
        }
        break;
      }
    }
  }
});
searchTask.addEventListener("keyup", (e) => {
  const term = e.target.value.toLowerCase().trim();
  const filtered = tasks.filter((task) => {
    if (task.includes(term)) return task;
  });
  console.log(filtered);
  for (let index = 0; index < taskList.children.length; index++) {
    console.log(taskList.children[index].innerText, term);
    if (!taskList.children[index].innerText.includes(term)) {
    
    }
  }
});
inputTaskBtn.addEventListener("click", (e) => {
  if (inputTask.value == "") {
    inputTask.setAttribute("placeholder", "Please Enter a Task");
  } else {
    note.classList.add("hide");
    addToTaskList();
  }
});
inputTask.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    console.log("enter is pressed");
    inputTaskBtn.click();
  }
});

addbutton.addEventListener("click", () => {
  console.log(controller);
  controller.classList.toggle("hide");
});
//functions

function addToTaskList() {
  console.log("i will add your task to my list");
  tasks.push(inputTask.value.toLowerCase().trim());
  console.log(inputTask.value.toLowerCase().trim());
  const newTask = document.createElement("li");
  newTask.innerHTML = ` <i class="fa-regular fa-circle-dot"></i>${inputTask.value.trim()}<i class="fa-solid fa-trash-can"></i>`;
  taskList.append(newTask);
}

function createTaskList() {
  tasks.forEach((task) => {
    const newTask = document.createElement("li");
    newTask.innerHTML = ` <i class="fa-regular fa-circle-dot"></i>${task}<i class="fa-solid fa-trash-can"></i>`;
    console.log(task);
    taskList.append(newTask);
  });
}
