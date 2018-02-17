

document.addEventListener("DOMContentLoaded", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://bhuvnesht26.github.io/app2/quotes.json');
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
        // This is where we'll do something with the retrieved data
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
            } else {
                    console.log("We connected to the server, but it returned an error.");
                }
            };

    ourRequest.onerror = function() {
        console.log("Connection error");
        };

    ourRequest.send();

});

function quotesTemplate(quotes) {
  return `   
<div class="card">
  <div class="slides">
   <div class="slide">
      <div class="thumbnail"><i class="fas fa-quote-left fa-5x"></i></div>
      <h1 class="title">${quotes.quoteText}</h1>
      <p class="description">${quotes.quoteAuthor} </p>
    </div>
  </div>
</div>
  `;
}

function renderHTML(htmlData) {
document.getElementById("quotes-container").innerHTML = `
  ${htmlData.map(quotesTemplate).join("")}
`;
}