// MobilersOasis
var ajax = require('ajax');
var Oasis = require('oasis');

// constructor
var MobilersOasis = function(options){
    this.n = options.n;
    this.s = options.s;
    this.w = options.w;
    this.e = options.e;
}
MobilersOasis.ENDPOINT = 'http://oasis.mogya.com/api/v0/search';
MobilersOasis.prototype = {
  getOasis: function(successCallback, failureCallback){
    ajax(
      // options
      {
        url: ENDPOINT + this._generateUrlParams();,
        type: 'json'
      },
      // success handler
      function(data, status, request){
        var oases = [];
        for( var entry = data.results ){
          oases.push( new Oasis(entry) );
        }
        successCallback(oases);
      },
      // failure handler
      function(data, status, request){
        failureCallback(data);
      }
    );
  },
  _generateUrlParams: function(){
    var prefix = "?";
    var paramsArray = [];

    paramsArray.push('n=' + this.n);
    paramsArray.push('s=' + this.s);
    paramsArray.push('w=' + this.w);
    paramsArray.push('e=' + this.e);

    return prefix + paramsArray.join('&');
  }
}

this.exports = MobilersOasis;
