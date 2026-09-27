let Tasks = ["work", "gym", "sleep"];
// This creates an array containing my tasks.

// addTask function
let addTask = (task) => {
    // Adds the new task to the end of the array.
    Tasks.push(task);

    // Displays a message showing that the task was added.
    console.log(task + " has been added to my Tasks.");

    // Returns the number of tasks currently in the array.
    return Tasks.length;
}


// listAllTasks function
let ListAllTasks = () => {
    // Goes through each task in the array.
    Tasks.forEach((element) => {

        // Prints each task to the console.
        console.log(element);
    })
}


// deleteTask function
let deleteTask = (task) => {

    // Finds the position of the task in the array.
    let index = Tasks.indexOf(task);

    // Checks if the task was found in the array.
    if(index > -1){

        // Removes the task from the array.
        Tasks.splice(index,1);

        // Displays a message showing that the task was removed.
        console.log(task + " has been removed from my Tasks.");

    }else{

        // Displays a message if the task was not found.
        console.log(task + " is not in my Tasks.");
    }

    // Returns the number of tasks left in the array.
    return Tasks.length;
}


// Test the addTask function.
addTask("Sleep");

// Test the listAllTasks function.
ListAllTasks();

// Test the deleteTask function.
deleteTask("sleep");
