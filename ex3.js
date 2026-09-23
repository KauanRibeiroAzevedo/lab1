let Tasks = ["work","gym","sleep"];
//Array of Strings
let addTask = (task)=>{
    Tasks.push(task);
    console.log(task + " has been added to my Tasks.");
    return Tasks.length;
}

let ListAllTasks=()=>{
    Tasks.forEach((element)=> {
        console.log(element);
    })
}

let deleteTask = (task)=>{
    let index = Tasks.indexOf(task);
    if(index > -1){
    Tasks.splice(index,1);
    console.log(task + " has been removed from my Tasks.");
    }else{
        console.log(task + " is not in my Tasks.");
    }
    return Tasks.length;
}

addTask("Sleep");
ListAllTasks();
deleteTask("sleep");
