// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"aiJW":[function(require,module,exports) {

},{}],"wR74":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unarchiveIcon = exports.archiveIcon = exports.deleteIcon = exports.editIcon = exports.quoteIcon = exports.ideaIcon = exports.randomIcon = exports.taskIcon = void 0;
var taskIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"white\" class=\"bi bi-cart4\" viewBox=\"0 0 16 16\"> <path d=\"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z\"/></svg>";
exports.taskIcon = taskIcon;
var randomIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"512\" height=\"512\" viewBox=\"0 0 60 60\" version=\"1.1\"><!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch --><title>001 - Thinking</title><desc>Created with Sketch.</desc><defs/><g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"001---Thinking\" transform=\"translate(-1.000000, -1.000000)\" fill=\"#ffffff\" fill-rule=\"nonzero\"><path d=\"M2.471,38.391 C2.80005232,38.6189823 3.14721108,38.8196521 3.509,38.991 C3.942,39.212 4.666,39.582 4.717,39.842 C4.78064547,40.1834239 4.73987106,40.5361052 4.6,40.854 C4.451,41.174 4.294,41.449 4.16,41.687 C3.793,42.333 3.181,43.416 4.105,44.172 C4.321,44.372 4.694,44.661 5.035,44.922 C4.78441543,45.359553 4.67085435,45.8622176 4.709,46.365 C4.76152783,46.7585059 4.97385582,47.1129888 5.296,47.345 C5.521,47.505 5.762,47.645 5.996,47.78 C6.584,48.115 6.814,48.271 6.896,48.58 C6.94978392,48.9868253 6.91220601,49.4005239 6.786,49.791 C6.727,50.051 6.67,50.31 6.633,50.576 C6.53388213,51.4880722 6.64963657,52.4106831 6.971,53.27 C7.41980058,54.8623838 8.85981681,55.9719644 10.514,56 C10.7885376,55.9989755 11.0622663,55.9701619 11.331,55.914 C14.1878144,55.2369552 17.0028891,54.3945364 19.762,53.391 C22.014,54.713 23.438,58.733 23.809,60.242 C23.920161,60.68769 24.3206567,61.0003324 24.78,61 L49.88,60.93 C50.198095,60.9293833 50.4969218,60.7774667 50.6848608,60.5208273 C50.8727998,60.2641879 50.9274293,59.9334437 50.832,59.63 C50.5846858,58.9524827 50.2437077,58.3129385 49.819,57.73 C49.578794,57.3850885 49.3622956,57.0242578 49.171,56.65 C48.7188236,55.7328582 48.341269,54.7807785 48.042,53.803 C47.4715867,51.8703347 47.0756672,49.8904026 46.859,47.887 C46.507966,44.8952242 46.9615672,41.8639663 48.173,39.106 C48.9122569,37.5764407 49.8234731,36.136142 50.889,34.813 C51.489,34.003 52.112,33.164 52.671,32.283 C53.6321388,30.7899577 54.3289881,29.1425518 54.731,27.413 C54.8460505,26.8791113 54.5114792,26.3516636 53.9794685,26.2282197 C53.4474578,26.1047757 52.9148068,26.4309993 52.783,26.961 C52.4314133,28.4704896 51.8225164,29.9081629 50.983,31.211 C50.464,32.032 49.864,32.84 49.283,33.622 C48.1258779,35.0658493 47.138408,36.6378155 46.34,38.307 C44.9857491,41.3914307 44.4796514,44.7815258 44.874,48.127 C45.1046037,50.2517021 45.5266518,52.3512322 46.135,54.4 C46.4635283,55.4757581 46.8785487,56.5231747 47.376,57.532 C47.6039935,57.9827154 47.8629471,58.4170892 48.151,58.832 L48.218,58.932 L25.536,59 C24.8713257,56.6279525 23.6661515,54.4421411 22.015,52.614 L22.915,52.301 C23.587,52.066 24.094,51.889 24.356,51.801 C28.638,50.436 30.78,48.486 30.721,46.001 C30.7182366,45.7355712 30.6081371,45.482567 30.4157897,45.2996392 C30.2234424,45.1167114 29.9652332,45.0194436 29.7,45.03 C29.1480455,45.043101 28.711146,45.5010397 28.724,46.053 C28.748,47.076 27.905,48.574 23.748,49.898 C23.476,49.985 22.948,50.168 22.257,50.411 C21.514,50.67 20.572,51 19.532,51.353 L19.525,51.353 C16.7127178,52.3842169 13.8432836,53.252326 10.931,53.953 C9.99956857,54.1281128 9.09414704,53.543105 8.871,52.622 C8.65593078,52.057559 8.57148532,51.4517397 8.624,50.85 C8.653,50.65 8.7,50.44 8.746,50.236 C8.95881949,49.5379821 8.99320139,48.7977397 8.846,48.083 C8.55558392,47.1672593 7.88207735,46.4226076 7,46.042 L6.785,45.919 C6.8927899,45.7000453 7.02209318,45.4923561 7.171,45.299 C7.33854781,45.0861849 7.41260189,44.8145074 7.37622447,44.5461062 C7.33984705,44.2777049 7.19615003,44.0355401 6.978,43.875 C6.739,43.699 6.178,43.275 5.758,42.941 C5.806,42.854 5.858,42.758 5.909,42.672 C6.066,42.396 6.246,42.072 6.42,41.705 C6.7369138,41.0045174 6.82981169,40.2232671 6.686,39.468 C6.447,38.248 5.278,37.65 4.425,37.214 C4.13761917,37.0772821 3.8620164,36.9170713 3.601,36.735 C3.3867006,36.5914967 3.18587589,36.4288287 3.001,36.249 C3.001,36.097 3.164,35.73 3.925,34.803 C5.71442401,32.4974321 7.24840125,30.0045095 8.5,27.368 C8.73495197,26.9546937 8.86732269,26.4910533 8.886,26.016 C8.78126997,25.0098204 8.24631249,24.0981682 7.419,23.516 C7.014,23.144 6.631,22.794 6.588,22.499 C6.59716584,22.2539682 6.6521118,22.0128165 6.75,21.788 C6.913,21.36 7.102,20.94 7.29,20.519 C7.71168773,19.6504232 8.04664372,18.7423575 8.29,17.808 C8.51915248,16.6872697 8.81976635,15.5823467 9.19,14.5 C9.97819736,12.3242079 11.1987103,10.3304994 12.778,8.639 C14.69,6.614 17.7,5.182 21.74,4.38 C24.8302507,3.7015418 27.9659239,3.24967331 31.122,3.028 C32.1839091,2.97327653 33.2483942,2.99600337 34.307,3.096 C34.6635511,3.12922571 35.0107435,2.9697098 35.2177934,2.67754037 C35.4248432,2.38537094 35.4602946,2.00493549 35.3107934,1.67954036 C35.1612921,1.35414523 34.8495511,1.13322569 34.493,1.1 C33.3374622,0.994121422 32.1758293,0.971062542 31.017,1.031 C27.7634202,1.25675503 24.5307612,1.72066432 21.345,2.419 C16.836,3.319 13.559,4.9 11.323,7.264 C9.55732352,9.15152632 8.19251764,11.3773301 7.311,13.807 C6.9057464,14.9893713 6.57673786,16.1965153 6.326,17.421 C6.11227241,18.2062701 5.82500188,18.9696463 5.468,19.701 C5.268,20.156 5.062,20.611 4.882,21.084 C4.65441414,21.6127171 4.5609791,22.1894723 4.61,22.763 C4.8168587,23.6556162 5.33568064,24.4450199 6.073,24.989 C6.563,25.438 6.886,25.754 6.89,26.03 C6.85360177,26.1818088 6.79639369,26.3278576 6.72,26.464 C5.52274253,28.9855874 4.05549416,31.369866 2.344,33.575 C1.62,34.458 0.86,35.487 1.019,36.517 C1.23194481,37.3111886 1.75515682,37.9864637 2.471,38.391 Z\" id=\"Shape\"/><path d=\"M12.938,15.889 C13.5402067,14.2194768 14.4735494,12.6888491 15.682,11.389 C17.015,9.978 19.32,8.939 22.534,8.3 C23.0757913,8.19258061 23.4279194,7.66629134 23.3205,7.1245 C23.2130806,6.58270867 22.6867913,6.23058063 22.145,6.338 C18.516,7.06 15.853,8.296 14.229,10.012 C12.8335648,11.5097112 11.7559042,13.2745166 11.061,15.2 C10.7243635,16.1990012 10.4501679,17.2179671 10.24,18.251 L12.193,18.684 C12.3846747,17.7381463 12.6334635,16.8047707 12.938,15.889 Z\" id=\"Shape\"/><path d=\"M33.859,6.6 L33.259,9.592 C32.6805956,9.78193603 32.1176112,10.0159557 31.575,10.292 L29.036,8.592 C28.2426795,8.07246529 27.1935673,8.18146939 26.524,8.853 L24.864,10.512 C24.1792627,11.1842524 24.0684732,12.2480835 24.6,13.047 L26.292,15.574 C26.0159557,16.1166112 25.781936,16.6795956 25.592,17.258 L22.604,17.858 C21.6703403,18.0465982 20.99924,18.8674828 21,19.82 L21,22.18 C20.9993305,23.1309129 21.6682992,23.9508176 22.6,24.141 L25.592,24.741 C25.781936,25.3194044 26.0159557,25.8823888 26.292,26.425 L24.592,28.964 C24.0724653,29.7573205 24.1814694,30.8064327 24.853,31.476 L26.513,33.136 C27.1864487,33.8176142 28.247926,33.9277833 29.047,33.399 L31.574,31.707 C32.1166112,31.9830443 32.6795956,32.217064 33.258,32.407 L33.858,35.395 C34.0461827,36.3290573 34.8671751,37.0006642 35.82,37 L38.18,37 C39.1309129,37.0006695 39.9508176,36.3317008 40.141,35.4 L40.741,32.408 C41.3194044,32.218064 41.8823888,31.9840443 42.425,31.708 L44.964,33.408 C45.7573205,33.9275347 46.8064327,33.8185306 47.476,33.147 L49.135,31.488 C49.8197373,30.8157476 49.9305268,29.7519165 49.399,28.953 L47.707,26.426 C47.9830443,25.8833888 48.217064,25.3204044 48.407,24.742 L51.395,24.142 C51.9885151,24.0220083 52.4952294,23.6385687 52.772,23.1 L54.279,24.11 C54.5697752,24.2931736 54.9063394,24.3905727 55.25,24.391 C55.7293935,24.3911137 56.1890276,24.1999894 56.527,23.86 L57.857,22.53 C58.4618334,21.9220891 58.5589835,20.973937 58.09,20.256 L56.8,18.326 C56.9871155,17.9499161 57.1488112,17.5617126 57.284,17.164 L59.547,16.713 C60.3936943,16.5466623 61.0032411,15.8028725 61,14.94 L61,13.06 C61.0030336,12.2003503 60.3977714,11.4585377 59.555,11.289 L57.282,10.836 C57.1478713,10.438184 56.9868328,10.0499542 56.8,9.674 L58.11,7.721 C58.5639303,7.00570823 58.4599909,6.07108524 57.86,5.473 L56.53,4.143 C55.922263,3.53779968 54.9738411,3.44062188 54.256,3.91 L52.326,5.2 C51.9499161,5.01288454 51.5617126,4.85118876 51.164,4.716 L50.712,2.453 C50.5457334,1.60667646 49.8024967,0.997239137 48.94,1 L47.06,1 C46.2003503,0.996966426 45.4585377,1.60222855 45.289,2.445 L44.836,4.718 C44.4381067,4.85310296 44.0498753,5.01514447 43.674,5.203 L41.721,3.893 C41.0055289,3.43984551 40.0714306,3.54372655 39.473,4.143 L38.573,5.043 C38.4436922,5.0160327 38.3120798,5.00163235 38.18,5 L35.82,5 C34.8690871,4.99933051 34.0491824,5.6682992 33.859,6.6 Z M49.147,10.52 L48.68,10.053 C50.4133051,10.2850256 51.7919506,11.621558 52.0776196,13.3468335 C52.3632887,15.072109 51.4890129,16.7816774 49.923,17.56 L48.405,17.26 C48.215064,16.6815956 47.9810443,16.1186112 47.705,15.576 L49.405,13.037 C49.9264129,12.243938 49.8186243,11.1936262 49.147,10.523 L49.147,10.52 Z M40.777,5.664 L43.063,7.2 C43.3835708,7.41496713 43.7992359,7.42625392 44.131,7.229 C44.7034389,6.89209833 45.3190971,6.63473301 45.961,6.464 C46.3277847,6.36494573 46.6067573,6.06660008 46.681,5.694 L47.218,3 L48.782,3 L49.319,5.7 C49.3932427,6.07260008 49.6722153,6.37094573 50.039,6.47 C50.6809029,6.64073301 51.2965611,6.89809833 51.869,7.235 C52.2019115,7.43046291 52.6176003,7.41684015 52.937,7.2 L55.223,5.666 L56.333,6.776 L54.8,9.063 C54.5850329,9.38357082 54.5737461,9.79923591 54.771,10.131 C55.1079017,10.7034389 55.365267,11.3190971 55.536,11.961 C55.6350543,12.3277847 55.9333999,12.6067573 56.306,12.681 L59.006,13.218 L59.006,14.782 L56.311,15.319 C55.9383999,15.3932427 55.6400543,15.6722153 55.541,16.039 C55.370267,16.6809029 55.1129017,17.2965611 54.776,17.869 C54.5787461,18.2007641 54.5900329,18.6164292 54.805,18.937 L56.339,21.223 L55.229,22.333 L53,20.842 L53,19.82 C53.0001082,19.234505 52.7444127,18.6781847 52.3,18.297 C54.0605397,16.6010013 54.6129084,14.0048874 53.6953147,11.7390689 C52.7777209,9.47325041 50.5745579,7.99305052 48.13,8 C47.5253871,8.00380086 46.9251048,8.1023295 46.351,8.292 C45.8623993,8.22081366 45.3646116,8.33032695 44.951,8.6 L42.426,10.292 C41.8833888,10.0159557 41.3204044,9.78193603 40.742,9.592 L40.142,6.604 C40.1243052,6.52387839 40.1012534,6.44503458 40.073,6.368 L40.777,5.664 Z M35.1,10.577 L35.82,7 L38.18,7 L38.899,10.58 C38.9737582,10.9515702 39.2521574,11.2489424 39.618,11.348 C40.4442241,11.5707344 41.2379049,11.9001742 41.979,12.328 C42.3092429,12.5195562 42.7197375,12.5063645 43.037,12.294 L46.063,10.27 L47.739,11.937 L45.709,14.966 C45.4966355,15.2832625 45.4834438,15.6937571 45.675,16.024 C46.1028258,16.7650951 46.4322656,17.5587759 46.655,18.385 C46.7540576,18.7508426 47.0514298,19.0292418 47.423,19.104 L51,19.819 L51,22.18 L47.42,22.899 C47.0484298,22.9737582 46.7510576,23.2521574 46.652,23.618 C46.4292656,24.4442241 46.0998258,25.2379049 45.672,25.979 C45.4804438,26.3092429 45.4936355,26.7197375 45.706,27.037 L47.73,30.063 L46.063,31.739 L43.034,29.709 C42.7167375,29.4966355 42.3062429,29.4834438 41.976,29.675 C41.2349049,30.1028258 40.4412241,30.4322656 39.615,30.655 C39.2491574,30.7540576 38.9707582,31.0514298 38.896,31.423 L38.18,35 L35.82,35 L35.101,31.42 C35.0262418,31.0484298 34.7478426,30.7510576 34.382,30.652 C33.5557759,30.4292656 32.7620951,30.0998258 32.021,29.672 C31.6907571,29.4804438 31.2802625,29.4936355 30.963,29.706 L27.937,31.73 L26.261,30.063 L28.291,27.034 C28.5033645,26.7167375 28.5165562,26.3062429 28.325,25.976 C27.8971742,25.2349049 27.5677344,24.4412241 27.345,23.615 C27.2459424,23.2491574 26.9485702,22.9707582 26.577,22.896 L23,22.18 L23,19.82 L26.58,19.101 C26.9515702,19.0262418 27.2489424,18.7478426 27.348,18.382 C27.5707344,17.5557759 27.9001742,16.7620951 28.328,16.021 C28.5195562,15.6907571 28.5063645,15.2802625 28.294,14.963 L26.27,11.937 L27.937,10.261 L30.966,12.291 C31.2832625,12.5033645 31.6937571,12.5165562 32.024,12.325 C32.7650951,11.8971742 33.5587759,11.5677344 34.385,11.345 C34.7492906,11.2446453 35.0259064,10.9475251 35.1,10.577 Z\" id=\"Shape\"/><path d=\"M37,28 C40.8659932,28 44,24.8659932 44,21 C44,17.1340068 40.8659932,14 37,14 C33.1340068,14 30,17.1340068 30,21 C30.0044086,24.8641657 33.1358343,27.9955914 37,28 Z M37,16 C39.7614237,16 42,18.2385763 42,21 C42,23.7614237 39.7614237,26 37,26 C34.2385763,26 32,23.7614237 32,21 C32.0033061,18.2399468 34.2399468,16.0033061 37,16 Z\" id=\"Shape\"/><circle id=\"Oval\" cx=\"37\" cy=\"21\" r=\"1\"/><circle id=\"Oval\" cx=\"10\" cy=\"22\" r=\"1\"/></g></g></svg>";
exports.randomIcon = randomIcon;
var ideaIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"white\" class=\"bi bi-lightbulb\" viewBox=\"0 0 16 16\">\n<path d=\"M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z\"/>\n</svg>";
exports.ideaIcon = ideaIcon;
var quoteIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"white\" class=\"bi bi-chat-quote\" viewBox=\"0 0 16 16\">\n<path d=\"M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z\"/>\n<path d=\"M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z\"/>\n</svg>";
exports.quoteIcon = quoteIcon;
var editIcon = "<svg\nxmlns=\"http://www.w3.org/2000/svg\"\nwidth=\"16\"\nheight=\"16\"\nfill=\"currentColor\"\nclass=\"bi bi-pencil-fill\"\nviewBox=\"0 0 16 16\"\n>\n<path\n  d=\"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z\"\n/>\n</svg>";
exports.editIcon = editIcon;
var deleteIcon = "<svg\nxmlns=\"http://www.w3.org/2000/svg\"\nwidth=\"16\"\nheight=\"16\"\nfill=\"currentColor\"\nclass=\"bi bi-trash-fill\"\nviewBox=\"0 0 16 16\"\n>\n<path\n  d=\"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z\"\n/>\n</svg>";
exports.deleteIcon = deleteIcon;
var archiveIcon = "<svg\nxmlns=\"http://www.w3.org/2000/svg\"\nwidth=\"16\"\nheight=\"16\"\nfill=\"currentColor\"\nclass=\"bi bi-file-zip-fill\"\nviewBox=\"0 0 16 16\"\n>\n<path\nd=\"M8.5 9.438V8.5h-1v.938a1 1 0 0 1-.03.243l-.4 1.598.93.62.93-.62-.4-1.598a1 1 0 0 1-.03-.243z\"\n/>\n<path\nd=\"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm2.5 8.5v.938l-.4 1.599a1 1 0 0 0 .416 1.074l.93.62a1 1 0 0 0 1.109 0l.93-.62a1 1 0 0 0 .415-1.074l-.4-1.599V8.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1zm1-5.5h-1v1h1v1h-1v1h1v1H9V6H8V5h1V4H8V3h1V2H8V1H6.5v1h1v1z\"\n/>\n</svg>";
exports.archiveIcon = archiveIcon;
var unarchiveIcon = "<svg width=\"18px\" height=\"18px\" viewBox=\"0 0 18 18\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch -->\n    <title>unarchive</title>\n    <desc>Created with Sketch.</desc>\n    <g id=\"Icons\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"Two-Tone\" transform=\"translate(-239.000000, -1529.000000)\">\n            <g id=\"Content\" transform=\"translate(100.000000, 1428.000000)\">\n                <g id=\"Two-Tone-/-Content-/-unarchive\" transform=\"translate(136.000000, 98.000000)\">\n                    <g>\n                        <polygon id=\"Path\" points=\"0 0 24 0 24 24 0 24\"></polygon>\n                        <path d=\"M5,19 L19,19 L19,8 L5,8 L5,19 Z M12,10 L16,14 L13.45,14 L13.45,17 L10.54,17 L10.54,14 L8,14 L12,10 Z\" id=\"\uD83D\uDD39-Secondary-Color\" fill=\"#D0D0D0\"></path>\n                        <path d=\"M20.54,5.23 L19.15,3.55 C18.88,3.21 18.47,3 18,3 L6,3 C5.53,3 5.12,3.21 4.84,3.55 L3.46,5.23 C3.17,5.57 3,6.02 3,6.5 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,6.5 C21,6.02 20.83,5.57 20.54,5.23 Z M6.24,5 L17.76,5 L18.59,6 L5.42,6 L6.24,5 Z M19,19 L5,19 L5,8 L19,8 L19,19 Z M10.55,17 L13.45,17 L13.45,14 L16,14 L12,10 L8,14 L10.55,14 L10.55,17 Z\" id=\"\uD83D\uDD39-Primary-Color\" fill=\"#1D1D1D\"></path>\n                    </g>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>";
exports.unarchiveIcon = unarchiveIcon;
},{}],"E3kk":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showArchivedOpenModal = exports.showArchivedNotes = void 0;

