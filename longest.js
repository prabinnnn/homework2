function longestnumber(num) {
  let arr = num.split("");
  vcount = 0;
  for (let i = 0; i < arr.length; i++) {
    vcount++;

    if (arr[i] == -1) {
      console.log(i);
    }
  }
  return vcount;
}
console.log(longestnumber(num));
