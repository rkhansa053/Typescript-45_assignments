"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Khansa";
let lowercase = personName.toLowerCase();
let uppercase = personName.toUpperCase();
let titlecase = personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase();
console.log(lowercase);
console.log(uppercase);
console.log(titlecase);