var _icons = require("./icons");

var _notes = require("./notes");

var unarchiveButtonElement = function unarchiveButtonElement(id) {
  return "<button data-id=".concat(id, " id=\"unarchive-button\">").concat(_icons.unarchiveIcon, "</button>");
};

var addActionListeners = function addActionListeners() {
  var unarchiveButton = document.querySelectorAll('#unarchive-button');
  unarchiveButton.forEach(function (currentBtn) {
    currentBtn.addEventListener('click', _notes.unarchiveNote, false);
  });
};

var showArchivedNotes = function showArchivedNotes(notes) {
  var html = '';
  var notesListElement = document.getElementById('archived-notes-list');
  notes.forEach(function (note, index) {
    if (note.archived) {
      html += "\n        <tr>\n          <td id=\"table-category-icon\"><span>".concat((0, _notes.getCategoryIcon)(note.category), "</span></td>\n          <td id=\"table-name\">").concat(note.name, "</td>\n          <td id=\"table-created\">").concat(note.created, "</td>\n          <td id=\"table-category\">").concat(note.category, "</td>\n          <td id=\"table-content\">").concat(note.content, "</td>\n          <td id=\"table-dates\">").concat(note.dates, "</td>\n          <td id=\"table-action-buttons\">").concat(unarchiveButtonElement(note.id), "</td>\n        </tr>\n      ");
    }
  });
  notesListElement.innerHTML = html;
  addActionListeners();
};

