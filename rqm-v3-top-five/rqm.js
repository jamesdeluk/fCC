$(document).ready(function() {
	var quotes = [];
  var authors = [];
  var maxQuotes = 5;
  var quotes = 0;

  $(document).ready(getQuote);

  $("#newQuote").on("click", getQuote);
  
  function getQuote() {
    $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(data) {
      $("#quotes").prepend("<div class='ui center aligned raised segment jg-mb jg-1-3em'>"+data.author+"</div>");
      $("#quotes").prepend("<div class='ui center aligned raised segment jg-ma jg-1-5em'>"+data.quote+"</div>");
      if($("#quotes :nth-child(11)").html()){
        $("#quotes :nth-child(11)").remove();
        $("#quotes :nth-child(11)").remove();
      }
      var children = $("#quotes").children().length;
      for (var i = 3; i < children; i+=2) {
        var width = $("#quotes :nth-child("+[i]+")").width();
        width *= 0.9;
        var fontSize = parseInt($("#quotes :nth-child("+[i]+")").css("font-size"));
        fontSize *= 0.8;
        $("#quotes :nth-child("+[i]+")").css("width", width);
        $("#quotes :nth-child("+[i+1]+")").css("width", width);
        $("#quotes :nth-child("+[i]+")").css("font-size", fontSize+"px");
        $("#quotes :nth-child("+[i+1]+")").css("font-size", fontSize+"px");
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