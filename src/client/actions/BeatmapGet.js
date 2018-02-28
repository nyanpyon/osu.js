//const Beatmap = require('../struct/Beatmap');
const parser = require('../../parser/MainParser');

class BeatmapGet {
  constructor(client) {
    this.client = client;
  }

  async getById(id) {
    if (!id) throw new Error('No beatmap id was entered.');
    if (typeof id !== 'string') throw new Error('Beatmap id has to be a string');
    var data = {
      url: 'https://osu.ppy.sh/api/get_beatmaps',
      qs: {
        k: this.client.key,
        b: id
      }
    }
    var body = await this.client.request.makeRequest(data);

    var bm = body[0];
    return bm;
  }

  async getByLine(line){
    var res = await parser.parseLine(line);
    res.bm = await this.getById(res.id);
    return res;
  }

}
module.exports = BeatmapGet;
