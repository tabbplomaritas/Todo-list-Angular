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
}


//getter syntax = no empty array
angular
  .module("todoModule")
  .controller("TodoCtrl", TodoCtrl) // takes 2 params, always, everytime for the rest of your life

