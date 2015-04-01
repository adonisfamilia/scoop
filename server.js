var read = require('node-readability');
var htmlToText = require('html-to-text');


var news = process.argv[2]


read(news, function(err, article, meta) {

  var text = htmlToText.fromString(article.content, {
      wordwrap: 130
  });
  console.log(text);
  article.close();
});
