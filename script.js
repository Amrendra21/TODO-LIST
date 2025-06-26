list = [];
window.onload = function () {
  const savedList = localStorage.getItem("todoList");
  if (savedList.length!=0) {
    list = JSON.parse(savedList);
    display();
  }
};
function addTask(){
    let input = document.querySelector(".task")
    let value = input.value

    if(value==""){
        alert("Please enter some task!")
        return;
    }

    list.push(value)
    localStorage.setItem("todoList", JSON.stringify(list));
    input.value=""
    display();
}

function deleteTask(index){
    list.splice(index,1);
    localStorage.setItem("todoList", JSON.stringify(list));
    display();
}

function display(){
    let listStr="";
    for(let i=0; i<list.length; i++){
        listStr += `<li>${list[i]}<button class="deleteTask" onclick="deleteTask(${i})"><i class="ri-delete-bin-line"></i></button></li>`
    }

    const taskList = document.getElementById("taskList")
    taskList.innerHTML = listStr;
}
