function longestnumber(str) {
  let arr = str.match(/\w[a-z]{0,}/gi);
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (result.length < arr[i].length) {
      result = arr[i];
    }
  }
  return result;
}
console.log(longestnumber("Web Development Tutorial"));
