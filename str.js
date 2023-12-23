let num = prompt("enter the character");
function combineall(num) {
  let list_of_string = [];
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length + 1; j++) {
      list_of_string.push(num.slice(i, j));
    }
  }
  return list_of_string;
}
console.log(combineall(num));
