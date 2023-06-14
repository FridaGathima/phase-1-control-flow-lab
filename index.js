function scuberGreetingForFeet(someValue){
  if (someValue <= 400){
    return 'This one is on me!'
  }
  if (someValue > 2000 && someValue < 2500){
    return 'I will gladly take your thirty bucks.'
}else{
    return 'No can do.'
}
}

function ternaryCheckCity(city){
  return city == 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tips){
    // Write your code here!
  switch (tips) {
    case 'generous':{
      return('Thank you so much.');
    }
      break
    case 'not as generous':{
      return('Thank you.');
    }
      break
    case 'thanks for everything':{
      return('Bye.');
    }
  }
}
