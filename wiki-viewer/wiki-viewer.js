$(function() {});

$("#search").on("click", searchWiki);

$("#searchTerm").keypress(function(event){
  if (event.which == 13) {
    searchWiki();
  }
});

function searchWiki() {
  $("#results").empty();
  var titles = [];
	var imgs = [];
  var input = document.getElementById("searchTerm").value;
  var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=" + input + "&srprop=snippet&callback=?";
  $.getJSON(url, function(data) {
    var pages = data.query.search;
    for (var i = 0; i < 10; i++) {
    	titles.push(pages[i].title);
    	var url2 = "https://en.wikipedia.org/w/api.php?action=query&format=json&titles=" + titles[i] + "&prop=imageinfo&iiprop=url&generator=images&callback=?"
    	$.getJSON(url2, function(data2) {
    		imgs.push(data2.query.pages["-1"].imageinfo[0].url);
    	});
      $("#results").append("<div class='card border border-primary'>"+
          "<div class='container-fluid'>"+
            "<div class='row align-items-center'>"+
              "<div class='col-2'>"+
                "<div class='card-body'>"+
                  "<h2>" + [i+1] + "</h2>"+
                "</div>"+
              "</div>"+
              "<div class='col-10'>"+
                "<div class='card-body'>"+
                  "<h4 class='card title border-0'>"+
                    "<a href=\"http:\/\/en.wikipedia.org\/?curid=" + pages[i].pageid + "\" target=\"_blank\" rel=\"noopener\">" + pages[i].title + "</a>"+
                  "</h4>"+
                  "<p class='card-text'>" + pages[i].snippet + "...</p>"+
                "</div>"+
              "</div>"+
            "</div>"+
          "</div>"+
        "</div><br />");
    }
    console.log(imgs);
    // <img src='" + imgs[i] + "'>
   });
}

// "<div class='card border border-primary'><div class='card-body'><h4 class='card title border-0'>" + [i+1] + ": <a href=\"http:\/\/en.wikipedia.org\/?curid=" + pages[i].pageid + "\" target=\"_blank\">" + pages[i].title + "</h4></a><p class='card-text'>" + pages[i].snippet + "...</p></div></div><br />"

// https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=apple&srprop=snippet&callback=?%22
// https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&list=search&titles=&redirects=1&formatversion=2&piprop=thumbnail&pilimit=3&srsearch=cat
// - title, snippet

// https://en.wikipedia.org/w/api.php?action=query&format=json&titles=[title]&prop=images
// - JSON.query.pages[736].images[0].title (File: )

// https://en.wikipedia.org/w/api.php?action=query&format=json&titles=Image[direct]&prop=imageinfo&iiprop=url
// https://en.wikipedia.org/w/api.php?action=query&format=json&titles=File[direct]&prop=imageinfo&iiprop=url
// - JSON.query.pages["-1"].imageinfo[0].url

// https://en.wikipedia.org/w/api.php?action=query&format=json&titles=[title]&prop=imageinfo&iiprop=url&generator=images
// - JSON.query.pages["-1"].imageinfo[i].url
// https://en.wikipedia.org/w/api.php?action=query&format=json&titles=[1|2]&prop=pageimages%7Cpageterms&redirects=1&formatversion=2&piprop=thumbnail&pilimit=3&wbptterms=description
// - JSON.query.pages[0].thumbnail.source
// https://en.wikipedia.org/w/api.php?action=query&format=json&titles=[title]&prop=pageimages&pithumbsize=100
// https://en.wikipedia.org/w/api.php?action=query&format=json&titles=[title]&prop=pageimages&piprop=original
// - JSON.query.pages[page_id].thumbnail.source
// - JSON.query.pages[page_id].original.source

// https://en.wikipedia.org/w/api.php?action=opensearch&limit=5&format=xml&search=italy&namespace=0
// https://commons.wikimedia.org/w/api.php?align-items-centerion=query&titles=File%3ASpelterini_Bl%C3%BCemlisalp.jpg&prop=imageinfo&iiprop=url&format=json

// make array of pages[i].title or pages[i].pageid then foreach to get images?
// continue

// https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/200px-Tour_Eiffel_Wikimedia_Commons.jpg
// The first part is always the same: https://upload.wikimedia.org/wikipedia/commons/thumb
// The second part is the first character of the MD5 hash of the file name. In this case, the MD5 hash of Tour_Eiffel_Wikimedia_Commons.jpg is a85d416ee427dfaee44b9248229a9cdd, so we get /a.
// The third part is the first two characters of the MD5 hash from above: /a8.
// The fourth part is the file name: /Tour_Eiffel_Wikimedia_Commons.jpg
// The last part is the desired thumbnail width, and the file name again: /200px-Tour_Eiffel_Wikimedia_Commons.jpg
// https://stackoverflow.com/questions/8363531/accessing-main-picture-of-wikipedia-page-by-api