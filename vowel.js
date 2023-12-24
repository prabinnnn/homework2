function countvowel(str) {
  arr = str.split("");
  let vowellist = "aeiouAEIOU";
  let vcount = "";
  for (let i = 0; i < arr.length; i++) {
    let vcount = 0;
    if (vcount === vowellist) {
      console.log(i);
      vcount++;
      break;
    }
  }
  return vcount;
}
console.log(countvowel("The quick brown fox"));