exports.showArchivedNotes = showArchivedNotes;

var showArchivedOpenModal = function showArchivedOpenModal(e, notes) {
  var modal = document.getElementById('modal-archived');
  modal.classList.add('open');
  showArchivedNotes(notes); // const id = e.currentTarget.dataset.id;
  // const [{ name, category, content }] = notes.filter((note) => note.archived);
  // let modal = document.getElementById('modal-new-note');
  // modal.classList.add('open');

  var exit = modal.querySelector('.modal-close');
  exit.addEventListener('click', function (event) {
    event.preventDefault();
    modal.classList.remove('open');
  }); // let inputName = document.getElementById('input-name');
  // let selectCategory = document.getElementById('select-category');
  // let inputContent = document.getElementById('input-content');
  // inputName.value = name;
  // selectCategory.value = category;
  // inputContent.value = content;
  // createNoteFormNew.addEventListener('submit', (e) => editNote(e, id), false);
};

exports.showArchivedOpenModal = showArchivedOpenModal;
},{"./icons":"wR74","./notes":"grTr"}],"grTr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unarchiveNote = exports.showStats = exports.showNotes = exports.addNote = exports.notes = exports.getCategoryIcon = void 0;

var _icons = require("./icons");

var _modal = require("./modal");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var uuidv4 = function uuidv4() {
  return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};

