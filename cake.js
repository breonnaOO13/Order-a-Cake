//defining the elements from html in js


const vc = document.getElementById("vanillaCake");
const cc = document.getElementById("chocolateCake");
const sc = document.getElementById("strawberryCake");

const ol = document.getElementById("oneLayer");
const tl = document.getElementById("twoLayers");
const trl = document.getElementById("threeLayers");

const yf = document.getElementById("yesFrosting");
const nf = document.getElementById("noFrosting");

const r = document.getElementById("red");
const o = document.getElementById("orange");
const y = document.getElementById("yellow");
const g = document.getElementById("green");
const b = document.getElementById("blue");
const p = document.getElementById("purple");

let cakeImage = document.querySelector('#cake');

//list of all cake order images

cakeResult= ["v1.png","v2.png","v3.png","v1r.png","v2r.png","v3r.png","v1o.png","v2o.png","v3o.png","v1y.png","v2y.png","v3y.png","v1g.png","v2g.png","v3g.png","v1b.png","v2b.png","v3b.png","v1p.png","v2p.png","v3p.png","c1.png","c2.png","c3.png","c1r.png","c2r.png","c3r.png","c1o.png","c2o.png","c3o.png","c1y.png","c2y.png","c3y.png","c1g.png","c2g.png","c3g.png","c1b.png","c2b.png","c3b.png","c1p.png","c2p.png","c3p.png", "s1.png","s2.png","s3.png","s1r.png","s2r.png","s3r.png","s1o.png","s2o.png","s3o.png","s1y.png","s2y.png","s3y.png","s1g.png","s2g.png","s3g.png","s1b.png","s2b.png","s3b.png","s1p.png","s2p.png","s3p.png"];


//Defining prices for each flavor
const vanilla = 8;
const chocolate = 8;
const strawberry = 10;

const one = 3;
const two = 5;
const three = 8;

//defining final price and current price
let flavorPrice = 0;
let layersPrice = 0;
let frostingPrice = 0;

//defining the text
let flavor = document.querySelector('.flavor');
let finalPrices = document.querySelector('.finalPriceDone');

let price = document.querySelector('.price');

function updatePrice() {
  finalPrice = flavorPrice+layersPrice+frostingPrice;
  price.textContent = finalPrice;
  finalPrices.textContent = finalPrice;
}


//defining functions that will later be chnaged based on user input
let flavorDisplay = " ";
let layerDisplay = " ";
let frostingDisplay = " ";



//When clicking the vanilla cake button it will display vanilla in the Flavor description
vc.addEventListener('click', () => {
  flavor.textContent = "Vanilla";
  flavorPrice = vanilla;
  updatePrice();
  flavorDisplay = "vanilla";
  
});

//When clicking the chocolate cake button it will display chocolate in the Flavor description
cc.addEventListener('click', () => {
  flavor.textContent = "Chocolate";
  flavorPrice = chocolate;
  updatePrice();
  flavorDisplay = "choco";
});

//When clicking the vanilla cake button it will display vanilla in the Flavor description
sc.addEventListener('click', () => {
  flavor.textContent = "Strawberry";
  flavorPrice = strawberry;
  updatePrice();
  flavorDisplay = "straw";
});


//this defines the text in the layer description 
let layer = document.querySelector('.layer');

ol.addEventListener('click', () => {
  layer.textContent = "One";
  layersPrice = one;
  updatePrice();
  layerDisplay = 1;
});

tl.addEventListener('click', () => {
  layer.textContent = "Two";
  layersPrice = two;
  updatePrice();
  layerDisplay = 2;
});

trl.addEventListener('click', () => {
  layer.textContent = "Three";
  layersPrice = three;
  updatePrice();
  layerDisplay = 3;
});

//this defines the display of the frosting from html
let frostingYN = document.querySelector('.frostingYN');
let yes = document.querySelector('.yes');
let frostingYes = document.querySelector('.frostingYes');

//this variable will be later used for an if statment when deciding which cake image to display
let frost = 1;
let frosting = document.querySelector('.frosting');

//this function causes the options for the frosting color to turn to 'N/A' 
// also allows the display to become blank

//This will be used for the argument of the the function when being called somewhere else
//the value will change based on what the user chooses
let numberOfFrosting = 6;

