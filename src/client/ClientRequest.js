const request = require('request');

class Request {
  constructor(client) {
    this.client = client;
  }

  async makeRequest(data) {
    data.json = true;
    var json = await this.createRequest(data);

    return json;
  }

  createRequest(options){
    return new Promise(resolve => {
      request(options, function(err, response, body) {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Get response: " + response.statusCode);
        resolve(body);
      });
    });
  }
}



module.exports = Request;
