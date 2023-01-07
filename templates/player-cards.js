function playercards (){
    var rawCards = document.getElementsByClassName("player-card").innerHTML;
    var compiledCards = Handlebars.compile(rawCards);
    var cards = compiledCards(cards);

    var playerCards = document.getElementsByClassName("player-card");
    playerCards.innerHTML = cards;
}

$.get('/api/data', function(data) {
    var template = Handlebars.compile($('#template').html());
    var html = template({data: data});
    $('#container').html(html);
  });

playercards();