function noFrosting(numberOfFrosting){
  frosting.textContent = " ";
  frostingDisplay = " ";
  frostingYes.textContent = "N/A No need to choose frosting color";
  for (i = 0; i < numberOfFrosting; i++){
    if (i === 0)
      r.src = "NA.png";
    if (i == 1)
      o.src = "NA.png";
    if (i == 2)
      y.src = "NA.png";
    if (i == 3)
      g.src = "NA.png";
    if (i === 4)
      b.src = "NA.png";
    if (i == 5)
      p.src = "NA.png";
    if (i === 6)
      r.src = "RedFrostBlank.png";
    if (i == 7)
      o.src = "OrangeFrostBlank.png";
    if (i == 8)
      y.src = "YellowFrostBlank.png";
    if (i == 9)
      g.src = "GreenFrostBlank.png";
    if (i === 10)
      b.src = "BlueFrostBlank.png";
    if (i == 11)
      p.src = "PurpleFrostBlank.png";
    
  }
  
}


     
      
      






//if either frosting or no frosting is chosen the price will be updated

yf.addEventListener('click', () => {
  numberOfFrosting = 12;
  frost = 1;
  frostingYN.textContent = "Yes";
  yes.textContent = "Frosting Color:";
  frostingPrice = 2;
  updatePrice();
  noFrosting(numberOfFrosting);
  frostingYes.textContent = "What Color Frosting Would You Like?";
  
});

nf.addEventListener('click', () => {
  numberOfFrosting = 6;
  frost = 0;
  frostingYN.textContent = "No";
  yes.textContent = " ";
  frosting.textContent = " ";
  frostingPrice = 0;
  updatePrice();
  noFrosting(numberOfFrosting);
 


});




//the color of the frosting will be displayed and stored in a variable to later use
//nothing will show up if the user chose 'no frosting'

r.addEventListener('click', () => {
  if (frost == 1){
    frosting.textContent = "red";
    frostingDisplay = "red";
  } else {
    //even if user tries to press color button even if they already chose 'no frosting' it will not change the display
    noFrosting(numberOfFrosting);
  }
});

o.addEventListener('click', () => {
  if (frost == 1){
    frosting.textContent = "orange";
    frostingDisplay = "orange";
  } else {
    noFrosting(numberOfFrosting);
  }
});
y.addEventListener('click', () => {
  if (frost == 1){
    frosting.textContent = "yellow";
    frostingDisplay = "yellow";
  } else {
    noFrosting(numberOfFrosting);
  }
});

g.addEventListener('click', () => {
  if (frost == 1){
    frosting.textContent = "green";
    frostingDisplay = "green";
  } else {
    noFrosting(numberOfFrosting);
  }
});
b.addEventListener('click', () => {
  if (frost == 1){
    frosting.textContent = "blue";
    frostingDisplay = "blue";
  } else {
    noFrosting(numberOfFrosting);
  }
});

p.addEventListener('click', () => {
  if (frost == 1){
    frosting.textContent = "purple";
    frostingDisplay = "purple";
  } else {
    noFrosting(numberOfFrosting);
  }
});

const placeOrder = document.getElementById("endDone");


