"use strict";

const phoneBook = [
  { name: "Marcus Aurelius", phone: "380445554433" },
  { name: "Ilya Bukhantsov", phone: "089445438634" },
  { name: "Poni Poninenko", phone: "08332490483" },
];

function findPhoneByName(name) {
  for (let contact of phoneBook) {
    if (contact.name == name) {
      return contact.phone;
    }
  }
}

console.log(findPhoneByName("Marcus Aurelius"));
console.log(findPhoneByName("Ilya Bukhantsov"));
console.log(findPhoneByName("Poni Poninenko"));