var notes = [{
  id: uuidv4(),
  name: 'Shoping list',
  created: '20/04/2021',
  category: 'Task',
  content: 'Tomatoes, Bread',
  dates: '',
  archived: false
}, {
  id: uuidv4(),
  name: 'The theory of evolution',
  created: '27/04/2021',
  category: 'Random Thought',
  content: 'The evolution...',
  dates: '',
  archived: false
}, {
  id: uuidv4(),
  name: 'New Feature',
  created: '05/05/2021',
  category: 'Idea',
  content: 'Implement new...',
  dates: '5/3/2021, 5/5/2021',
  archived: false
}, {
  id: uuidv4(),
  name: 'William Gaddis',
  created: '07/05/2021',
  category: 'Quote',
  content: "Power doesn't....",
  dates: '',
  archived: false
}, {
  id: uuidv4(),
  name: 'Books',
  created: '15/05/2021',
  category: 'Task',
  content: 'The Lean Startup',
  dates: '',
  archived: false
}, {
  id: uuidv4(),
  name: 'Books',
  created: '15/05/2021',
  category: 'Task',
  content: 'I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021',
  dates: '',
  archived: true
}];
exports.notes = notes;

var editButtonElement = function editButtonElement(id) {
  return "<button data-id=".concat(id, " id=\"edit-button\">").concat(_icons.editIcon, "</button>");
};

