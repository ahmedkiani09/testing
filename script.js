'use strict';
/*
const flight = 'LH99';
const ahmed = {
  name: 'Ahmed',
  passport_NO: 123445667778,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH34';
  passenger.name = 'MR' + ' ' + passenger.name;

  if ((passenger.passport_NO = 123445667778)) {
    console.log('checkedIN');
  } else console.log('checkIN failed');
};

checkIn(flight, ahmed);
console.log(flight, ahmed);

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const twoWords = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`without transformer:  ${str}`);
  console.log(`with transformer:  ${fn(str)}`);
  console.log(`transformed by:  ${fn.name}`);
};

transformer('JavaScript is fun', twoWords);
transformer('JavaScript is fun', oneWord);


const freeStyler = function (tips, rainbow) {
  if (tips >= 10 && rainbow === true) {
    return `ahmed is a freeStyler`;
  } else return `ahmed is not a freeStyler`;
};

const dribbler = function (drribles, ballControl) {
  if (drribles >= 4 && ballControl === true) {
    return `ahmed is a great dribbler`;
  } else return `ahmed is not a great dribbler`;
};

const checkPlayerType = function (fn, fn2) {
  console.log(`checking freestyling skills: ${fn(8, true)}`);
  console.log(`checking dribbling skills: ${fn2(5, true)}`);
};

checkPlayerType(freeStyler, dribbler);

const greet = greeting => name => console.log(`${greeting} ${name}`);
greet('hey')('ahmed!');
*/
// 1st airline:
const lufthansa = {
  airline: 'lufthansa',
  iatacode: 'LH',
  bookings: [],

  //   book method for all airlines:
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iatacode}${flightNum} was  booked by ${name}`,
    });
  },
};

// 2nd airline
const euroWings = {
  airline: 'Eurowings',
  iatacode: 'EW',
  bookings: [],
};
// declaring variable for bookings method:
const book = lufthansa.book;

// call method:
book.call(lufthansa, 223, 'Ahmed');
book.call(lufthansa, 223, 'Zulfiqar');
book.call(euroWings, 225, 'Ahmed');
book.call(euroWings, 225, 'Sheraz');
console.log(lufthansa);
console.log(euroWings);

// apply method:
const flightData = [583, 'Ahmed Kiani'];
book.apply(euroWings, flightData);
book.call(lufthansa, ...flightData);
