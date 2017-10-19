$(document).ready(function(){
  // define the empty quote object
  let quote =
  {
      quote: "",
      author: "",
      permalink: "",
      tweetURL: "https://twitter.com/intent/tweet?text="
  }
  
  // changes html to match new quote
  let changeQuote = function(quote)
  {
      $(".message").html('C:\\> ' + quote.quote);
      $(".author").html('<br> - ' + quote.author);
      $(".permalink").html('<br><a class="dos-prompt-text" href="' + quote.permalink + ' "target="_blank">C:\\> Permalink</a>');
  }
  
  // retreives new JSON quote object from external source
  // I cant get this to work on CodePen!!!
  let getRandomQuote = function()
  {
        $.getJSON('//quotes.stormconsultancy.co.uk/random.json', function(data)
          {
              quote.quote = data.quote;
              quote.author = data.author;
              quote.permalink = data.permalink;
              changeQuote(data);
          }
      );
  };
  
  // open up tweet box in new window
  let tweet = function(url)
  {
  //    console.log(quote.quote.split(" ").join("+"));
      window.open(url.concat(quote.quote.split(" ").join("+")), "_blank");
  };
  
  // publish first quote
  getRandomQuote();
  
  // get new quote when #getMessage clicked
  $("#getMessage").click(function(){getRandomQuote();});
  
  // tweet quote when #tweet clicked
  $("#tweet").click(function(){tweet(quote.tweetURL);});
  
  });
  