var archiveButtonElement = function archiveButtonElement(id) {
  return "<button data-id=".concat(id, " id=\"archive-button\">").concat(_icons.archiveIcon, "</button>");
};

var deleteButtonElement = function deleteButtonElement(id) {
  return "<button data-id=".concat(id, " id=\"delete-button\">").concat(_icons.deleteIcon, "</button>");
};

var notesTable = document.getElementById('notes-table');

var getCategoryIcon = function getCategoryIcon(category) {
  switch (category) {
    case 'Task':
      return _icons.taskIcon;
      break;

    case 'Idea':
      return _icons.ideaIcon;
      break;

    case 'Quote':
      return _icons.quoteIcon;
      break;

    case 'Random Thought':
      return _icons.randomIcon;
      break;

    default:
      break;
  }
};

exports.getCategoryIcon = getCategoryIcon;

var addActionListeners = function addActionListeners() {
  var editButton = document.querySelectorAll('#edit-button');
  var archiveButton = document.querySelectorAll('#archive-button');
  var deleteButton = document.querySelectorAll('#delete-button');
  editButton.forEach(function (currentBtn) {
    currentBtn.addEventListener('click', editNoteOpenModal, false);
  });
  archiveButton.forEach(function (currentBtn) {
    currentBtn.addEventListener('click', archiveNote, false);
  });
  deleteButton.forEach(function (currentBtn) {
    currentBtn.addEventListener('click', deleteNote, false);
  });
};

