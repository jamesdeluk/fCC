$(document).ready(function() {
	var quotes = [];
  var authors = [];
  var count =
  $(".jg-box").hide();

  $(document).ready(getQuote);

  $("#newQuote").on("click", getQuote);
  
  function getQuote() {
    $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(data) {
      // $("#quote").html(data.quote);
      // $("#author").html(data.author);
      if (quotes.length < 5) {
      	quotes.push(JSON.stringify(data.quote));
      	authors.push(JSON.stringify(data.author));
      } else {
      	quotes.shift();
      	authors.shift();
      	quotes.push(JSON.stringify(data.quote));
      	authors.push(JSON.stringify(data.author));
        // $("#jg-main").append("<div class="ui center aligned raised segment jg-ma jg-box"></div>").html(quotes[0]);
      }
      if (quotes.length === 1) {
        $("#quote").html(quotes[0]).fadeIn(1000);
        $("#author").html(authors[0]).fadeIn(1000);
        // $("#quote").width("100%");
        // $("#author").width("100%");
        // $("#quote2").show();
        // $("#author2").show();
      }
      if (quotes.length === 2) {
        $("#quote").html(quotes[1]).slideDown(1000);
        $("#author").html(authors[1]).slideDown(1000);
        $("#quote2").html(quotes[0]).slideDown(1000);
	    	$("#author2").html(authors[0]).slideDown(1000);
        $("#quote2").width("85%");
        $("#author2").width("85%");
	    	// $("#quote2").show();
	    	// $("#author2").show();
      }
      if (quotes.length === 3) {
        $("#quote").html(quotes[2]).slideDown(1000);
        $("#author").html(authors[2]).slideDown(1000);
				$("#quote2").html(quotes[1]).slideDown(1000);
	    	$("#author2").html(authors[1]).slideDown(1000);
				$("#quote3").html(quotes[0]).slideDown(1000);
	    	$("#author3").html(authors[0]).slideDown(1000);
        $("#quote3").width("70%");
        $("#author3").width("70%");
      }
      if (quotes.length === 4) {
        $("#quote").html(quotes[3]).slideDown(1000);
        $("#author").html(authors[3]).slideDown(1000);
				$("#quote2").html(quotes[2]).slideDown(1000);
	    	$("#author2").html(authors[2]).slideDown(1000);
				$("#quote3").html(quotes[1]).slideDown(1000);
	    	$("#author3").html(authors[1]).slideDown(1000);
				$("#quote4").html(quotes[0]).slideDown(1000);
	    	$("#author4").html(authors[0]).slideDown(1000);
        $("#quote4").width("55%");
        $("#author4").width("55%");
      }
      if (quotes.length === 5) {
        $("#quote").html(quotes[4]).slideDown(1000);
        $("#author").html(authors[4]).slideDown(1000);
	      $("#quote2").html(quotes[3]).slideDown(1000);
	    	$("#author2").html(authors[3]).slideDown(1000);
				$("#quote3").html(quotes[2]).slideDown(1000);
	    	$("#author3").html(authors[2]).slideDown(1000);
				$("#quote4").html(quotes[1]).slideDown(1000);
	    	$("#author4").html(authors[1]).slideDown(1000);
				$("#quote5").html(quotes[0]).slideDown(1000);
	    	$("#author5").html(authors[0]).slideDown(1000);
        $("#quote5").width("40%");
        $("#author5").width("40%");
      }
    });
	};
  
  $("#tweet").on("click", tweet);
  
  function tweet (){
    var phrase = $('#quote').text();
    var by = $('#author').text();
    var tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(phrase) + " - " + encodeURIComponent(by);
    window.open(tweetUrl);
  };
  
});