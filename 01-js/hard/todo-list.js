/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todos = [];
  }
  add(todo){
    this.todos.push(todo);
  }
  remove(indexOfTodo){
    this.todos.splice(indexOfTodo, 1);
  }
  update(index, updatedTodo){
    this.todos[index] = updatedTodo;
  }
  getAll(){
    return this.todos;
  }
  get(indexOfTodo){
    return this.todos[indexOfTodo];
  }
  clear(){
    this.todos = [];
  }
}

let todo = new Todo();
todo.add("Buy groceries");
todo.add("Do laundry");
todo.add("Clean room");
console.log(todo.getAll()); // ["Buy groceries", "Do laundry", "Clean room"]
todo.remove(1);
console.log(todo.getAll()); // ["Buy groceries", "Clean room"]
todo.update(1, "Do laundry");
console.log(todo.get(1)); // "Do laundry"
console.log(todo.getAll()); // ["Buy groceries", "Do laundry"]
todo.update(0, "Buy milk");
console.log(todo.getAll()); // ["Buy milk", "Do laundry"]
todo.clear();
console.log(todo.getAll()); // []
module.exports = Todo;
