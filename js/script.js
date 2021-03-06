var htmlData;

document.addEventListener("DOMContentLoaded", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://bhuvnesht26.github.io/app2/quotes.json');
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
        // This is where we'll do something with the retrieved data
            htmlData = JSON.parse(ourRequest.responseText);
            renderHTML();
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
   <div class="slide">
      <div class="thumbnail"><i class="fas fa-quote-left fa-5x"></i></div>
      <h1 class="title">${quotes.quoteText}</h1>
      <p class="description">${quotes.quoteAuthor} </p>
    </div>
  <div class="footer">
    <button id="prev" class="btn" onclick="prevListener()">Prev</button>
    <button id="next" class="btn" onclick="nextListener()">Next</button>
  </div>
</div>
  `;
}

var globalIndex = 0;

function nextListener() {
    globalIndex = globalIndex + 1;
    document.getElementById("quotes-container").innerHTML = `
      ${quotesTemplate(htmlData[globalIndex])}
    `;
}

function prevListener() {
    if(globalIndex!=0){
         globalIndex = globalIndex - 1;
        document.getElementById("quotes-container").innerHTML = `
        ${quotesTemplate(htmlData[globalIndex])}
        `;
    }
}


function renderHTML() {
document.getElementById("quotes-container").innerHTML = `
  ${quotesTemplate(htmlData[globalIndex])}
`;
    
}
