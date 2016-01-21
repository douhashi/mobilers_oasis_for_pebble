// MobilersOasis
var ajax = require('ajax');
var Oasis = require('oasis');

// constructor
var MobilersOasis = function(options){
    this.n = options.n;
    this.s = options.s;
    this.w = options.w;
    this.e = options.e;
};

MobilersOasis.prototype = {
  getOasis: function(successCallback, failureCallback){
    console.log("[MobilersOasis#getOasis] Enter.");
    var endpoint = 'http://oasis.mogya.com/api/v0/search';
    ajax(
      // options
      {
        url: endpoint + this._generateUrlParams(),
        type: 'json'
      },
      // success handler
      function(data, status, request){
        console.log('[MobilersOasis#getOasis] request success!');
        var oases = [];
        var length = data.results.length;
        for(var i = 0; i < length; i++){
          var oasis = new Oasis(data.results[i]);
          oases.push( oasis );
        }

        successCallback(oases);
      },
      // failure handler
      function(data, status, request){
        console.log('[MobilersOasis#getOasis] request failure!');
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
};

this.exports = MobilersOasis;