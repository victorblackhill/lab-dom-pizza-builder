// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 ,tag:"<li >$1 pepperoni</li>"},
  mushrooms: { name: 'Mushrooms', price: 1,tag:"<li>$1 mushrooms</li>" },
  greenPeppers: { name: 'Green Peppers', price: 1, tag:"<li>$1 green peppers</li>" },
  whiteSauce: { name: 'White sauce', price: 3, tag:"<li>$3 white sauce</li>" },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5, tag: "<li>$5 gluten-free crust</li>" }
};







// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

const classes = {
  pepperoni: "pepperoni",
  mushrooms: "mushrooms",
  greenPeppers: "green-peppers",
  whiteSauce: "sauce",
  glutenFreeCrust: "crust"
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}



function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach((mushroom) => {
    if (state.mushrooms){mushroom.style.visibility = "visible"}
    else { mushroom.style.visibility = "hidden"}
})

}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  
 
  let greenPeppers = document.querySelectorAll(".green-pepper")
  
  greenPeppers.forEach( (pepper) => {
    if(state.greenPeppers){pepper.style.visibility ="visible"}
    else {pepper.style.visibility = "hidden"}
  })

}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  
  //select les eleménts sauce
  let sauce = document.querySelectorAll(".sauce")
 
  
  //changer leur état
  sauce.forEach( (sauceElement) => {
    
    if(state.whiteSauce) {
      sauceElement.className = "sauce sauce-white"

  }
    else {

      sauceElement.className = "sauce"
    
  } })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

  //select the class
  let crust = document.querySelectorAll(".crust");

  //change the status of each element
  crust.forEach( (element) => {
    if(state.glutenFreeCrust){element.className ="crust" + " " + "crust-gluten-free" }
    else{element.className ="crust"}
  })

}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  //loop for each ingredient

  for(ingredient in state){
    
    //object classes gives me the right names for the btn classes (i Had not seen the ingredients object :())
    let button=document.querySelector(".btn-"+classes[ingredient]);
    if(state[ingredient]){button.className ="btn btn-"+classes[ingredient]+" active"}
    else{button.className ="btn btn-"+classes[ingredient]}

  }

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  
    //clean the list
    theList = document.getElementById("the-list")
    console.log(typeof theList.innerHTML)
    theList.innerHTML = ""
    let price = 10

    
  for(ingredient in ingredients){
    
    if(state[ingredient]){
      //remplir la liste avec les ingrédients nécessaires (sous forme de tags html des objets à l'intérieur de Ingredients)
      theList.innerHTML += ingredients[ingredient].tag
    }
        //calcul de l'addition
        price += state[ingredient]*ingredients[ingredient].price;
    }


    document.getElementById("the-total").textContent = price;



  


}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  console.log("changing mushroom", state.mushrooms)
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", function () {
  state.whiteSauce = !state.whiteSauce;
  console.log("changing white sauce state to", state.whiteSauce)
  
  renderEverything();
})



// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector(".btn.btn-crust").addEventListener("click", function () {

  state.glutenFreeCrust = !state.glutenFreeCrust;
  console.log("changing status to " , state.glutenFreeCrust)
  renderEverything()


}

)