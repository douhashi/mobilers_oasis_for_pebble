/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');

// My Libraries
var MobilersOasis = require('mobilers_oasis');

var main = new UI.Card({
  title: 'Pebble.js',
  icon: 'images/menu_icon.png',
  subtitle: 'Hello World!',
  body: 'Press any button.',
  subtitleColor: 'indigo', // Named colors
  bodyColor: '#9a0036' // Hex colors
});

main.show();

main.on('click', 'up', function(e) {
  // TODO: get geolocation and make params
  console.log("[main] clicked!");
  var params = { n: '34.70849', w: '135.48775', s: '34.69727', e: '135.50951' };
  var mo = new MobilersOasis(params);
  mo.getOasis(
    function(oases){
      var items = [];
      for( var i = 0; i < oases.length; i++ ){
        var item = {};
        item.title = oases[i].title;
        items.push(item);
      }

      var menu = new UI.Menu({
        sections: [{
          items: items
        }]
      });
      menu.show();
    },
    function(data){
      console.log(data);
    }
  );
});

main.on('click', 'select', function(e) {
  var wind = new UI.Window({
    fullscreen: true,
  });
  var textfield = new UI.Text({
    position: new Vector2(0, 65),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Text Anywhere!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('A Card');
  card.subtitle('Is a Window');
  card.body('The simplest window type in Pebble.js.');
  card.show();
});
