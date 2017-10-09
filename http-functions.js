module.exports = function getHTML (options, callback) {
  var https = require('https');
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
      var buffer = '';
      if (chunk) {
        buffer += chunk;
      };
      callback(buffer);
    });
    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
}


function printHTML (html) {
  console.log(html);
};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

// getHTML(requestOptions, printHTML);