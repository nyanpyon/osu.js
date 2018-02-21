const BeatmapGet = require('./actions/BeatmapGet');
const Request = require('./ClientRequest');

class Client {
  constructor(key, options = {}){
    this.key = key;
    this.request = new Request(this);
    this.beatmap = new BeatmapGet(this);

  }
}

module.exports = Client;
