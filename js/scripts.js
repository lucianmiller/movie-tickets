//Business Logic for TicketBooth --------
function TicketBooth() {
  this.tickets = []
  this.checkoutPrice = 0
}

TicketBooth.prototype.addTicket = function(ticket) {
  this.tickets.push(ticket);
}

TicketBooth.prototype.totalPrice = function() {
  this.checkoutPrice = 0
  for (let i = 0; i < this.tickets.length; i++) {
    this.checkoutPrice += this.tickets[i].price
  }
}

  // Business Logic for Ticket --------

  function Ticket(movie, time, age) {
    this.movie = movie;
    this.time = time;
    this.age = age;
    this.price = 0;
  }
  
Ticket.prototype.calculatePrice = function() {
  if (this.movie === 1) {
    this.price += 10;
  } else {
    this.price += 8.5;
  };
  if (this.time === 1) {
    this.price += 2;
  } else {
    this.price += 1;
  };
  if (this.age === 3) {
    this.price += 2;
  } else if (this.age === 2) {
    this.price -= 2;
  } else {
    this.price -= 1;
  };
}

//User Interface Logic-------
let ticketBooth = new TicketBooth;

function showPrice(price) {
  $("#show-price").show();
  $("#total-price").html("$" + parseFloat(price).toFixed(2));
}

$(document).ready(function() {
  $("form#tickets").submit(function(event) {
    event.preventDefault();
    const selectedMovie = parseInt($("#movie").val());
    const selectedTime = parseInt($("#time").val());
    const selectedAge = parseInt($("#age").val());
    
    $("input#movie").val("");
    $("input#time").val("");
    $("input#age").val("");
    
    let userTicket = new Ticket(selectedMovie, selectedTime, selectedAge);
    userTicket.calculatePrice();
    ticketBooth.addTicket(userTicket);
    ticketBooth.totalPrice();
    showPrice(ticketBooth.checkoutPrice);
  });
});
