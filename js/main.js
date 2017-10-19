
$(document).ready(function(){
  // define the empty quote object
  let quote = {
      quote: "",
      author: "",
      permalink: "",
      tweetURL: "https://twitter.com/intent/tweet?text="
  };
  
  // changes html to match new quote
  let changeQuote = function(data) {
      $(".message").html('C:\\> ' + data.quote);
      $(".author").html('<br> - ' + data.author);
      $(".permalink").html('<br><a class="dos-prompt-text" href="' + data.permalink + ' "target="_blank">C:\\> Permalink</a>');
  }
  
  // retreives new JSON quote object from external source
  let getRandomQuote = function() {
      fetch('http:quotes.stormconsultancy.co.uk/random.json')
        .then(function(response) { 
        // Convert to JSON
        return response.json();
      }).then(function(data) {
          quote.quote = data.quote;
          quote.author = data.author;
          quote.permalink = data.permalink;
          changeQuote(quote);
      }).catch(function(err) {
          quote.quote = "oops! something went wrong";
          quote.author = "error";
          quote.permalink = "";
          changeQuote(quote)
          console.log(err);
          throw new Error("Failed to fetch!");
      });
  };
  
  // open up tweet box in new window
  let tweet = function(url) {
      window.open(url.concat(quote.quote.split(" ").join("+")), "_blank");
  };
  
  // publish first quote
  getRandomQuote();
  
  // get new quote when #getMessage clicked
  $("#getMessage").click(function(){getRandomQuote();});
  
  // tweet quote when #tweet clicked
  $("#tweet").click(function(){tweet(quote.tweetURL);});
});