var showNotes = function showNotes(notes) {
  var html = '';
  var notesListElement = document.getElementById('notes-list');
  notes.forEach(function (note, index) {
    if (!note.archived) {
      html += "\n      <tr>\n      <td id=\"table-category-icon\"><span>".concat(getCategoryIcon(note.category), "</span></td>\n      <td id=\"table-name\">").concat(note.name, "</td>\n      <td id=\"table-created\">").concat(note.created, "</td>\n      <td id=\"table-category\">").concat(note.category, "</td>\n      <td id=\"table-content\">").concat(note.content, "</td>\n      <td id=\"table-dates\">").concat(note.dates, "</td>\n      <td id=\"table-action-buttons\">").concat(editButtonElement(note.id)).concat(archiveButtonElement(note.id)).concat(deleteButtonElement(note.id), "</td>\n        </tr>\n        ");
    }
  });
  notesListElement.innerHTML = html;
  addActionListeners();
};

exports.showNotes = showNotes;

var getDatesTextFromContent = function getDatesTextFromContent(contentText) {
  var matcher = /\d\/\d\/\d*/gm;
  var found = contentText.match(matcher);
  var dates = '';

  if (found && found.length) {
    dates = found.join(', ');
  }

  return dates;
};

var addNote = function addNote(e) {
  e.preventDefault();
  var _e$target = e.target,
      inputName = _e$target.inputName,
      selectCategory = _e$target.selectCategory,
      inputContent = _e$target.inputContent;
  var modal = document.getElementById('modal-new-note');
  modal.classList.remove('open');
  var d = new Date();
  var currDate = d.getDate();
  var currMonth = d.getMonth() + 1;
  var currYear = d.getFullYear();
  var formatedNow = "".concat(currDate, "/").concat(currMonth, "/").concat(currYear);
  var contentText = inputContent.value;
  notes.push({
    id: uuidv4(),
    name: inputName.value,
    category: selectCategory.value,
    content: contentText,
    dates: getDatesTextFromContent(contentText),
    created: formatedNow,
    archived: false
  });
  inputName.value = '';
  inputContent.value = '';
  showNotes(notes);
  showStats(notes);
};

