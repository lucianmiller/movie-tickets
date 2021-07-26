//Business Logic for TicketBooth --------
function TicketBooth() {
  this.ticket = {}
  this.currentId = 0
}

TicketBooth.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
  this.tickets[ticket.id] = ticket;
}

TicketBooth.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

TicketBooth.prototype.findTicket = function(id) {
  if (this.tickets[id] != undefined) {
    return this.tickets[id];
  }
  return false;
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

$(document).ready(function() {
  $("form#tickets").submit(function(event) {
    event.preventDefault();
    const selectedMovie = parseInt($("#movie").val());
    const selectedTime = parseInt($("#time").val());
    const selectedAge = parseInt($("#age").val());
    
    let userTicket = new Ticket(selectedMovie, selectedTime, selectedAge);
    userTicket.calculatePrice();
    console.table(userTicket);
  });
});
