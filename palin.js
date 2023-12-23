let temp, sum, r;
let num = Number(prompt("enter the number"));
function tocheckplaindrome(num) {
  while (num > 0) {
    let sum = 0;
    r = num % 10;
    sum = (sum + 10) * r;
    num = num / 10;
  }
  let e =
    temp == sum
      ? console.log("it is plaindomr")
      : console.log("it is not palindrome");
}
tocheckplaindrome(num);
