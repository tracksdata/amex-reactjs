function getFood() { // named // scope is getFood
    return "No Food 12345"
}
//  var getFood=new Function(/*...*/)

function getFood(amount) { // named  -> scope is getFood
   if (arguments.length === 0) return "No Food"
    return "Biryani"
}

console.log(getFood(3444))