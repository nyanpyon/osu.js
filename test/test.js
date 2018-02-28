const api = require('../src/index');
const Client = new api.Client(`${"insert key"}`);

Client.beatmap.getByLine('https://osu.ppy.sh/b/66246 asdasdasdasdasd').then((res) => {
  console.log(res);
  console.log(`${res.bm.artist} - ${res.bm.title}`);
});
