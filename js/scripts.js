$(document).ready(function(){
  $("#button").click(function(){
    alert("this works");
    debugger;
    var cards=["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
    var suits=["hearts", "clubs", "diamonds", "spades"];

    cards.forEach(function(card){
      suits.forEach(function(suit){
        $("#deck").append(card + " of " + suit + "</br>");
      });
    });
  });
});
