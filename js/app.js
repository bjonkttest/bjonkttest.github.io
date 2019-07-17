function giveOption() {
  var url = "json/list.json";
  var type = "" + location.href.split("/").slice(-1);
  var type2 = type.substring(0, type.lastIndexOf('.'));
    $.getJSON(url, function(json) {

      if (type2 == "eten") {
        var count = Object.keys(json.eten).length;
        var choice = json.eten[Math.floor(Math.random()*(count))];
      } if (type2 == "uiteten") {
        var count = Object.keys(json.uiteten).length;
        var choice = json.uiteten[Math.floor(Math.random()*(count))];
      } if (type2 == "koffie") {
        var count = Object.keys(json.koffie).length;
        var choice = json.koffie[Math.floor(Math.random()*(count))];
      } if (type2 == "activiteit") {
        var count = Object.keys(json.activiteit).length;
        var choice = json.activiteit[Math.floor(Math.random()*(count))];
      }
    document.getElementById('optieeten').innerHTML = choice;
  })
}
