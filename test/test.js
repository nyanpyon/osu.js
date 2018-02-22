const api = require('../src/index');
const Client = new api.Client(`${"instert key here"}`);

Client.beatmap.getById("1458418").then((bm) => console.log(`${bm.artist} - ${bm.title}`));
