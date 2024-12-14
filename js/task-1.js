// Задача 1. Генератор slug

// function slugify(title) {
//   // "Arrays for beginners"
//   const titlelower = title.toLowerCase();
//   // "array for beginners"
//   const titlesplit = titlelower.split(" ");
//   // ['array', 'for', 'beginners']
//   return titlesplit.join("-");
// }

function slugify(title) {
  return title.toLowerCase().split(" ").join("-");
}

console.log("-------------- Task-1 ----------------");
console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
