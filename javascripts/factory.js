"use strict";
let totalPrice = 0;
let SandwichMaker = {};

SandwichMaker.getPrice = () => totalPrice;
SandwichMaker.getbread = () => {
	return totalbread;
};
SandwichMaker.getmeat = () => {
	return totalmeats;
};
SandwichMaker.getveg = () => {
	return totalvegs;
};
SandwichMaker.addTopping = (toppingPrice) => {
	totalPrice += toppingPrice;
	return totalPrice.toFixed(2);
};


let totalbread = [];
let breadPrices=0;
let bread = {"Wheat": 1.00, "Whole-Grain": 2.00};
let totalbreadprices=0;
SandwichMaker.addBread = (a) => {
  	breadPrices = bread[a];  
    totalbreadprices+=bread[a];	
    totalbread.push(" "+a);	
    return breadPrices;
};

SandwichMaker.deletebread= () =>{
      breadPrices = -totalbreadprices;
      totalbreadprices = 0;
      totalbread=[];
      return breadPrices;
};

let totalmeats = [];
let meatPrices=0;
let totalmeatprice=0;
let meat = {"Turkey": 0.90, "Bacon": 1.50};
SandwichMaker.addMeat = (a) => {
  	meatPrices = meat[a];  	
    totalmeatprice+=meat[a];
    totalmeats.push(" "+a);	
    return meatPrices;
};

SandwichMaker.deleteMeat = () => {     
    meatPrices = -totalmeatprice;
    totalmeatprice=0;
    totalmeats=[];     
    return meatPrices;
  };

let totalvegs = [];  
let vegPrices=0;
let totalvegprice=0;
let veg = {"Lettuce": 1.00, "Tomato": 2.00, "Onion": 3.00};
SandwichMaker.addVeg = (a) => {
  	vegPrices=veg[a];
  	totalvegprice+=veg[a];
  	totalvegs.push(" "+a);
    return vegPrices;
};

SandwichMaker.deleteveg = function() {
    vegPrices = -totalvegprice;
    totalvegprice=0;   
    totalvegs=[];  
    return vegPrices;
};
module.exports = SandwichMaker;