function scuberGreetingForFeet(someValue){
  // Write your code here!
let greeting 
if (someValue <= 400) {
  return 'This one is on me!'
}
else if (someValue > 400 && someValue <= 2000) {
return 'That will be twenty bucks.'
}
else if (someValue > 2000 && someValue <= 2500) {
  return 'I will gladly take your thirty bucks.'
}
else if (someValue > 2500) {
  return "No can do."
}
}

function ternaryCheckCity(city){
  // Write your code here!
 return city === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tipAmount){
  // Write your code here!
    let text;
  switch(tipAmount) {
    case "generous":
      return text = "Thank you so much.";
      break;
    case "not as generous":
      return text = "Thank you.";
      break;
    default:
      return text = "Bye.";
  }
}