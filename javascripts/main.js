"use strict";
console.log("main.js");
let sandwich = require('./factory.js');
console.log("This is the sandwich object", sandwich);


let finalSandwichPrice = 0;

// letiable to hold topping that the user selects
let selectedTopping;

let breadChooser = document.getElementById("bread-chooser");
breadChooser.addEventListener("click", function() {
  // Get the value chosen from the DOM

  selectedTopping = this.value;
 
  // Determine the price of the topping chosen
  if(selectedTopping==="Wheat") {
    
    let x = sandwich.addBread(selectedTopping);
    alert("You selected to add: "+selectedTopping +" Bread");
    finalSandwichPrice = sandwich.addTopping(x);
    console.log("", finalSandwichPrice);
    this.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.setAttribute("disabled",true);
    this.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.setAttribute("selected",true);  
    this.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.setAttribute("disabled",true);
      
  }
  else if (selectedTopping==="Whole-Grain") {
    let x = sandwich.addBread(selectedTopping);
    alert("You selected to add: "+selectedTopping+" Bread");
    finalSandwichPrice = sandwich.addTopping(x);
    console.log("", finalSandwichPrice);
    this.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.setAttribute("disabled",true);
    this.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.setAttribute("selected",true);
    this.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.setAttribute("disabled",true);
  }
  else {
    let x = sandwich.deletebread();
    alert("No Bread");
    finalSandwichPrice = sandwich.addTopping(x);
    console.log("", finalSandwichPrice);

  
    this.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.disabled =false;
    this.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.disabled = false;
  }
  // Add the topping to the sandwich to increase the total price
});

// Get a reference to the <select> element that has all the meat options
let meatChooser = document.getElementById("meat-chooser");

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
meatChooser.addEventListener("click", function() {
  // Get the value chosen from the DOM

  selectedTopping = this.value;
 
  // Determine the price of the topping chosen
 if(selectedTopping==="Turkey") {
 		
  	let x = sandwich.addMeat(selectedTopping);
  	alert("You selected to add: "+selectedTopping);
  	finalSandwichPrice = sandwich.addTopping(x);
  	console.log("", finalSandwichPrice);  
  		
  		
  }
  else if (selectedTopping==="Bacon") {
  	let x = sandwich.addMeat(selectedTopping);
  	alert("You selected to add:  "+selectedTopping);
  	finalSandwichPrice = sandwich.addTopping(x);
  	console.log("", finalSandwichPrice);
  }
  else if (selectedTopping==0) {
  	let x = sandwich.deleteMeat();

    alert("No Meats");
      
  	finalSandwichPrice = sandwich.addTopping(x);
  	console.log("", finalSandwichPrice);
  }
  // Add the topping to the sandwich to increase the total price
});

let vegChooser = document.getElementById("veg-chooser");
vegChooser.addEventListener("click", function() {
  // Get the value chosen from the DOM

  selectedTopping = this.value;
 
  // Determine the price of the topping chosen
  if(selectedTopping==="Lettuce") {
    
    let x = sandwich.addVeg(selectedTopping);
    alert("You selected to add: "+selectedTopping);
    finalSandwichPrice = sandwich.addTopping(x);
    console.log("", finalSandwichPrice);
      
      
  }
  else if (selectedTopping==="Tomato") {
    let x = sandwich.addVeg(selectedTopping);
    alert("You selected to add: "+selectedTopping);
    finalSandwichPrice = sandwich.addTopping(x);
    console.log("", finalSandwichPrice);
  }
  else if (selectedTopping==="Onion") {
    let x = sandwich.addVeg(selectedTopping);
    alert("You selected to add: "+selectedTopping);
    finalSandwichPrice = sandwich.addTopping(x);
    console.log("", finalSandwichPrice);
  }
  else if (selectedTopping==0) {
    let x = sandwich.deleteveg();
    alert("No Vegetables");
    
    finalSandwichPrice = sandwich.addTopping(x);
    console.log("", finalSandwichPrice);
  }
  // Add the topping to the sandwich to increase the total price
});


document.getElementById("total").addEventListener("click", ()=>{
  alert("Your total cost is: $"+finalSandwichPrice+`\n`+`For:\nBread: `+sandwich.getbread()+"\nMeats: "+sandwich.getmeat().sort()+"\nVegetables: "+sandwich.getveg().sort());
});
