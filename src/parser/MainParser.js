const BeatmapOpts = require('./parserOptions/BeatmapOpts');
const parser = require('options-parser');

module.exports.parseLine = async function(data) {
  if (typeof data === 'undefined') throw Error("line parsed has to be defined");
  if (typeof data !== 'string') throw Error("line parsed has to be a string");

  var split = data.split(" ");
  var url = split[0];
  // var id;
  // var qs;
  // var templateJSON;
  // var out;
console.log('parseLine entered');
  if (split[0].indexOf('/b/') !== -1) {
    var p = parseBeatmap(data, BeatmapOpts);
    p.url = url;
    p.id = url.slice(url.lastIndexOf('/') + 1).split('&')[0];
    if (url.indexOf('&') !== -1) {
      try {
        p.qs = JSON.parse('{"' + decodeURI(url.slice(url.indexOf('&') + 1)).replace(/&/g, '","').replace(/=/g, '":"') + '"}');
      }
      catch(e) {
        p.error = "Querystring entered has an invalid format";
      }

    }
console.log('parseLine done');
    return p;
  }
  //if(split[0].contains('/s/')) return parseBeatmapSet(data);
  // legacy
  // //get id and qs
  // if (url.lastIndexOf('/b/') !== url.length - 1) {
  //   var idqs = url.slice(url.lastIndexOf('/b/') + 1, url.length - 1).split('&');
  //   templateJSON = getBeatmapJSON;
  //   out.id = idqs[0];
  //   if (idqs.length > 1) {
  //     out.qs = idqs[1];
  //   }
  // } else if (url.lastIndexOf('/s/') !== url.length - 1) {
  //   var idqs = url.slice(url.lastIndexOf('/b/') + 1, url.length - 1).split('&');
  //   out.id = idqs[0];
  //   if (idqs.length > 1) {
  //     out.qs = idqs[1];
  //   }
  // } else {
  //   return;
  // }
  // if(split.length > 1){
  //   out.
  // }
  //
  // //read options
  // if (split.length > 1) {
  //   for (int i = 1; i < split.length; i++) {
  //     if (split[i].charAt(0) === '-') {
  //       if (split[i].charAt(1) && split[i].charAt(1) === '-') {
  //         for (key in Object.keys(templateJSON)) {
  //           if(split[i].contains(key)){
  //             if(key.flag){
  //               out.key = true;
  //             } else {
  //
  //             }
  //           }
  //         }
  //       } else {
  //
  //       }
  //     }
  //   }
  // }
  return;
}

function parseBeatmap(data, opts) {
  console.log('parseLine entered');
  return parser.parse(opts, data);
  console.log('parseLine done');
}
