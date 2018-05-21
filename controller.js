"use strict";
function TodoCtrl(){
  console.log("controller working");
  
  const vm = this; //vm short for view model
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

    vm.newTodo = {
      task: input,
      completed: false
    }

    vm.list.push(vm.newTodo);
    vm.input = "";
    console.log(vm.newTodo);
    
  }

  vm.deleteItem = function($index, item) {
    console.log($index, item);
    vm.list.splice($index, 1);
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

