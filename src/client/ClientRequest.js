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
          console.error(err);
          return;
        }
        if(response.statusCode !== 200)
          resolve({error : "HTTPrequest failed, server offline? Key missing?"}) && console.log(`error while trying to pull data ${res.statusCode}`);
        resolve(body);
      });
    });
  }
}



module.exports = Request;
