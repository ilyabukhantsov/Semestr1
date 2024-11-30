"use strict";

const phoneBook = new Map();

function addContact(name, phone) {
  phoneBook.set(name, phone);
}

function findPhoneByName(name) {
  if (phoneBook.has(name)) {
    return phoneBook.get(name);
  }
}

addContact("Marcus Aurelius", "380445554433");
addContact("Ilya Bukhantsov", "089445438634");
addContact("Poni Poninenko", "08332490483");

console.log(findPhoneByName("Poni Poninenko"));

module.exports = { phoneBook, findPhoneByName };
