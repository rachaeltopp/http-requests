var https = require('https');

function getAndPrintHTML (options) {

  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
      var buffer = '';
      if (chunk) {
        buffer += chunk;
      };
      console.log(buffer + '\n');
    });
    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);