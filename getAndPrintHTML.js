var https = require('https');

function getAndPrintHTML () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    var buffer = '';
    response.on('data', function (data) {
      if (data) {
        buffer += data;
      };
    });
    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(buffer + '\n');
    });
  });
}

getAndPrintHTML();