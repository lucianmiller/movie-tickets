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

const userInputtedMovie = "Spirited Away"
const userInputtedMovieTime = "standard"
const userInputtedAge = 3

let userTicket = new Ticket(userInputtedMovie, userInputtedMovieTime, userInputtedAge);
userTicket.calculatePrice();
console.table(userTicket);