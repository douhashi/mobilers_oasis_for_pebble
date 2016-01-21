// oasis model
var Oasis = function(entry){
  this.title = entry.title;
};
Oasis.prototype = {
  title: function(){
    return this.title;
  }
};

this.exports = Oasis;