//nested if statements to help identify which image to display at end
placeOrder.addEventListener('click', () => {
//if user chooses vanilla
  if (flavorDisplay == "vanilla"){
//if user chooses one layer
    if(layerDisplay == 1){
//vanilla, one layer, red
      if (frostingDisplay == "red"){
      //the image will become the cake with the corresponding options the user chooses
      //the image is taken from the list so that the name of image does not need to mentioned each time
        cakeImage.src = cakeResult[3];
      }
//vanilla, one layer, orange     
      if (frostingDisplay == "orange"){
        cakeImage.src = cakeResult[6];
      }
//vanilla, one layer, yellow
      if (frostingDisplay == "yellow"){
        cakeImage.src = cakeResult[9];
      }
//vanilla, one layer, green
      if (frostingDisplay == "green"){
        cakeImage.src = cakeResult[12];
      }
//vanilla, one layer,blue
      if (frostingDisplay == "blue"){
        cakeImage.src = cakeResult[15];
      }
//vanilla, one layer, purple
      if (frostingDisplay == "purple"){
        cakeImage.src = cakeResult[18];
      }
      if (frostingDisplay == " "){
        cakeImage.src = cakeResult[0];
      }
//if user chooses two layers after choosing vanilla
    }else if (layerDisplay == 2){
//vanilla, 2 layers, red
      if (frostingDisplay == "red"){
        cakeImage.src = cakeResult[4];
      }
//vanilla, 2 layers, orange
      if (frostingDisplay == "orange"){
        cakeImage.src = cakeResult[7];
      }
//vanilla, 2 layers, yellow
      if (frostingDisplay == "yellow"){
        cakeImage.src = cakeResult[10];
      }
//vanilla, 2 layers, green
      if (frostingDisplay == "green"){
        cakeImage.src = cakeResult[13];
      }
//vanilla, 2 layers, blue
      if (frostingDisplay == "blue"){
        cakeImage.src = cakeResult[16];
      }
//vanilla, 2 layers, purple
      if (frostingDisplay == "purple"){
        cakeImage.src = cakeResult[19];
      }
      if (frostingDisplay == " "){
        cakeImage.src = cakeResult[1];
      }
    }else if (layerDisplay == 3){
//vanilla, 3 layers, red
      if (frostingDisplay == "red"){
        cakeImage.src = cakeResult[5];
      }
//vanilla, 3 layers, orange
      if (frostingDisplay == "orange"){
        cakeImage.src = cakeResult[8];
      }
//vanilla, 3 layers, yellow
      if (frostingDisplay == "yellow"){
        cakeImage.src = cakeResult[11];
      }
//vanilla, 3 layers, green
      if (frostingDisplay == "green"){
        cakeImage.src = cakeResult[14];
      }
//vanilla, 3 layers, blue
      if (frostingDisplay == "blue"){
        cakeImage.src = cakeResult[17];
      }
//vanilla, 3 layers, purple
      if (frostingDisplay == "purple"){
        cakeImage.src = cakeResult[20];
      }
      if (frostingDisplay == " "){
        cakeImage.src = cakeResult[2];
      }
  }
  }else if (flavorDisplay == "choco"){
    if(layerDisplay == 1){
//choco, one layer, red
      if (frostingDisplay == "red"){
        cakeImage.src = cakeResult[24];
      }
//choco, one layer, orange     
      if (frostingDisplay == "orange"){
        cakeImage.src = cakeResult[27];
      }
//choco, one layer, yellow
      if (frostingDisplay == "yellow"){
        cakeImage.src = cakeResult[30];
      }
//choco, one layer, green
      if (frostingDisplay == "green"){
        cakeImage.src = cakeResult[33];
      }
//choco, one layer,blue
      if (frostingDisplay == "blue"){
        cakeImage.src = cakeResult[36];
      }
//choco, one layer, purple
      if (frostingDisplay == "purple"){
        cakeImage.src = cakeResult[39];
      }
      
      if (frostingDisplay == " "){
        cakeImage.src = cakeResult[21];
      }
//if user chooses two layers after choosing choco
    }else if (layerDisplay == 2){
//choco, 2 layers, red
      if (frostingDisplay == "red"){
        cakeImage.src = cakeResult[25];
      }
//choco, 2 layers, orange
      if (frostingDisplay == "orange"){
        cakeImage.src = cakeResult[28];
      }
//choco, 2 layers, yellow
      if (frostingDisplay == "yellow"){
        cakeImage.src = cakeResult[31];
      }
//choco, 2 layers, green
      if (frostingDisplay == "green"){
        cakeImage.src = cakeResult[34];
      }
//choco, 2 layers, blue
      if (frostingDisplay == "blue"){
        cakeImage.src = cakeResult[37];
      }
//choco, 2 layers, purple
      if (frostingDisplay == "purple"){
        cakeImage.src = cakeResult[40];
      }
      
      if (frostingDisplay == " "){
        cakeImage.src = cakeResult[22];
      }
    }else if (layerDisplay == 3){
//choco, 3 layers, red
      if (frostingDisplay == "red"){
        cakeImage.src = cakeResult[26];
      }
//choco, 3 layers, orange
      if (frostingDisplay == "orange"){
        cakeImage.src = cakeResult[29];
      }
//choco, 3 layers, yellow
      if (frostingDisplay == "yellow"){
        cakeImage.src = cakeResult[32];
      }
//choco, 3 layers, green
      if (frostingDisplay == "green"){
        cakeImage.src = cakeResult[35];
      }
//choco, 3 layers, blue
      if (frostingDisplay == "blue"){
        cakeImage.src = cakeResult[38];
      }
//choco, 3 layers, purple
      if (frostingDisplay == "purple"){
        cakeImage.src = cakeResult[41];
      }
// if no frosting
      if (frostingDisplay == " "){
        cakeImage.src = cakeResult[23];
      }
  }  }else if (flavorDisplay == "straw"){
    if(layerDisplay == 1){
      
//strawberry, one layer, red
      if (frostingDisplay == "red"){
        cakeImage.src = cakeResult[45];
      }
//strawberry, one layer, orange     
      if (frostingDisplay == "orange"){
        cakeImage.src = cakeResult[48];
      }
//strawberry, one layer, yellow
      if (frostingDisplay == "yellow"){
        cakeImage.src = cakeResult[51];
      }
//strawberry, one layer, green
      if (frostingDisplay == "green"){
        cakeImage.src = cakeResult[54];
      }
//strawberry, one layer,blue
      if (frostingDisplay == "blue"){
        cakeImage.src = cakeResult[57];
      }
//strawberry, one layer, purple
      if (frostingDisplay == "purple"){
        cakeImage.src = cakeResult[60];
      }
      
      if (frostingDisplay == " "){
        cakeImage.src = cakeResult[42];
      }
//if user chooses two layers after choosing choco
    }else if (layerDisplay == 2){
//strawberry, 2 layers, red
      if (frostingDisplay == "red"){
        cakeImage.src = cakeResult[46];
      }
//strawberry, 2 layers, orange
      if (frostingDisplay == "orange"){
        cakeImage.src = cakeResult[49];
      }
//strawberry, 2 layers, yellow
      if (frostingDisplay == "yellow"){
        cakeImage.src = cakeResult[52];
      }
//strawberry, 2 layers, green
      if (frostingDisplay == "green"){
        cakeImage.src = cakeResult[55];
      }
//strawberry, 2 layers, blue
      if (frostingDisplay == "blue"){
        cakeImage.src = cakeResult[58];
      }
//strawberry, 2 layers, purple
      if (frostingDisplay == "purple"){
        cakeImage.src = cakeResult[61];
      }
      
      if (frostingDisplay == " "){
        cakeImage.src = cakeResult[43];
      }
    }else if (layerDisplay == 3){
//strawberry, 3 layers, red
      if (frostingDisplay == "red"){
        cakeImage.src = cakeResult[47];
      }
//strawberry, 3 layers, orange
      if (frostingDisplay == "orange"){
        cakeImage.src = cakeResult[50];
      }
//strawberry, 3 layers, yellow
      if (frostingDisplay == "yellow"){
        cakeImage.src = cakeResult[53];
      }
//strawberry, 3 layers, green
      if (frostingDisplay == "green"){
        cakeImage.src = cakeResult[56];
      }
//strawberry, 3 layers, blue
      if (frostingDisplay == "blue"){
        cakeImage.src = cakeResult[59];
      }
//strawberry, 3 layers, purple
      if (frostingDisplay == "purple"){
        cakeImage.src = cakeResult[62];
      }
// if no frosting
      if (frostingDisplay == " "){
        cakeImage.src = cakeResult[44];
      }
    }  
  }  
});

const Yes = document.getElementById("yes");
const no = document.getElementById("no");


let finish = document.querySelector('.finish');

//if user does not want to continue ordering cakes
no.addEventListener('click', () => {
  finish.textContent = "Have a nice day!";
    
  }); 
  
//if user wishes to continue ordering, display and prices will be cleared, and will be brought back to the options  
Yes.addEventListener('click', () => {
    flavor.textContent = " ";
    layer.textContent = " ";
    frosting.textContent = " ";
    frostingYN.textContent = " ";
    price.textContent = " ";
    finalPrices.textContent = " ";
    finalPrice = 0;
    flavorPrice = 0;
    layersPrice = 0;
    frostingPrice = 0;
    cakeImage.src = "error.png";
    
  }); 

