#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
while (true) {
    let todoList = await inquirer.prompt([
        {
            name: "choices",
            type: "list",
            message: "Select an option for your Todos",
            choices: ["Add", "Delete", "View", "Exit"]
        }
    ]);
    if (todoList.choices === "Exit") {
        console.log("Exiting...");
        break;
    }
    ;
    if (todoList.choices === "Add") {
        let addTodo = await inquirer.prompt([
            {
                name: "firstQuestion",
                type: "input",
                message: "What would you like to add in your Todos?",
            },
        ]);
        todos.push(addTodo.firstQuestion);
        console.log(`\nSuccessfully Item Added \n${addTodo.firstQuestion}\n`);
    }
    if (todoList.choices === "Delete") {
        let todoDelete = await inquirer.prompt([
            {
                name: "delete",
                type: "input",
                message: "What would you like to delete:"
            }
        ]);
        todos.splice(todoDelete.delete, (1));
        console.log(`\nSuccessfully Item deleted:\n${todoDelete.delete}\n`);
    }
    if (todoList.choices === "View") {
        console.log("\nYou current Todo list", todos, "\n");
    }
}
console.log("Final output:", "\n");
for (let todo of todos) {
    console.log(todo);
}
;
