var gplay = require('google-play-scraper');

// gplay.app({appId: 'com.google.android.apps.translate'})
//   .then(console.log, console.log);

  gplay.search({
    term: "colorful snake",
    num: 1,
  }).then(console.log, console.log);

  gplay.developer({devId: "Games United Yazılım Eğitim Sanayi Ticaret A.S."}).then(console.log);
