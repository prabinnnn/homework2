function countvowel(str) {
  let vowellist = "aeiouAEIOU";
  let vcount = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowellist.length; j++) {
      if (vowellist[j] === str[i]) {
        vcount++;
      }
    }
  }
  return vcount;
}
console.log(countvowel("The quick brown fox"));
