$(document).ready(function() {
	var quotes = [];
  var authors = [];

  // $(document).ready(getQuote);

  $("#newQuote").on("click", getQuote);
  
  function getQuote() {
    $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(data) {
      $("#jg-quote-span").fadeOut(1000, function(){
        $(this).html(data.quote).fadeIn(1000, function(){
          $("#jg-author-span").html(data.author).fadeIn(1000);
        });
      })
      $("#jg-author-span").fadeOut(1000);
      if (quotes.length < 5) {
      	quotes.push(JSON.stringify(data.quote));
      	authors.push(JSON.stringify(data.author));
      } else {
      	quotes.shift();
      	authors.shift();
      	quotes.push(JSON.stringify(data.quote));
      	authors.push(JSON.stringify(data.author));
      }
    });
	};
  
  $("#tweet").on("click", tweet);
  
  function tweet (){
    var phrase = $('#jg-quote-span').text();
    var by = $('#jg-author-span').text();
    var tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(phrase) + " - " + encodeURIComponent(by);
    window.open(tweetUrl);
  };
  
});