exports.addNote = addNote;

var countByCategory = function countByCategory(notes, category, isArchived) {
  return notes.filter(function (note) {
    return note.category === category;
  }).filter(function (note) {
    return note.archived === isArchived;
  }).length;
};

var showStats = function showStats(notes) {
  var html = '';
  var notesListElement = document.getElementById('notes-stats-list');
  var categories = Array.from(new Set(notes.map(function (note) {
    return note.category;
  })));
  categories.sort().forEach(function (category) {
    var countNotArchived = countByCategory(notes, category, false);
    var countArchived = countByCategory(notes, category, true);
    var countArchivedEl = countArchived > 0 ? "<td id=\"table-stats-archived\"><button>".concat(countArchived, "</button></td>") : "<td id=\"table-stats-archived\">".concat(countArchived, "</td>");
    html += "\n    <tr>\n      <td id=\"table-stats-category-icon\"><span>".concat(getCategoryIcon(category), "</span></td>\n      <td id=\"table-stats-category\">").concat(category, "</td>\n      <td id=\"table-stats-active\">").concat(countNotArchived, "</td>\n      ").concat(countArchivedEl, "\n    </tr>\n    ");
  });
  notesListElement.innerHTML = html;
  addListenersToArchivedCount(notes);
};

exports.showStats = showStats;

