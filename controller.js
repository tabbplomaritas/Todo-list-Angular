"use strict";
function TodoCtrl(){
  console.log("controller working");
  
  const vm = this; //vm short for view model
  //this array contains the list of tasks, each of which are objects containing values for the task itself as a string, as well as a boolean for completed. Every newly added item defaults to completed:false
  vm.list = [
      {
        task: "Walk the dog",
        completed: false
      },
      {
        task: "Wash the dishes",
        completed: false
      },
      {
        task: "Workout",
        completed: true
      },
      {
        task: "Organize my books",
        completed: true
      },
      {
        task: "Call Grandma",
        completed: false
      }
  ]

  vm.addItem = function(input) {
    //set up a new object using the arguments passed in from the view
    vm.newTodo = {
      task: input,
      completed: false
    }
    //push that new object into the list of todos array
    vm.list.push(vm.newTodo);
    //reset the value on the input field
    vm.input = "";
  }

  vm.deleteItem = function(item) {
    console.log(`item name is: ${item.task}`);
    let index = vm.list.indexOf(item);
    console.log(`the index is ${index}`);
    vm.list.splice(index, 1);
    
  }

  vm.completeItem = function($index, item){
    console.log("complete button working");
    item.completed = true;
  }



}


//getter syntax = no empty array
angular
  .module("todoModule")
  .controller("TodoCtrl", TodoCtrl) // takes 2 params, always, everytime for the rest of your life

