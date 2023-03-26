window.addEventListener('load', ()=>{
    const form = document.querySelector('#new-task');
    const input = document.querySelector('#new-input');
    const list = document.querySelector('#tasks');

  
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let task  = input.value;
   
   
  if(!task || task==" "){
    alert("Please fill the task.");
    input.setAttribute("required","true");
    return;
  }

  
  // localStorage.setItem('task',task);
  // var myTask = localStorage.getItem('task');
  // console.log(myTask)

  const task_el = document.createElement("div");
  task_el.classList.add("task");

  const task_content = document.createElement("div");
  task_content.classList.add("content");
  

  task_el.appendChild(task_content);


  const task_input = document.createElement("input");
  task_input.classList.add("text");
  task_input.type = "text";
  task_input.value = task;
  task_input.setAttribute("readonly","readonly");
  
  task_content.appendChild(task_input);

// localStorage.setItem("task",task);
// const li = localStorage.getItem("task");
// console.log(li);

  const task_action = document.createElement("div");
  task_action.classList.add("actions");

  const task_edit = document.createElement("button");
  task_edit.classList.add("edit");
  task_edit.innerHTML = "Edit";

  const task_delete = document.createElement("button");
  task_delete.classList.add("delete");
  task_delete.innerHTML = "Delete";

  const task_pending = document.createElement("button");
  task_pending.classList.add("pending");
  task_pending.innerHTML = "Pending";


 
  task_action.appendChild(task_pending);
  task_action.appendChild(task_edit);
  task_action.appendChild(task_delete);

  task_el.appendChild(task_action);

  list.appendChild(task_el);

  input.value=" ";

  const task_date = document.createElement("div");
  let newdate = new Date();
  let edate = newdate.toLocaleDateString();
  let time = newdate.getHours() + ":" + newdate.getHours() +":" + newdate.getSeconds();
  let date = edate + " " + time;
  // console.log(date);
  task_date.innerHTML = date;

  task_action.appendChild(task_date);

task_edit.addEventListener('click',() =>{
    if(task_edit.innerText.toLowerCase() == "edit"){
        task_input.removeAttribute("readonly");
        task_input.focus();
        task_edit.innerText = "Save";
    }else{
        task_input.setAttribute("readonly","readonly");
        task_input.focus();
        task_edit.innerText = "Edit";
    }
});

task_delete.addEventListener('click',() =>{
    list.removeChild(task_el);
});


task_pending.addEventListener('click',() =>{
    if(task_pending.innerText.toLowerCase() == "pending"){
        // task_input.removeAttribute("readonly");
        // task_input.focus();
        task_pending.innerText = "Completed";
    }else{
        // task_input.setAttribute("readonly","readonly");
        // task_input.focus();
        task_pending.innerText = "Pending";
    }
});
  })
})

