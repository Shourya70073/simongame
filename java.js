var buttonColours=["red","blue","green","yellow"];
gamePattern=[]
function nextSequence(){
  var randomNumber=Math.random();
  randomNumber=randomNumber*3;
  randomNumber=Math.floor(randomNumber)+1;
  return randomNumber;
}
var randomChosenColour=buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);
$(("#"+randomChosenColour)).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
var audio=new Audio(randomChosenColour+".mp3");
audio.play();
