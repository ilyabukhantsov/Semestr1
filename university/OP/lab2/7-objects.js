"use strict";

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

function fn() {
  const firstObj = { name: "" };
  let secondObj = { name: "" };
  firstObj.name = "";
  secondObj.name = "";
  //firstObj = { name: "" }; Не працює
  //secondObj = { name: "" }; Не працює
  return { firstObj, secondObj };
}

console.log(fn());

module.exports = { fn };
