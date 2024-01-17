document.querySelector(".btn").onclick = function () {
  if (document.querySelector(".input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector(".tasks").innerHTML += `<div class="task">
                <span class="taskname">${
                  document.querySelector(".input").value
                }</span>
                <button class="delete"><img src="./free-icon-delete-4974628.png" class="img"></button>
    </div>`;

    let currentTask = document.querySelectorAll(".delete");
    for (let i = 0; i < currentTask.length; i++) {
      currentTask[i].onclick = function () {
        this.closest(".task").remove();
      };
    }
    let tasks = document.querySelectorAll(".task");
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("complete");
      };
    }
    if (document.querySelector(".input").value.length > 0) {
      document.querySelector(".input").value = "";
    }
  }
};
