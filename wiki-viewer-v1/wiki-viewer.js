// https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=apple&srprop=snippet&callback=?%22
// https://en.wikipedia.org/w/api.php?action=query&titles=Albert+Einstein&prop=images&format=json
// https://en.wikipedia.org/w/api.php?action=query&titles=Image%3ABastet+Istanbul+museum.JPG&prop=imageinfo&iiprop=url&format=json
// https://en.wikipedia.org/w/api.php?action=query&prop=imageinfo&iiprop=url&generator=images&titles=Cat&format=json
// https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages%7Cpageterms&titles=Albert%20Einstein%7CAlbert%20Ellis%7CAlbert%20Estopinal&redirects=1&formatversion=2&piprop=thumbnail&pilimit=3&wbptterms=description
// /w/api.php?action=query&format=json&prop=pageimages&list=search&titles=&redirects=1&formatversion=2&piprop=thumbnail&pilimit=3&srsearch=cat
// continue

$(function() {});

$("#search").on("click", searchWiki);

var pages;

function searchWiki() {
  $("#results").empty();
  var input = document.getElementById("searchTerm").value;
  var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=" + input + "&srprop=snippet&callback=?";
  $.getJSON(url, function(data) {
    pages = data.query.search;
    for (var i = 0; i < 10; i++) {
    	var url2 = "https://en.wikipedia.org/w/api.php?action=query&prop=imageinfo&iiprop=url&generator=images&titles=" + pages[i].title + "&format=json"
    	console.log(url2)
    	$.getJSON(url2, function(data2) {
    		console.log(data3.query.pages["-1"].imageinfo[0].url);
    	});
      $("#results").append("<div class='card border border-primary'><div class='container-fluid'><div class='row align-items-center'><div class='col-1'><div class='card-body'><h2>" + [i] + "</h2></div></div><div class='col-10'><div class='card-body'><h4 class='card title border-0'><a href=\"http:\/\/en.wikipedia.org\/?curid=" + pages[i].pageid + "\" target=\"_blank\">" + pages[i].title + "</a></h4><p class='card-text'>" + pages[i].snippet + "...</p></div></div></div></div></div><br />");
    }
   });
}

// "<div class='card border border-primary'><div class='card-body'><h4 class='card title border-0'>" + [i+1] + ": <a href=\"http:\/\/en.wikipedia.org\/?curid=" + pages[i].pageid + "\" target=\"_blank\">" + pages[i].title + "</h4></a><p class='card-text'>" + pages[i].snippet + "...</p></div></div><br />"