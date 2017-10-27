function convertHTML(str) {
  var arr = str.split("");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "&") {
      arr[i] = "&amp;";
    }
    if (arr[i] === "<") {
      arr[i] = "&lt;";
    }
    if (arr[i] === ">") {
      arr[i] = "&gt;";
    }
    if (arr[i] === "\"") {
      arr[i] = "&quot;";
    }
    if (arr[i] === "\'") {
      arr[i] = "&apos;";
    }
  }
  str = arr.join("");
  return str;
}

//convertHTML("Dolce & Gabbana") //should return Dolce &amp; Gabbana.
//convertHTML("Hamburgers < Pizza < Tacos") //should return Hamburgers &lt; Pizza &lt; Tacos.
//convertHTML("Sixty > twelve") //should return Sixty &gt; twelve.
// convertHTML('Stuff in "quotation marks"'); //should return Stuff in &quot;quotation marks&​quot;.
//convertHTML("Shindler's List") //should return Shindler&apos;s List.
//convertHTML("<>") //should return &lt;&gt;.
//convertHTML("abc") //should return abc.