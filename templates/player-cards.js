function playercards (){
    var rawCards = document.getElementsByClassName("player-card").innerHTML;
    var compiledCards = Handlebars.compile(rawCards);
    var cards = compiledCards(cards);

    var playerCards = document.getElementsByClassName("player-card");
    playerCards.innerHTML = cards;
}

playercards();