var addListenersToArchivedCount = function addListenersToArchivedCount(notes) {
  var archivedCount = document.querySelectorAll('#table-stats-archived button');
  archivedCount.forEach(function (archivedCountEl) {
    archivedCountEl.addEventListener('click', function (e) {
      return (0, _modal.showArchivedOpenModal)(e, notes);
    }, false);
  });
};

var editNoteOpenModal = function editNoteOpenModal(e) {
  var createNoteForm = document.getElementById('add-note-form');
  var createNoteFormNew = createNoteForm.cloneNode(true);
  createNoteForm.parentNode.replaceChild(createNoteFormNew, createNoteForm);
  var id = e.currentTarget.dataset.id;

  var _notes$filter = notes.filter(function (note) {
    return note.id === id;
  }),
      _notes$filter2 = _slicedToArray(_notes$filter, 1),
      _notes$filter2$ = _notes$filter2[0],
      name = _notes$filter2$.name,
      category = _notes$filter2$.category,
      content = _notes$filter2$.content;

  var modal = document.getElementById('modal-new-note');
  modal.classList.add('open');
  var exit = modal.querySelector('.modal-close');
  exit.addEventListener('click', function (event) {
    event.preventDefault();
    modal.classList.remove('open');
  });
  var inputName = document.getElementById('input-name');
  var selectCategory = document.getElementById('select-category');
  var inputContent = document.getElementById('input-content');
  inputName.value = name;
  selectCategory.value = category;
  inputContent.value = content;
  createNoteFormNew.addEventListener('submit', function (e) {
    return editNote(e, id);
  }, false);
};

var editNote = function editNote(e, id) {
  e.preventDefault();
  var _e$target2 = e.target,
      inputName = _e$target2.inputName,
      selectCategory = _e$target2.selectCategory,
      inputContent = _e$target2.inputContent;
  var modal = document.getElementById('modal-new-note');
  modal.classList.remove('open');
  var contentText = inputContent.value;
  notes.forEach(function (note) {
    if (note.id === id) {
      note.name = inputName.value;
      note.category = selectCategory.value;
      note.content = inputContent.value;
      note.dates = getDatesTextFromContent(contentText);
    }
  });
  inputName.value = '';
  inputContent.value = '';
  showNotes(notes);
  showStats(notes);
};

var archiveNote = function archiveNote(e) {
  var id = e.currentTarget.dataset.id;
  notes.forEach(function (note) {
    if (note.id === id) {
      note.archived = true;
    }
  });
  showNotes(notes);
  showStats(notes);
  addListenersToArchivedCount(notes);
};

var unarchiveNote = function unarchiveNote(e) {
  var id = e.currentTarget.dataset.id;
  notes.forEach(function (note) {
    if (note.id === id) {
      note.archived = false;
    }
  });
  showNotes(notes);
  showStats(notes);
  (0, _modal.showArchivedNotes)(notes);
  addListenersToArchivedCount(notes);
};

exports.unarchiveNote = unarchiveNote;

var deleteNote = function deleteNote(e) {
  var id = e.currentTarget.dataset.id;
  var newNotes = notes.filter(function (note) {
    return note.id !== id;
  });
  exports.notes = notes = newNotes.slice();
  showNotes(newNotes);
  showStats(newNotes);
};
},{"./icons":"wR74","./modal":"E3kk"}],"H99C":[function(require,module,exports) {
"use strict";

require("./styles.scss");

var _notes = require("./notes");

function init() {
  (0, _notes.showNotes)(_notes.notes);
  (0, _notes.showStats)(_notes.notes);
  var createNoteModal = document.getElementById('create-note');
  createNoteModal.addEventListener('click', function (event) {
    event.preventDefault();
    var modal = document.getElementById('modal-new-note');
    modal.classList.add('open');
    var exits = modal.querySelectorAll('.modal-exit');
    exits.forEach(function (exit) {
      exit.addEventListener('click', function (event) {
        event.preventDefault();
        modal.classList.remove('open');
      });
    });
  });
  var createNoteForm = document.getElementById('add-note-form');
  createNoteForm.addEventListener('submit', _notes.addNote);
}

if (document.readyState !== 'loading') {
  init();
} else {
  document.addEventListener('DOMContentLoaded', function () {
    init();
  });
}
},{"./styles.scss":"aiJW","./notes":"grTr"}]},{},["H99C"], null)
//# sourceMappingURL=src.ae25e018.js.map