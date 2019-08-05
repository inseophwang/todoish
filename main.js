// Global todo list.
// Put a few todos in there to start with!
// This is mostly for testing purposes.

const toDoList = ['homework', 'workout', 'clean', 'sleep'];

// Print a todo.
// For now, just console log it!
function toDo(num){
    console.log(toDoList);
}
// Print everything on our todo list, INDIVIDUALLY.
// Make SURE to use the above function!

function toDoIndividual(){
    for(let i = 0; i < toDoList.length; i++){
        console.log(toDoList[i])
    }

}

toDoIndividual()
// Add an item to our todo list.
// Where on the list should we add it?
// No wrong answer here as long as you can defend the decision!

toDoList.push('eat');

// Remove an item at a given index from our todo list.

toDoList.splice(1,1)

console.log(toDoList)