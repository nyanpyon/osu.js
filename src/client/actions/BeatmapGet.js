//const Beatmap = require('../struct/Beatmap');

class BeatmapGet {
  constructor(client) {
    this.client = client;
    console.log('test');
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
    console.log(bm);
    return bm;
  }
}
module.exports = BeatmapGet;
