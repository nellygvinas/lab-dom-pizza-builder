// Write your Pizza Builder JavaScript in this file.

$(document).ready(function(){
  

// Constants 
let basePrice = 10
let ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
let state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  
  //$('.pep').toggle(250);
    
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })

}

function renderMushrooms() {
  
  //$('.mushroom').toggle(250);
  // Iteration 1: set the visibility of `<section class="mushroom">`

  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.mushrooms) {
      $mushrooms.style.visibility = "visible";
    }
    else {
      $mushrooms.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  $('.green-pepper').toggle(250);
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {

  $('.sauce').toggleClass('sauce-white');
  /*
  if ($('.sauce').hasClass('sauce-white')) {
  $('.sauce').removeClass('sauce-white')}
  else {
    $('.sauce').addClass('sauce-white')
  }

  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`*/

}

function renderGlutenFreeCrust() {
  $('.crust').toggleClass('crust-gluten-free');

  /*if ($('.crust').hasClass('crust-gluten-free')) {
    $('.crust').removeClass('crust-gluten-free')}
    else {
      $('.crust').addClass('crust-gluten-free')
    }
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`*/
}

function renderButtons() {
  $('.btn').click(function(){
    $(this).toggleClass('active')
  }

  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  )}


function renderPrice() {
  $('.btn').click(function(){
    let price = $('.theInput').val()

    // let newThing = $(`<li> ${newText} </li>`);

    let newThing = $('<li> </li>');
    newThing.text(newText);

    $('#the-list').append(newThing);



    $('.theInput').val("");   
})

}


  // Iteration 4: change the HTML of `<aside class="panel price">`


//let ingredients = [
//{name: "pepperonni", price:1},
//{name: "mushrooms", price:1},
//{name: "mushrooms", price:1},
//]

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`

// $('.btn-pepperonni').click(function() {
//   document.querySelector('.btn.btn-pepperonni').onclick = function() {
//   state.pepperonni = !state.pepperonni
//   renderPepperonni()
//   //renderEverything()
  
// })

document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderPepperonni();
  //renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.mushroom').onclick = function () {
  state.mushrooms = !state.mushrooms;
  $('.btn-mushrooms').click(function() {
  renderMushrooms()
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
$('.btn-green-peppers').click(function() {
  renderGreenPeppers()
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
$('.btn-sauce').click(function() {
  renderWhiteSauce()
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
$('.btn-crust').click(function() {
  renderGlutenFreeCrust()
})

})
