(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~pages-index-index"],{

/***/ "0538":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "1c0b");
var isObject = __webpack_require__(/*! ../internals/is-object */ "861d");

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),

/***/ "0ccb":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/string-pad.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(/*! ../internals/to-length */ "50c4");
var repeat = __webpack_require__(/*! ../internals/string-repeat */ "1148");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "1d80");

var ceil = Math.ceil;

// `String.prototype.{ padStart, padEnd }` methods implementation
var createMethod = function (IS_END) {
  return function ($this, maxLength, fillString) {
    var S = String(requireObjectCoercible($this));
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : String(fillString);
    var intMaxLength = toLength(maxLength);
    var fillLen, stringFiller;
    if (intMaxLength <= stringLength || fillStr == '') return S;
    fillLen = intMaxLength - stringLength;
    stringFiller = repeat.call(fillStr, ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
    return IS_END ? S + stringFiller : stringFiller + S;
  };
};

module.exports = {
  // `String.prototype.padStart` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.padstart
  start: createMethod(false),
  // `String.prototype.padEnd` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.padend
  end: createMethod(true)
};


/***/ }),

/***/ "1148":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/string-repeat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "a691");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "1d80");

// `String.prototype.repeat` method implementation
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
module.exports = ''.repeat || function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "131a":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "23e7");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "d2bb");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),

/***/ "1da1":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.to-string */ "d3b7");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _asyncToGenerator;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "1de5":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "1e25":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim-end.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "23e7");
var $trimEnd = __webpack_require__(/*! ../internals/string-trim */ "58a8").end;
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "c8d2");

var FORCED = forcedStringTrimMethod('trimEnd');

var trimEnd = FORCED ? function trimEnd() {
  return $trimEnd(this);
} : ''.trimEnd;

// `String.prototype.{ trimEnd, trimRight }` methods
// https://github.com/tc39/ecmascript-string-left-right-trim
$({ target: 'String', proto: true, forced: FORCED }, {
  trimEnd: trimEnd,
  trimRight: trimEnd
});


/***/ }),

/***/ "257e":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _assertThisInitialized;

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "262e":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _inherits;

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(/*! ./setPrototypeOf */ "b380"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) (0, _setPrototypeOf.default)(subClass, superClass);
}

/***/ }),

/***/ "2caf":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.reflect.construct */ "4ae1");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _createSuper;

var _getPrototypeOf = _interopRequireDefault(__webpack_require__(/*! ./getPrototypeOf */ "7e84"));

var _isNativeReflectConstruct = _interopRequireDefault(__webpack_require__(/*! ./isNativeReflectConstruct */ "d967"));

var _possibleConstructorReturn = _interopRequireDefault(__webpack_require__(/*! ./possibleConstructorReturn */ "99de"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createSuper(Derived) {
  var hasNativeReflectConstruct = (0, _isNativeReflectConstruct.default)();
  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf.default)(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn.default)(this, result);
  };
}

/***/ }),

/***/ "3410":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "23e7");
var fails = __webpack_require__(/*! ../internals/fails */ "d039");
var toObject = __webpack_require__(/*! ../internals/to-object */ "7b0b");
var nativeGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "e163");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "e177");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),

/***/ "4362":
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ "df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "4478":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.reflect.construct */ "4ae1");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _construct;

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(/*! ./setPrototypeOf */ "b380"));

var _isNativeReflectConstruct = _interopRequireDefault(__webpack_require__(/*! ./isNativeReflectConstruct */ "d967"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _construct(Parent, args, Class) {
  if ((0, _isNativeReflectConstruct.default)()) {
    exports.default = _construct = Reflect.construct;
  } else {
    exports.default = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) (0, _setPrototypeOf.default)(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "4ae1":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.construct.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "23e7");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "d066");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "1c0b");
var anObject = __webpack_require__(/*! ../internals/an-object */ "825a");
var isObject = __webpack_require__(/*! ../internals/is-object */ "861d");
var create = __webpack_require__(/*! ../internals/object-create */ "7c73");
var bind = __webpack_require__(/*! ../internals/function-bind */ "0538");
var fails = __webpack_require__(/*! ../internals/fails */ "d039");

var nativeConstruct = getBuiltIn('Reflect', 'construct');

// `Reflect.construct` method
// https://tc39.github.io/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});
var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "4e82":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.sort.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "23e7");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "1c0b");
var toObject = __webpack_require__(/*! ../internals/to-object */ "7b0b");
var fails = __webpack_require__(/*! ../internals/fails */ "d039");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "a640");

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD;

// `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "4ec9":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/es.map.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(/*! ../internals/collection */ "6d61");
var collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ "6566");

// `Map` constructor
// https://tc39.github.io/ecma262/#sec-map-objects
module.exports = collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "5377":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.flags.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "83ab");
var objectDefinePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "9bf2");
var regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "ad6d");
var UNSUPPORTED_Y = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "9f7f").UNSUPPORTED_Y;

// `RegExp.prototype.flags` getter
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
if (DESCRIPTORS && (/./g.flags != 'g' || UNSUPPORTED_Y)) {
  objectDefinePropertyModule.f(RegExp.prototype, 'flags', {
    configurable: true,
    get: regExpFlags
  });
}


/***/ }),

/***/ "53ca":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "a4d3");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "e01a");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "d28b");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "d3b7");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "3ca3");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "ddb0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _typeof;

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    exports.default = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    exports.default = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "64e5":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/date-to-iso-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "d039");
var padStart = __webpack_require__(/*! ../internals/string-pad */ "0ccb").start;

var abs = Math.abs;
var DatePrototype = Date.prototype;
var getTime = DatePrototype.getTime;
var nativeDateToISOString = DatePrototype.toISOString;

// `Date.prototype.toISOString` method implementation
// https://tc39.github.io/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit fails here:
module.exports = (fails(function () {
  return nativeDateToISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  nativeDateToISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var date = this;
  var year = date.getUTCFullYear();
  var milliseconds = date.getUTCMilliseconds();
  var sign = year < 0 ? '-' : year > 9999 ? '+' : '';
  return sign + padStart(abs(year), sign ? 6 : 4, 0) +
    '-' + padStart(date.getUTCMonth() + 1, 2, 0) +
    '-' + padStart(date.getUTCDate(), 2, 0) +
    'T' + padStart(date.getUTCHours(), 2, 0) +
    ':' + padStart(date.getUTCMinutes(), 2, 0) +
    ':' + padStart(date.getUTCSeconds(), 2, 0) +
    '.' + padStart(milliseconds, 3, 0) +
    'Z';
} : nativeDateToISOString;


/***/ }),

/***/ "6566":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/collection-strong.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "9bf2").f;
var create = __webpack_require__(/*! ../internals/object-create */ "7c73");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "e2cc");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "0366");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "19aa");
var iterate = __webpack_require__(/*! ../internals/iterate */ "2266");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "7dd0");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "2626");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "83ab");
var fastKey = __webpack_require__(/*! ../internals/internal-metadata */ "f183").fastKey;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "69f3");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "6c57":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.global-this.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "23e7");
var global = __webpack_require__(/*! ../internals/global */ "da84");

// `globalThis` object
// https://github.com/tc39/proposal-global
$({ global: true }, {
  globalThis: global
});


/***/ }),

/***/ "7e84":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "3410");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "131a");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _getPrototypeOf;

function _getPrototypeOf(o) {
  exports.default = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "9072":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.map */ "4ec9");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "d3b7");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "3ca3");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "ddb0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _wrapNativeSuper;

var _getPrototypeOf = _interopRequireDefault(__webpack_require__(/*! ./getPrototypeOf */ "7e84"));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(/*! ./setPrototypeOf */ "b380"));

var _isNativeFunction = _interopRequireDefault(__webpack_require__(/*! ./isNativeFunction */ "fa95"));

var _construct = _interopRequireDefault(__webpack_require__(/*! ./construct */ "4478"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  exports.default = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !(0, _isNativeFunction.default)(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return (0, _construct.default)(Class, arguments, (0, _getPrototypeOf.default)(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return (0, _setPrototypeOf.default)(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/***/ }),

/***/ "96cf":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "99de":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _possibleConstructorReturn;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! ../../helpers/esm/typeof */ "53ca"));

var _assertThisInitialized = _interopRequireDefault(__webpack_require__(/*! ./assertThisInitialized */ "257e"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) {
  if (call && ((0, _typeof2.default)(call) === "object" || typeof call === "function")) {
    return call;
  }

  return (0, _assertThisInitialized.default)(self);
}

/***/ }),

/***/ "a9ff":
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process, console) {

var _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault */ "4ea4");

__webpack_require__(/*! core-js/modules/es.symbol */ "a4d3");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "e01a");

__webpack_require__(/*! core-js/modules/es.array.concat */ "99af");

__webpack_require__(/*! core-js/modules/es.array.find */ "7db0");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "4160");

__webpack_require__(/*! core-js/modules/es.array.from */ "a630");

__webpack_require__(/*! core-js/modules/es.array.includes */ "caad");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "c975");

__webpack_require__(/*! core-js/modules/es.array.join */ "a15b");

__webpack_require__(/*! core-js/modules/es.array.last-index-of */ "baa5");

__webpack_require__(/*! core-js/modules/es.array.map */ "d81d");

__webpack_require__(/*! core-js/modules/es.array.reverse */ "26e9");

__webpack_require__(/*! core-js/modules/es.array.slice */ "fb6a");

__webpack_require__(/*! core-js/modules/es.array.sort */ "4e82");

__webpack_require__(/*! core-js/modules/es.array.splice */ "a434");

__webpack_require__(/*! core-js/modules/es.date.to-iso-string */ "accc");

__webpack_require__(/*! core-js/modules/es.date.to-json */ "f4b3");

__webpack_require__(/*! core-js/modules/es.global-this */ "6c57");

__webpack_require__(/*! core-js/modules/es.number.constructor */ "a9e3");

__webpack_require__(/*! core-js/modules/es.object.keys */ "b64b");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "d3b7");

__webpack_require__(/*! core-js/modules/es.parse-int */ "e25e");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "4d63");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "ac1f");

__webpack_require__(/*! core-js/modules/es.regexp.flags */ "5377");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "25f0");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "3ca3");

__webpack_require__(/*! core-js/modules/es.string.match */ "466d");

__webpack_require__(/*! core-js/modules/es.string.replace */ "5319");

__webpack_require__(/*! core-js/modules/es.string.search */ "841c");

__webpack_require__(/*! core-js/modules/es.string.split */ "1276");

__webpack_require__(/*! core-js/modules/es.string.trim */ "498a");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "159b");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "ddb0");

__webpack_require__(/*! core-js/modules/web.url.to-json */ "bf19");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! regenerator-runtime/runtime */ "96cf");

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "1da1"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "5530"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "2909"));

var _createForOfIteratorHelper2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "b85c"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "bee2"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "ade3"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "d4ec"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "257e"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "262e"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "2caf"));

var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper */ "9072"));

var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ "78b5");

"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

function t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}

function s(e, t, s) {
  return e(s = {
    path: t,
    exports: {},
    require: function require(e, t) {
      return function () {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t && s.path);
    }
  }, s.exports), s.exports;
}

var n = s(function (e, t) {
  var s;
  e.exports = (s = s || function (e, t) {
    var s = Object.create || function () {
      function e() {}

      return function (t) {
        var s;
        return e.prototype = t, s = new e(), e.prototype = null, s;
      };
    }(),
        n = {},
        r = n.lib = {},
        o = r.Base = {
      extend: function extend(e) {
        var t = s(this);
        return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {
          t.$super.init.apply(this, arguments);
        }), t.init.prototype = t, t.$super = this, t;
      },
      create: function create() {
        var e = this.extend();
        return e.init.apply(e, arguments), e;
      },
      init: function init() {},
      mixIn: function mixIn(e) {
        for (var t in e) {
          e.hasOwnProperty(t) && (this[t] = e[t]);
        }

        e.hasOwnProperty("toString") && (this.toString = e.toString);
      },
      clone: function clone() {
        return this.init.prototype.extend(this);
      }
    },
        i = r.WordArray = o.extend({
      init: function init(e, t) {
        e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length;
      },
      toString: function toString(e) {
        return (e || c).stringify(this);
      },
      concat: function concat(e) {
        var t = this.words,
            s = e.words,
            n = this.sigBytes,
            r = e.sigBytes;
        if (this.clamp(), n % 4) for (var o = 0; o < r; o++) {
          var i = s[o >>> 2] >>> 24 - o % 4 * 8 & 255;
          t[n + o >>> 2] |= i << 24 - (n + o) % 4 * 8;
        } else for (o = 0; o < r; o += 4) {
          t[n + o >>> 2] = s[o >>> 2];
        }
        return this.sigBytes += r, this;
      },
      clamp: function clamp() {
        var t = this.words,
            s = this.sigBytes;
        t[s >>> 2] &= 4294967295 << 32 - s % 4 * 8, t.length = e.ceil(s / 4);
      },
      clone: function clone() {
        var e = o.clone.call(this);
        return e.words = this.words.slice(0), e;
      },
      random: function random(t) {
        for (var s, n = [], r = function r(t) {
          t = t;
          var s = 987654321,
              n = 4294967295;
          return function () {
            var r = ((s = 36969 * (65535 & s) + (s >> 16) & n) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & n) & n;
            return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);
          };
        }, o = 0; o < t; o += 4) {
          var a = r(4294967296 * (s || e.random()));
          s = 987654071 * a(), n.push(4294967296 * a() | 0);
        }

        return new i.init(n, t);
      }
    }),
        a = n.enc = {},
        c = a.Hex = {
      stringify: function stringify(e) {
        for (var t = e.words, s = e.sigBytes, n = [], r = 0; r < s; r++) {
          var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
          n.push((o >>> 4).toString(16)), n.push((15 & o).toString(16));
        }

        return n.join("");
      },
      parse: function parse(e) {
        for (var t = e.length, s = [], n = 0; n < t; n += 2) {
          s[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;
        }

        return new i.init(s, t / 2);
      }
    },
        u = a.Latin1 = {
      stringify: function stringify(e) {
        for (var t = e.words, s = e.sigBytes, n = [], r = 0; r < s; r++) {
          var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
          n.push(String.fromCharCode(o));
        }

        return n.join("");
      },
      parse: function parse(e) {
        for (var t = e.length, s = [], n = 0; n < t; n++) {
          s[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;
        }

        return new i.init(s, t);
      }
    },
        h = a.Utf8 = {
      stringify: function stringify(e) {
        try {
          return decodeURIComponent(escape(u.stringify(e)));
        } catch (e) {
          throw new Error("Malformed UTF-8 data");
        }
      },
      parse: function parse(e) {
        return u.parse(unescape(encodeURIComponent(e)));
      }
    },
        l = r.BufferedBlockAlgorithm = o.extend({
      reset: function reset() {
        this._data = new i.init(), this._nDataBytes = 0;
      },
      _append: function _append(e) {
        "string" == typeof e && (e = h.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
      },
      _process: function _process(t) {
        var s = this._data,
            n = s.words,
            r = s.sigBytes,
            o = this.blockSize,
            a = r / (4 * o),
            c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * o,
            u = e.min(4 * c, r);

        if (c) {
          for (var h = 0; h < c; h += o) {
            this._doProcessBlock(n, h);
          }

          var l = n.splice(0, c);
          s.sigBytes -= u;
        }

        return new i.init(l, u);
      },
      clone: function clone() {
        var e = o.clone.call(this);
        return e._data = this._data.clone(), e;
      },
      _minBufferSize: 0
    }),
        d = (r.Hasher = l.extend({
      cfg: o.extend(),
      init: function init(e) {
        this.cfg = this.cfg.extend(e), this.reset();
      },
      reset: function reset() {
        l.reset.call(this), this._doReset();
      },
      update: function update(e) {
        return this._append(e), this._process(), this;
      },
      finalize: function finalize(e) {
        return e && this._append(e), this._doFinalize();
      },
      blockSize: 16,
      _createHelper: function _createHelper(e) {
        return function (t, s) {
          return new e.init(s).finalize(t);
        };
      },
      _createHmacHelper: function _createHmacHelper(e) {
        return function (t, s) {
          return new d.HMAC.init(e, s).finalize(t);
        };
      }
    }), n.algo = {});

    return n;
  }(Math), s);
}),
    r = (s(function (e, t) {
  var s;
  e.exports = (s = n, function (e) {
    var t = s,
        n = t.lib,
        r = n.WordArray,
        o = n.Hasher,
        i = t.algo,
        a = [];
    !function () {
      for (var t = 0; t < 64; t++) {
        a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;
      }
    }();
    var c = i.MD5 = o.extend({
      _doReset: function _doReset() {
        this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);
      },
      _doProcessBlock: function _doProcessBlock(e, t) {
        for (var s = 0; s < 16; s++) {
          var n = t + s,
              r = e[n];
          e[n] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
        }

        var o = this._hash.words,
            i = e[t + 0],
            c = e[t + 1],
            f = e[t + 2],
            p = e[t + 3],
            g = e[t + 4],
            m = e[t + 5],
            y = e[t + 6],
            _ = e[t + 7],
            v = e[t + 8],
            w = e[t + 9],
            S = e[t + 10],
            k = e[t + 11],
            T = e[t + 12],
            P = e[t + 13],
            A = e[t + 14],
            I = e[t + 15],
            E = o[0],
            O = o[1],
            U = o[2],
            b = o[3];
        E = u(E, O, U, b, i, 7, a[0]), b = u(b, E, O, U, c, 12, a[1]), U = u(U, b, E, O, f, 17, a[2]), O = u(O, U, b, E, p, 22, a[3]), E = u(E, O, U, b, g, 7, a[4]), b = u(b, E, O, U, m, 12, a[5]), U = u(U, b, E, O, y, 17, a[6]), O = u(O, U, b, E, _, 22, a[7]), E = u(E, O, U, b, v, 7, a[8]), b = u(b, E, O, U, w, 12, a[9]), U = u(U, b, E, O, S, 17, a[10]), O = u(O, U, b, E, k, 22, a[11]), E = u(E, O, U, b, T, 7, a[12]), b = u(b, E, O, U, P, 12, a[13]), U = u(U, b, E, O, A, 17, a[14]), E = h(E, O = u(O, U, b, E, I, 22, a[15]), U, b, c, 5, a[16]), b = h(b, E, O, U, y, 9, a[17]), U = h(U, b, E, O, k, 14, a[18]), O = h(O, U, b, E, i, 20, a[19]), E = h(E, O, U, b, m, 5, a[20]), b = h(b, E, O, U, S, 9, a[21]), U = h(U, b, E, O, I, 14, a[22]), O = h(O, U, b, E, g, 20, a[23]), E = h(E, O, U, b, w, 5, a[24]), b = h(b, E, O, U, A, 9, a[25]), U = h(U, b, E, O, p, 14, a[26]), O = h(O, U, b, E, v, 20, a[27]), E = h(E, O, U, b, P, 5, a[28]), b = h(b, E, O, U, f, 9, a[29]), U = h(U, b, E, O, _, 14, a[30]), E = l(E, O = h(O, U, b, E, T, 20, a[31]), U, b, m, 4, a[32]), b = l(b, E, O, U, v, 11, a[33]), U = l(U, b, E, O, k, 16, a[34]), O = l(O, U, b, E, A, 23, a[35]), E = l(E, O, U, b, c, 4, a[36]), b = l(b, E, O, U, g, 11, a[37]), U = l(U, b, E, O, _, 16, a[38]), O = l(O, U, b, E, S, 23, a[39]), E = l(E, O, U, b, P, 4, a[40]), b = l(b, E, O, U, i, 11, a[41]), U = l(U, b, E, O, p, 16, a[42]), O = l(O, U, b, E, y, 23, a[43]), E = l(E, O, U, b, w, 4, a[44]), b = l(b, E, O, U, T, 11, a[45]), U = l(U, b, E, O, I, 16, a[46]), E = d(E, O = l(O, U, b, E, f, 23, a[47]), U, b, i, 6, a[48]), b = d(b, E, O, U, _, 10, a[49]), U = d(U, b, E, O, A, 15, a[50]), O = d(O, U, b, E, m, 21, a[51]), E = d(E, O, U, b, T, 6, a[52]), b = d(b, E, O, U, p, 10, a[53]), U = d(U, b, E, O, S, 15, a[54]), O = d(O, U, b, E, c, 21, a[55]), E = d(E, O, U, b, v, 6, a[56]), b = d(b, E, O, U, I, 10, a[57]), U = d(U, b, E, O, y, 15, a[58]), O = d(O, U, b, E, P, 21, a[59]), E = d(E, O, U, b, g, 6, a[60]), b = d(b, E, O, U, k, 10, a[61]), U = d(U, b, E, O, f, 15, a[62]), O = d(O, U, b, E, w, 21, a[63]), o[0] = o[0] + E | 0, o[1] = o[1] + O | 0, o[2] = o[2] + U | 0, o[3] = o[3] + b | 0;
      },
      _doFinalize: function _doFinalize() {
        var t = this._data,
            s = t.words,
            n = 8 * this._nDataBytes,
            r = 8 * t.sigBytes;
        s[r >>> 5] |= 128 << 24 - r % 32;
        var o = e.floor(n / 4294967296),
            i = n;
        s[15 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), s[14 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (s.length + 1), this._process();

        for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {
          var h = c[u];
          c[u] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);
        }

        return a;
      },
      clone: function clone() {
        var e = o.clone.call(this);
        return e._hash = this._hash.clone(), e;
      }
    });

    function u(e, t, s, n, r, o, i) {
      var a = e + (t & s | ~t & n) + r + i;
      return (a << o | a >>> 32 - o) + t;
    }

    function h(e, t, s, n, r, o, i) {
      var a = e + (t & n | s & ~n) + r + i;
      return (a << o | a >>> 32 - o) + t;
    }

    function l(e, t, s, n, r, o, i) {
      var a = e + (t ^ s ^ n) + r + i;
      return (a << o | a >>> 32 - o) + t;
    }

    function d(e, t, s, n, r, o, i) {
      var a = e + (s ^ (t | ~n)) + r + i;
      return (a << o | a >>> 32 - o) + t;
    }

    t.MD5 = o._createHelper(c), t.HmacMD5 = o._createHmacHelper(c);
  }(Math), s.MD5);
}), s(function (e, t) {
  var s, r, o;
  e.exports = (r = (s = n).lib.Base, o = s.enc.Utf8, void (s.algo.HMAC = r.extend({
    init: function init(e, t) {
      e = this._hasher = new e.init(), "string" == typeof t && (t = o.parse(t));
      var s = e.blockSize,
          n = 4 * s;
      t.sigBytes > n && (t = e.finalize(t)), t.clamp();

      for (var r = this._oKey = t.clone(), i = this._iKey = t.clone(), a = r.words, c = i.words, u = 0; u < s; u++) {
        a[u] ^= 1549556828, c[u] ^= 909522486;
      }

      r.sigBytes = i.sigBytes = n, this.reset();
    },
    reset: function reset() {
      var e = this._hasher;
      e.reset(), e.update(this._iKey);
    },
    update: function update(e) {
      return this._hasher.update(e), this;
    },
    finalize: function finalize(e) {
      var t = this._hasher,
          s = t.finalize(e);
      return t.reset(), t.finalize(this._oKey.clone().concat(s));
    }
  })));
}), s(function (e, t) {
  e.exports = n.HmacMD5;
}));

function o(e) {
  return function (t) {
    if (!((t = t || {}).success || t.fail || t.complete)) return e.call(this, t);
    e.call(this, t).then(function (e) {
      t.success && t.success(e), t.complete && t.complete(e);
    }, function (e) {
      t.fail && t.fail(e), t.complete && t.complete(e);
    });
  };
}

var i = /*#__PURE__*/function (_Error) {
  (0, _inherits2.default)(i, _Error);

  var _super = (0, _createSuper2.default)(i);

  function i(e) {
    var _this;

    (0, _classCallCheck2.default)(this, i);
    _this = _super.call(this, e.message), _this.errMsg = e.message || "", Object.defineProperties((0, _assertThisInitialized2.default)(_this), {
      code: {
        get: function get() {
          return e.code;
        }
      },
      requestId: {
        get: function get() {
          return e.requestId;
        }
      },
      message: {
        get: function get() {
          return this.errMsg;
        },
        set: function set(e) {
          this.errMsg = e;
        }
      }
    });
    return _this;
  }

  return i;
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));

var _e2 = (0, _uniI18n.initVueI18n)({
  "zh-Hans": {
    "uniCloud.init.paramRequired": "缺少参数：{param}",
    "uniCloud.uploadFile.fileError": "filePath应为File对象"
  },
  "zh-Hant": {
    "uniCloud.init.paramRequired": "缺少参数：{param}",
    "uniCloud.uploadFile.fileError": "filePath应为File对象"
  },
  en: {
    "uniCloud.init.paramRequired": "{param} required",
    "uniCloud.uploadFile.fileError": "filePath should be instance of File"
  },
  fr: {
    "uniCloud.init.paramRequired": "{param} required",
    "uniCloud.uploadFile.fileError": "filePath should be instance of File"
  },
  es: {
    "uniCloud.init.paramRequired": "{param} required",
    "uniCloud.uploadFile.fileError": "filePath should be instance of File"
  }
}, "zh-Hans"),
    a = _e2.t,
    c = _e2.setLocale,
    u = _e2.getLocale;

var h, l, d;

try {
  h = __webpack_require__(/*! uni-stat-config */ "c667").default || __webpack_require__(/*! uni-stat-config */ "c667");
} catch (e) {
  h = {
    appid: ""
  };
}

function f() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  var t = "";

  for (; t.length < e;) {
    t += Math.random().toString(32).substring(2);
  }

  return t.substring(0, e);
}

function p() {
  var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),
      e = _uni$getSystemInfoSyn.deviceId;

  return {
    PLATFORM: "h5",
    OS: d,
    APPID: h.appid,
    LOCALE: u(),
    DEVICEID: e,
    CLIENT_SDK_VERSION: "1.0.1"
  };
}

function g() {
  if ("n" === m()) {
    try {
      l = plus.runtime.getDCloudId();
    } catch (e) {
      l = "";
    }

    return l;
  }

  return l || (l = f(32), uni.setStorage({
    key: "__DC_CLOUD_UUID",
    data: l
  })), l;
}

function m() {
  var _appPlus$h5$mpWeixi;

  return (_appPlus$h5$mpWeixi = {
    "app-plus": "n",
    h5: "h5",
    "mp-weixin": "wx"
  }, (0, _defineProperty2.default)(_appPlus$h5$mpWeixi, ["y", "a", "p", "mp-ali"].reverse().join(""), "ali"), (0, _defineProperty2.default)(_appPlus$h5$mpWeixi, "mp-baidu", "bd"), (0, _defineProperty2.default)(_appPlus$h5$mpWeixi, "mp-toutiao", "tt"), (0, _defineProperty2.default)(_appPlus$h5$mpWeixi, "mp-qq", "qq"), (0, _defineProperty2.default)(_appPlus$h5$mpWeixi, "quickapp-native", "qn"), _appPlus$h5$mpWeixi)["h5"];
}

var y = {
  sign: function sign(e, t) {
    var s = "";
    return Object.keys(e).sort().forEach(function (t) {
      e[t] && (s = s + "&" + t + "=" + e[t]);
    }), s = s.slice(1), r(s, t).toString();
  },
  wrappedRequest: function wrappedRequest(e, t) {
    return new Promise(function (s, n) {
      t(Object.assign(e, {
        complete: function complete(e) {
          e || (e = {}),  false && false;
          var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];
          if (!e.statusCode || e.statusCode >= 400) return n(new i({
            code: "SYS_ERR",
            message: e.errMsg || "request:fail",
            requestId: t
          }));
          var r = e.data;
          if (r.error) return n(new i({
            code: r.error.code,
            message: r.error.message,
            requestId: t
          }));
          r.result = r.data, r.requestId = t, delete r.data, s(r);
        }
      }));
    });
  }
};
var _ = {
  request: function request(e) {
    return uni.request(e);
  },
  uploadFile: function uploadFile(e) {
    return uni.uploadFile(e);
  },
  setStorageSync: function setStorageSync(e, t) {
    return uni.setStorageSync(e, t);
  },
  getStorageSync: function getStorageSync(e) {
    return uni.getStorageSync(e);
  },
  removeStorageSync: function removeStorageSync(e) {
    return uni.removeStorageSync(e);
  },
  clearStorageSync: function clearStorageSync() {
    return uni.clearStorageSync();
  }
};

var v = /*#__PURE__*/function () {
  function v(e) {
    (0, _classCallCheck2.default)(this, v);
    ["spaceId", "clientSecret"].forEach(function (t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error(a("uniCloud.init.paramRequired", {
        param: t
      }));
    }), this.config = Object.assign({}, {
      endpoint: "https://api.bspapp.com"
    }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = _;
  }

  (0, _createClass2.default)(v, [{
    key: "setAccessToken",
    value: function setAccessToken(e) {
      this.accessToken = e;
    }
  }, {
    key: "requestWrapped",
    value: function requestWrapped(e) {
      return y.wrappedRequest(e, this.adapter.request);
    }
  }, {
    key: "requestAuth",
    value: function requestAuth(e) {
      return this.requestWrapped(e);
    }
  }, {
    key: "request",
    value: function request(e, t) {
      var _this2 = this;

      return Promise.resolve().then(function () {
        return _this2.hasAccessToken ? t ? _this2.requestWrapped(e) : _this2.requestWrapped(e).catch(function (t) {
          return new Promise(function (e, s) {
            !t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? s(t) : e();
          }).then(function () {
            return _this2.getAccessToken();
          }).then(function () {
            var t = _this2.rebuildRequest(e);

            return _this2.request(t, !0);
          });
        }) : _this2.getAccessToken().then(function () {
          var t = _this2.rebuildRequest(e);

          return _this2.request(t, !0);
        });
      });
    }
  }, {
    key: "rebuildRequest",
    value: function rebuildRequest(e) {
      var t = Object.assign({}, e);
      return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = y.sign(t.data, this.config.clientSecret), t;
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e, t) {
      var s = Object.assign({}, e, {
        spaceId: this.config.spaceId,
        timestamp: Date.now()
      }),
          n = {
        "Content-Type": "application/json"
      };
      return "auth" !== t && (s.token = this.accessToken, n["x-basement-token"] = this.accessToken), n["x-serverless-sign"] = y.sign(s, this.config.clientSecret), {
        url: this.config.requestUrl,
        method: "POST",
        data: s,
        dataType: "json",
        header: n
      };
    }
  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      var _this3 = this;

      return this.requestAuth(this.setupRequest({
        method: "serverless.auth.user.anonymousAuthorize",
        params: "{}"
      }, "auth")).then(function (e) {
        return new Promise(function (t, s) {
          e.result && e.result.accessToken ? (_this3.setAccessToken(e.result.accessToken), t(_this3.accessToken)) : s(new i({
            code: "AUTH_FAILED",
            message: "获取accessToken失败"
          }));
        });
      });
    }
  }, {
    key: "authorize",
    value: function authorize() {
      this.getAccessToken();
    }
  }, {
    key: "callFunction",
    value: function callFunction(e) {
      var t = {
        method: "serverless.function.runtime.invoke",
        params: JSON.stringify({
          functionTarget: e.name,
          functionArgs: e.data || {}
        })
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "getOSSUploadOptionsFromPath",
    value: function getOSSUploadOptionsFromPath(e) {
      var t = {
        method: "serverless.file.resource.generateProximalSign",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref) {
      var _this4 = this;

      var e = _ref.url,
          t = _ref.formData,
          s = _ref.name,
          n = _ref.filePath,
          r = _ref.fileType,
          o = _ref.onUploadProgress;
      return new Promise(function (a, c) {
        var u = _this4.adapter.uploadFile({
          url: e,
          formData: t,
          name: s,
          filePath: n,
          fileType: r,
          header: {
            "X-OSS-server-side-encrpytion": "AES256"
          },
          success: function success(e) {
            e && e.statusCode < 400 ? a(e) : c(new i({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            c(new i({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });

        "function" == typeof o && u && "function" == typeof u.onProgressUpdate && u.onProgressUpdate(function (e) {
          o({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "reportOSSUpload",
    value: function reportOSSUpload(e) {
      var t = {
        method: "serverless.file.resource.report",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(_ref2) {
      var _this5 = this;

      var e = _ref2.filePath,
          t = _ref2.cloudPath,
          _ref2$fileType = _ref2.fileType,
          s = _ref2$fileType === void 0 ? "image" : _ref2$fileType,
          n = _ref2.onUploadProgress,
          r = _ref2.config;
      if (!t) throw new i({
        code: "CLOUDPATH_REQUIRED",
        message: "cloudPath不可为空"
      });
      var o = r && r.envType || this.config.envType;
      var a, c;
      return this.getOSSUploadOptionsFromPath({
        env: o,
        filename: t
      }).then(function (t) {
        var r = t.result;
        a = r.id, c = "https://" + r.cdnDomain + "/" + r.ossPath;
        var o = {
          url: "https://" + r.host,
          formData: {
            "Cache-Control": "max-age=2592000",
            "Content-Disposition": "attachment",
            OSSAccessKeyId: r.accessKeyId,
            Signature: r.signature,
            host: r.host,
            id: a,
            key: r.ossPath,
            policy: r.policy,
            success_action_status: 200
          },
          fileName: "file",
          name: "file",
          filePath: e,
          fileType: s
        };
        return _this5.uploadFileToOSS(Object.assign({}, o, {
          onUploadProgress: n
        }));
      }).then(function () {
        return _this5.reportOSSUpload({
          id: a
        });
      }).then(function (t) {
        return new Promise(function (s, n) {
          t.success ? s({
            success: !0,
            filePath: e,
            fileID: c
          }) : n(new i({
            code: "UPLOAD_FAILED",
            message: "文件上传失败"
          }));
        });
      });
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(_ref3) {
      var e = _ref3.fileList;
      var t = {
        method: "serverless.file.resource.delete",
        params: JSON.stringify({
          id: e[0]
        })
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          e = _ref4.fileList;

      return new Promise(function (t, s) {
        Array.isArray(e) && 0 !== e.length || s(new i({
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        })), t({
          fileList: e.map(function (e) {
            return {
              fileID: e,
              tempFileURL: e
            };
          })
        });
      });
    }
  }, {
    key: "hasAccessToken",
    get: function get() {
      return !!this.accessToken;
    }
  }]);
  return v;
}();

var w = {
  init: function init(e) {
    var t = new v(e);
    ["deleteFile", "getTempFileURL"].forEach(function (e) {
      t[e] = o(t[e]).bind(t);
    });
    var s = {
      signInAnonymously: function signInAnonymously() {
        return t.authorize();
      },
      getLoginState: function getLoginState() {
        return Promise.resolve(!1);
      }
    };
    return t.auth = function () {
      return s;
    }, t.customAuth = t.auth, t;
  }
},
    S = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:",
    k = "undefined" != typeof process && "e2e" === "production" && "pre" === Object({"NODE_ENV":"production","VUE_APP_NAME":"piano","VUE_APP_PLATFORM":"h5","VUE_APP_INDEX_CSS_HASH":"3e73f18a","BASE_URL":"/piano/"}).END_POINT ? "//tcb-pre.tencentcloudapi.com/web" : "//tcb-api.tencentcloudapi.com/web";
var T;
!function (e) {
  e.local = "local", e.none = "none", e.session = "session";
}(T || (T = {}));

var P = function P() {};

s(function (e, t) {
  var s;
  e.exports = (s = n, function (e) {
    var t = s,
        n = t.lib,
        r = n.WordArray,
        o = n.Hasher,
        i = t.algo,
        a = [],
        c = [];
    !function () {
      function t(t) {
        for (var s = e.sqrt(t), n = 2; n <= s; n++) {
          if (!(t % n)) return !1;
        }

        return !0;
      }

      function s(e) {
        return 4294967296 * (e - (0 | e)) | 0;
      }

      for (var n = 2, r = 0; r < 64;) {
        t(n) && (r < 8 && (a[r] = s(e.pow(n, .5))), c[r] = s(e.pow(n, 1 / 3)), r++), n++;
      }
    }();
    var u = [],
        h = i.SHA256 = o.extend({
      _doReset: function _doReset() {
        this._hash = new r.init(a.slice(0));
      },
      _doProcessBlock: function _doProcessBlock(e, t) {
        for (var s = this._hash.words, n = s[0], r = s[1], o = s[2], i = s[3], a = s[4], h = s[5], l = s[6], d = s[7], f = 0; f < 64; f++) {
          if (f < 16) u[f] = 0 | e[t + f];else {
            var p = u[f - 15],
                g = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3,
                m = u[f - 2],
                y = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
            u[f] = g + u[f - 7] + y + u[f - 16];
          }

          var _ = n & r ^ n & o ^ r & o,
              v = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22),
              w = d + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & h ^ ~a & l) + c[f] + u[f];

          d = l, l = h, h = a, a = i + w | 0, i = o, o = r, r = n, n = w + (v + _) | 0;
        }

        s[0] = s[0] + n | 0, s[1] = s[1] + r | 0, s[2] = s[2] + o | 0, s[3] = s[3] + i | 0, s[4] = s[4] + a | 0, s[5] = s[5] + h | 0, s[6] = s[6] + l | 0, s[7] = s[7] + d | 0;
      },
      _doFinalize: function _doFinalize() {
        var t = this._data,
            s = t.words,
            n = 8 * this._nDataBytes,
            r = 8 * t.sigBytes;
        return s[r >>> 5] |= 128 << 24 - r % 32, s[14 + (r + 64 >>> 9 << 4)] = e.floor(n / 4294967296), s[15 + (r + 64 >>> 9 << 4)] = n, t.sigBytes = 4 * s.length, this._process(), this._hash;
      },
      clone: function clone() {
        var e = o.clone.call(this);
        return e._hash = this._hash.clone(), e;
      }
    });
    t.SHA256 = o._createHelper(h), t.HmacSHA256 = o._createHmacHelper(h);
  }(Math), s.SHA256);
}), s(function (e, t) {
  e.exports = n.HmacSHA256;
}), s(function (e, t) {
  var s, r, o;
  e.exports = (r = (s = o = n).lib.WordArray, s.enc.Base64 = {
    stringify: function stringify(e) {
      var t = e.words,
          s = e.sigBytes,
          n = this._map;
      e.clamp();

      for (var r = [], o = 0; o < s; o += 3) {
        for (var i = (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, a = 0; a < 4 && o + .75 * a < s; a++) {
          r.push(n.charAt(i >>> 6 * (3 - a) & 63));
        }
      }

      var c = n.charAt(64);
      if (c) for (; r.length % 4;) {
        r.push(c);
      }
      return r.join("");
    },
    parse: function parse(e) {
      var t = e.length,
          s = this._map,
          n = this._reverseMap;

      if (!n) {
        n = this._reverseMap = [];

        for (var o = 0; o < s.length; o++) {
          n[s.charCodeAt(o)] = o;
        }
      }

      var i = s.charAt(64);

      if (i) {
        var a = e.indexOf(i);
        -1 !== a && (t = a);
      }

      return function (e, t, s) {
        for (var n = [], o = 0, i = 0; i < t; i++) {
          if (i % 4) {
            var a = s[e.charCodeAt(i - 1)] << i % 4 * 2,
                c = s[e.charCodeAt(i)] >>> 6 - i % 4 * 2;
            n[o >>> 2] |= (a | c) << 24 - o % 4 * 8, o++;
          }
        }

        return r.create(n, o);
      }(e, t, n);
    },
    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
  }, o.enc.Base64);
}), s(function (e, t) {
  e.exports = n.enc.Utf8;
});

var A = function A() {
  var e;

  if (!Promise) {
    e = function e() {}, e.promise = {};

    var _t = function _t() {
      throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');
    };

    return Object.defineProperty(e.promise, "then", {
      get: _t
    }), Object.defineProperty(e.promise, "catch", {
      get: _t
    }), e;
  }

  var t = new Promise(function (t, s) {
    e = function e(_e3, n) {
      return _e3 ? s(_e3) : t(n);
    };
  });
  return e.promise = t, e;
};

function I(e) {
  return void 0 === e;
}

function E(e) {
  return "[object Null]" === Object.prototype.toString.call(e);
}

var O;

function U(e) {
  var t = (s = e, "[object Array]" === Object.prototype.toString.call(s) ? e : [e]);
  var s;

  var _iterator = (0, _createForOfIteratorHelper2.default)(t),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _e4 = _step.value;
      var _t2 = _e4.isMatch,
          _s = _e4.genAdapter,
          _n = _e4.runtime;
      if (_t2()) return {
        adapter: _s(),
        runtime: _n
      };
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

!function (e) {
  e.WEB = "web", e.WX_MP = "wx_mp";
}(O || (O = {}));
var b = {
  adapter: null,
  runtime: void 0
},
    D = ["anonymousUuidKey"];

var C = /*#__PURE__*/function (_P) {
  (0, _inherits2.default)(C, _P);

  var _super2 = (0, _createSuper2.default)(C);

  function C() {
    var _this6;

    (0, _classCallCheck2.default)(this, C);
    _this6 = _super2.call(this), b.adapter.root.tcbObject || (b.adapter.root.tcbObject = {});
    return _this6;
  }

  (0, _createClass2.default)(C, [{
    key: "setItem",
    value: function setItem(e, t) {
      b.adapter.root.tcbObject[e] = t;
    }
  }, {
    key: "getItem",
    value: function getItem(e) {
      return b.adapter.root.tcbObject[e];
    }
  }, {
    key: "removeItem",
    value: function removeItem(e) {
      delete b.adapter.root.tcbObject[e];
    }
  }, {
    key: "clear",
    value: function clear() {
      delete b.adapter.root.tcbObject;
    }
  }]);
  return C;
}(P);

function x(e, t) {
  switch (e) {
    case "local":
      return t.localStorage || new C();

    case "none":
      return new C();

    default:
      return t.sessionStorage || new C();
  }
}

var R = /*#__PURE__*/function () {
  function R(e) {
    (0, _classCallCheck2.default)(this, R);

    if (!this._storage) {
      this._persistence = b.adapter.primaryStorage || e.persistence, this._storage = x(this._persistence, b.adapter);

      var _t3 = "access_token_" + e.env,
          _s2 = "access_token_expire_" + e.env,
          _n2 = "refresh_token_" + e.env,
          _r = "anonymous_uuid_" + e.env,
          _o = "login_type_" + e.env,
          _i = "user_info_" + e.env;

      this.keys = {
        accessTokenKey: _t3,
        accessTokenExpireKey: _s2,
        refreshTokenKey: _n2,
        anonymousUuidKey: _r,
        loginTypeKey: _o,
        userInfoKey: _i
      };
    }
  }

  (0, _createClass2.default)(R, [{
    key: "updatePersistence",
    value: function updatePersistence(e) {
      if (e === this._persistence) return;
      var t = "local" === this._persistence;
      this._persistence = e;
      var s = x(e, b.adapter);

      for (var _e5 in this.keys) {
        var _n3 = this.keys[_e5];
        if (t && D.includes(_e5)) continue;

        var _r2 = this._storage.getItem(_n3);

        I(_r2) || E(_r2) || (s.setItem(_n3, _r2), this._storage.removeItem(_n3));
      }

      this._storage = s;
    }
  }, {
    key: "setStore",
    value: function setStore(e, t, s) {
      if (!this._storage) return;
      var n = {
        version: s || "localCachev1",
        content: t
      },
          r = JSON.stringify(n);

      try {
        this._storage.setItem(e, r);
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: "getStore",
    value: function getStore(e, t) {
      try {
        if (!this._storage) return;
      } catch (e) {
        return "";
      }

      t = t || "localCachev1";

      var s = this._storage.getItem(e);

      if (!s) return "";

      if (s.indexOf(t) >= 0) {
        return JSON.parse(s).content;
      }

      return "";
    }
  }, {
    key: "removeStore",
    value: function removeStore(e) {
      this._storage.removeItem(e);
    }
  }]);
  return R;
}();

var q = {},
    F = {};

function L(e) {
  return q[e];
}

var N = function N(e, t) {
  (0, _classCallCheck2.default)(this, N);
  this.data = t || null, this.name = e;
};

var M = /*#__PURE__*/function (_N) {
  (0, _inherits2.default)(M, _N);

  var _super3 = (0, _createSuper2.default)(M);

  function M(e, t) {
    var _this7;

    (0, _classCallCheck2.default)(this, M);
    _this7 = _super3.call(this, "error", {
      error: e,
      data: t
    }), _this7.error = e;
    return _this7;
  }

  return M;
}(N);

var $ = new ( /*#__PURE__*/function () {
  function _class() {
    (0, _classCallCheck2.default)(this, _class);
    this._listeners = {};
  }

  (0, _createClass2.default)(_class, [{
    key: "on",
    value: function on(e, t) {
      return function (e, t, s) {
        s[e] = s[e] || [], s[e].push(t);
      }(e, t, this._listeners), this;
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return function (e, t, s) {
        if (s && s[e]) {
          var _n4 = s[e].indexOf(t);

          -1 !== _n4 && s[e].splice(_n4, 1);
        }
      }(e, t, this._listeners), this;
    }
  }, {
    key: "fire",
    value: function fire(e, t) {
      if (e instanceof M) return console.error(e.error), this;
      var s = "string" == typeof e ? new N(e, t || {}) : e;
      var n = s.name;

      if (this._listens(n)) {
        s.target = this;

        var _e6 = this._listeners[n] ? (0, _toConsumableArray2.default)(this._listeners[n]) : [];

        var _iterator2 = (0, _createForOfIteratorHelper2.default)(_e6),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _t4 = _step2.value;

            _t4.call(this, s);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      return this;
    }
  }, {
    key: "_listens",
    value: function _listens(e) {
      return this._listeners[e] && this._listeners[e].length > 0;
    }
  }]);
  return _class;
}())();

function K(e, t) {
  $.on(e, t);
}

function j(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  $.fire(e, t);
}

function B(e, t) {
  $.off(e, t);
}

var H = "loginStateChanged",
    W = "loginStateExpire",
    V = "loginTypeChanged",
    z = "anonymousConverted",
    J = "refreshAccessToken";
var Y;
!function (e) {
  e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
}(Y || (Y = {}));
var X = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],
    G = {
  "X-SDK-Version": "1.3.5"
};

function Q(e, t, s) {
  var n = e[t];

  e[t] = function (t) {
    var r = {},
        o = {};
    s.forEach(function (s) {
      var _s$call = s.call(e, t),
          n = _s$call.data,
          i = _s$call.headers;

      Object.assign(r, n), Object.assign(o, i);
    });
    var i = t.data;
    return i && function () {
      var e;
      if (e = i, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, i), r);else for (var _e7 in r) {
        i.append(_e7, r[_e7]);
      }
    }(), t.headers = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, t.headers || {}), o), n.call(e, t);
  };
}

function Z() {
  var e = Math.random().toString(16).slice(2);
  return {
    data: {
      seqId: e
    },
    headers: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, G), {}, {
      "x-seqid": e
    })
  };
}

var ee = /*#__PURE__*/function () {
  function ee() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, ee);
    var t;
    this.config = e, this._reqClass = new b.adapter.reqClass({
      timeout: this.config.timeout,
      timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"),
      restrictedMethods: ["post"]
    }), this._cache = L(this.config.env), this._localCache = (t = this.config.env, F[t]), Q(this._reqClass, "post", [Z]), Q(this._reqClass, "upload", [Z]), Q(this._reqClass, "download", [Z]);
  }

  (0, _createClass2.default)(ee, [{
    key: "post",
    value: function () {
      var _post = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._reqClass.post(e);

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function post(_x) {
        return _post.apply(this, arguments);
      }

      return post;
    }()
  }, {
    key: "upload",
    value: function () {
      var _upload = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._reqClass.upload(e);

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function upload(_x2) {
        return _upload.apply(this, arguments);
      }

      return upload;
    }()
  }, {
    key: "download",
    value: function () {
      var _download = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._reqClass.download(e);

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function download(_x3) {
        return _download.apply(this, arguments);
      }

      return download;
    }()
  }, {
    key: "refreshAccessToken",
    value: function () {
      var _refreshAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var e, t;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
                _context4.prev = 1;
                _context4.next = 4;
                return this._refreshAccessTokenPromise;

              case 4:
                e = _context4.sent;
                _context4.next = 10;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](1);
                t = _context4.t0;

              case 10:
                if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {
                  _context4.next = 12;
                  break;
                }

                throw t;

              case 12:
                return _context4.abrupt("return", e);

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 7]]);
      }));

      function refreshAccessToken() {
        return _refreshAccessToken2.apply(this, arguments);
      }

      return refreshAccessToken;
    }()
  }, {
    key: "_refreshAccessToken",
    value: function () {
      var _refreshAccessToken3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _this$_cache$keys, e, t, s, n, r, o, i, a, _e8, _e9, _t5, _n5;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, s = _this$_cache$keys.refreshTokenKey, n = _this$_cache$keys.loginTypeKey, r = _this$_cache$keys.anonymousUuidKey;
                this._cache.removeStore(e), this._cache.removeStore(t);
                o = this._cache.getStore(s);

                if (o) {
                  _context5.next = 5;
                  break;
                }

                throw new Error("未登录CloudBase");

              case 5:
                i = {
                  refresh_token: o
                };
                _context5.next = 8;
                return this.request("auth.fetchAccessTokenWithRefreshToken", i);

              case 8:
                a = _context5.sent;

                if (!a.data.code) {
                  _context5.next = 21;
                  break;
                }

                _e8 = a.data.code;

                if (!("SIGN_PARAM_INVALID" === _e8 || "REFRESH_TOKEN_EXPIRED" === _e8 || "INVALID_REFRESH_TOKEN" === _e8)) {
                  _context5.next = 20;
                  break;
                }

                if (!(this._cache.getStore(n) === Y.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e8)) {
                  _context5.next = 19;
                  break;
                }

                _e9 = this._cache.getStore(r);
                _t5 = this._cache.getStore(s);
                _context5.next = 17;
                return this.send("auth.signInAnonymously", {
                  anonymous_uuid: _e9,
                  refresh_token: _t5
                });

              case 17:
                _n5 = _context5.sent;
                return _context5.abrupt("return", (this.setRefreshToken(_n5.refresh_token), this._refreshAccessToken()));

              case 19:
                j(W), this._cache.removeStore(s);

              case 20:
                throw new Error("刷新access token失败：" + a.data.code);

              case 21:
                if (!a.data.access_token) {
                  _context5.next = 23;
                  break;
                }

                return _context5.abrupt("return", (j(J), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), {
                  accessToken: a.data.access_token,
                  accessTokenExpire: a.data.access_token_expire
                }));

              case 23:
                a.data.refresh_token && (this._cache.removeStore(s), this._cache.setStore(s, a.data.refresh_token), this._refreshAccessToken());

              case 24:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _refreshAccessToken() {
        return _refreshAccessToken3.apply(this, arguments);
      }

      return _refreshAccessToken;
    }()
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _this$_cache$keys2, e, t, s, n, r, o;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, s = _this$_cache$keys2.refreshTokenKey;

                if (this._cache.getStore(s)) {
                  _context6.next = 3;
                  break;
                }

                throw new Error("refresh token不存在，登录状态异常");

              case 3:
                n = this._cache.getStore(e), r = this._cache.getStore(t), o = !0;
                _context6.t0 = this._shouldRefreshAccessTokenHook;

                if (!_context6.t0) {
                  _context6.next = 9;
                  break;
                }

                _context6.next = 8;
                return this._shouldRefreshAccessTokenHook(n, r);

              case 8:
                _context6.t0 = !_context6.sent;

              case 9:
                _context6.t1 = _context6.t0;

                if (!_context6.t1) {
                  _context6.next = 12;
                  break;
                }

                o = !1;

              case 12:
                return _context6.abrupt("return", (!n || !r || r < Date.now()) && o ? this.refreshAccessToken() : {
                  accessToken: n,
                  accessTokenExpire: r
                });

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getAccessToken() {
        return _getAccessToken.apply(this, arguments);
      }

      return getAccessToken;
    }()
  }, {
    key: "request",
    value: function () {
      var _request = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e, t, s) {
        var n, r, o, _e10, i, _e11, _e12, a, c, u, h, l, d, f, p, g;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                n = "x-tcb-trace_" + this.config.env;
                r = "application/x-www-form-urlencoded";
                o = (0, _objectSpread2.default)({
                  action: e,
                  env: this.config.env,
                  dataVersion: "2019-08-16"
                }, t);

                if (!(-1 === X.indexOf(e))) {
                  _context7.next = 10;
                  break;
                }

                _e10 = this._cache.keys.refreshTokenKey;
                _context7.t0 = this._cache.getStore(_e10);

                if (!_context7.t0) {
                  _context7.next = 10;
                  break;
                }

                _context7.next = 9;
                return this.getAccessToken();

              case 9:
                o.access_token = _context7.sent.accessToken;

              case 10:
                if ("storage.uploadFile" === e) {
                  i = new FormData();

                  for (_e11 in i) {
                    i.hasOwnProperty(_e11) && void 0 !== i[_e11] && i.append(_e11, o[_e11]);
                  }

                  r = "multipart/form-data";
                } else {
                  r = "application/json;charset=UTF-8", i = {};

                  for (_e12 in o) {
                    void 0 !== o[_e12] && (i[_e12] = o[_e12]);
                  }
                }

                a = {
                  headers: {
                    "content-type": r
                  }
                };
                s && s.onUploadProgress && (a.onUploadProgress = s.onUploadProgress);
                c = this._localCache.getStore(n);
                c && (a.headers["X-TCB-Trace"] = c);
                u = t.parse, h = t.inQuery, l = t.search;
                d = {
                  env: this.config.env
                };
                u && (d.parse = !0), h && (d = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, h), d));

                f = function (e, t) {
                  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                  var n = /\?/.test(t);
                  var r = "";

                  for (var _e13 in s) {
                    "" === r ? !n && (t += "?") : r += "&", r += "".concat(_e13, "=").concat(encodeURIComponent(s[_e13]));
                  }

                  return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);
                }(S, k, d);

                l && (f += l);
                _context7.next = 22;
                return this.post((0, _objectSpread2.default)({
                  url: f,
                  data: i
                }, a));

              case 22:
                p = _context7.sent;
                g = p.header && p.header["x-tcb-trace"];

                if (!(g && this._localCache.setStore(n, g), 200 !== Number(p.status) && 200 !== Number(p.statusCode) || !p.data)) {
                  _context7.next = 26;
                  break;
                }

                throw new Error("network request error");

              case 26:
                return _context7.abrupt("return", p);

              case 27:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function request(_x4, _x5, _x6) {
        return _request.apply(this, arguments);
      }

      return request;
    }()
  }, {
    key: "send",
    value: function () {
      var _send = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
        var t,
            s,
            _s3,
            _args8 = arguments;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                t = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};
                _context8.next = 3;
                return this.request(e, t, {
                  onUploadProgress: t.onUploadProgress
                });

              case 3:
                s = _context8.sent;

                if (!("ACCESS_TOKEN_EXPIRED" === s.data.code && -1 === X.indexOf(e))) {
                  _context8.next = 13;
                  break;
                }

                _context8.next = 7;
                return this.refreshAccessToken();

              case 7:
                _context8.next = 9;
                return this.request(e, t, {
                  onUploadProgress: t.onUploadProgress
                });

              case 9:
                _s3 = _context8.sent;

                if (!_s3.data.code) {
                  _context8.next = 12;
                  break;
                }

                throw new Error("[".concat(_s3.data.code, "] ").concat(_s3.data.message));

              case 12:
                return _context8.abrupt("return", _s3.data);

              case 13:
                if (!s.data.code) {
                  _context8.next = 15;
                  break;
                }

                throw new Error("[".concat(s.data.code, "] ").concat(s.data.message));

              case 15:
                return _context8.abrupt("return", s.data);

              case 16:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function send(_x7) {
        return _send.apply(this, arguments);
      }

      return send;
    }()
  }, {
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys3 = this._cache.keys,
          t = _this$_cache$keys3.accessTokenKey,
          s = _this$_cache$keys3.accessTokenExpireKey,
          n = _this$_cache$keys3.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(s), this._cache.setStore(n, e);
    }
  }]);
  return ee;
}();

var te = {};

function se(e) {
  return te[e];
}

var ne = /*#__PURE__*/function () {
  function ne(e) {
    (0, _classCallCheck2.default)(this, ne);
    this.config = e, this._cache = L(e.env), this._request = se(e.env);
  }

  (0, _createClass2.default)(ne, [{
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys4 = this._cache.keys,
          t = _this$_cache$keys4.accessTokenKey,
          s = _this$_cache$keys4.accessTokenExpireKey,
          n = _this$_cache$keys4.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(s), this._cache.setStore(n, e);
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e, t) {
      var _this$_cache$keys5 = this._cache.keys,
          s = _this$_cache$keys5.accessTokenKey,
          n = _this$_cache$keys5.accessTokenExpireKey;
      this._cache.setStore(s, e), this._cache.setStore(n, t);
    }
  }, {
    key: "refreshUserInfo",
    value: function () {
      var _refreshUserInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var _yield$this$_request$, e;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this._request.send("auth.getUserInfo", {});

              case 2:
                _yield$this$_request$ = _context9.sent;
                e = _yield$this$_request$.data;
                return _context9.abrupt("return", (this.setLocalUserInfo(e), e));

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function refreshUserInfo() {
        return _refreshUserInfo.apply(this, arguments);
      }

      return refreshUserInfo;
    }()
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;

      this._cache.setStore(t, e);
    }
  }]);
  return ne;
}();

var re = /*#__PURE__*/function () {
  function re(e) {
    (0, _classCallCheck2.default)(this, re);
    if (!e) throw new Error("envId is not defined");
    this._envId = e, this._cache = L(this._envId), this._request = se(this._envId), this.setUserInfo();
  }

  (0, _createClass2.default)(re, [{
    key: "linkWithTicket",
    value: function linkWithTicket(e) {
      if ("string" != typeof e) throw new Error("ticket must be string");
      return this._request.send("auth.linkWithTicket", {
        ticket: e
      });
    }
  }, {
    key: "linkWithRedirect",
    value: function linkWithRedirect(e) {
      e.signInWithRedirect();
    }
  }, {
    key: "updatePassword",
    value: function updatePassword(e, t) {
      return this._request.send("auth.updatePassword", {
        oldPassword: t,
        newPassword: e
      });
    }
  }, {
    key: "updateEmail",
    value: function updateEmail(e) {
      return this._request.send("auth.updateEmail", {
        newEmail: e
      });
    }
  }, {
    key: "updateUsername",
    value: function updateUsername(e) {
      if ("string" != typeof e) throw new Error("username must be a string");
      return this._request.send("auth.updateUsername", {
        username: e
      });
    }
  }, {
    key: "getLinkedUidList",
    value: function () {
      var _getLinkedUidList = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
        var _yield$this$_request$2, e, t, s;

        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this._request.send("auth.getLinkedUidList", {});

              case 2:
                _yield$this$_request$2 = _context10.sent;
                e = _yield$this$_request$2.data;
                t = !1;
                s = e.users;
                return _context10.abrupt("return", (s.forEach(function (e) {
                  e.wxOpenId && e.wxPublicId && (t = !0);
                }), {
                  users: s,
                  hasPrimaryUid: t
                }));

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getLinkedUidList() {
        return _getLinkedUidList.apply(this, arguments);
      }

      return getLinkedUidList;
    }()
  }, {
    key: "setPrimaryUid",
    value: function setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", {
        uid: e
      });
    }
  }, {
    key: "unlink",
    value: function unlink(e) {
      return this._request.send("auth.unlink", {
        platform: e
      });
    }
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e) {
        var t, s, n, r, o, i, _yield$this$_request$3, a;

        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                t = e.nickName;
                s = e.gender;
                n = e.avatarUrl;
                r = e.province;
                o = e.country;
                i = e.city;
                _context11.next = 8;
                return this._request.send("auth.updateUserInfo", {
                  nickName: t,
                  gender: s,
                  avatarUrl: n,
                  province: r,
                  country: o,
                  city: i
                });

              case 8:
                _yield$this$_request$3 = _context11.sent;
                a = _yield$this$_request$3.data;
                this.setLocalUserInfo(a);

              case 11:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function update(_x8) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "refresh",
    value: function () {
      var _refresh = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
        var _yield$this$_request$4, e;

        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this._request.send("auth.getUserInfo", {});

              case 2:
                _yield$this$_request$4 = _context12.sent;
                e = _yield$this$_request$4.data;
                return _context12.abrupt("return", (this.setLocalUserInfo(e), e));

              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function refresh() {
        return _refresh.apply(this, arguments);
      }

      return refresh;
    }()
  }, {
    key: "setUserInfo",
    value: function setUserInfo() {
      var _this8 = this;

      var e = this._cache.keys.userInfoKey,
          t = this._cache.getStore(e);

      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {
        _this8[e] = t[e];
      }), this.location = {
        country: t.country,
        province: t.province,
        city: t.city
      };
    }
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e), this.setUserInfo();
    }
  }]);
  return re;
}();

var oe = /*#__PURE__*/function () {
  function oe(e) {
    (0, _classCallCheck2.default)(this, oe);
    if (!e) throw new Error("envId is not defined");
    this._cache = L(e);

    var _this$_cache$keys6 = this._cache.keys,
        t = _this$_cache$keys6.refreshTokenKey,
        s = _this$_cache$keys6.accessTokenKey,
        n = _this$_cache$keys6.accessTokenExpireKey,
        r = this._cache.getStore(t),
        o = this._cache.getStore(s),
        i = this._cache.getStore(n);

    this.credential = {
      refreshToken: r,
      accessToken: o,
      accessTokenExpire: i
    }, this.user = new re(e);
  }

  (0, _createClass2.default)(oe, [{
    key: "isAnonymousAuth",
    get: function get() {
      return this.loginType === Y.ANONYMOUS;
    }
  }, {
    key: "isCustomAuth",
    get: function get() {
      return this.loginType === Y.CUSTOM;
    }
  }, {
    key: "isWeixinAuth",
    get: function get() {
      return this.loginType === Y.WECHAT || this.loginType === Y.WECHAT_OPEN || this.loginType === Y.WECHAT_PUBLIC;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }]);
  return oe;
}();

var ie = /*#__PURE__*/function (_ne) {
  (0, _inherits2.default)(ie, _ne);

  var _super4 = (0, _createSuper2.default)(ie);

  function ie() {
    (0, _classCallCheck2.default)(this, ie);
    return _super4.apply(this, arguments);
  }

  (0, _createClass2.default)(ie, [{
    key: "signIn",
    value: function () {
      var _signIn = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
        var _this$_cache$keys7, e, t, s, n, r, _e14;

        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                this._cache.updatePersistence("local");

                _this$_cache$keys7 = this._cache.keys;
                e = _this$_cache$keys7.anonymousUuidKey;
                t = _this$_cache$keys7.refreshTokenKey;
                s = this._cache.getStore(e) || void 0;
                n = this._cache.getStore(t) || void 0;
                _context13.next = 8;
                return this._request.send("auth.signInAnonymously", {
                  anonymous_uuid: s,
                  refresh_token: n
                });

              case 8:
                r = _context13.sent;

                if (!(r.uuid && r.refresh_token)) {
                  _context13.next = 20;
                  break;
                }

                this._setAnonymousUUID(r.uuid);

                this.setRefreshToken(r.refresh_token);
                _context13.next = 14;
                return this._request.refreshAccessToken();

              case 14:
                j(H);
                j(V, {
                  env: this.config.env,
                  loginType: Y.ANONYMOUS,
                  persistence: "local"
                });
                _e14 = new oe(this.config.env);
                _context13.next = 19;
                return _e14.user.refresh();

              case 19:
                return _context13.abrupt("return", _e14);

              case 20:
                throw new Error("匿名登录失败");

              case 21:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function signIn() {
        return _signIn.apply(this, arguments);
      }

      return signIn;
    }()
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e) {
        var _this$_cache$keys8, t, s, n, r, o;

        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _this$_cache$keys8 = this._cache.keys;
                t = _this$_cache$keys8.anonymousUuidKey;
                s = _this$_cache$keys8.refreshTokenKey;
                n = this._cache.getStore(t);
                r = this._cache.getStore(s);
                _context14.next = 7;
                return this._request.send("auth.linkAndRetrieveDataWithTicket", {
                  anonymous_uuid: n,
                  refresh_token: r,
                  ticket: e
                });

              case 7:
                o = _context14.sent;

                if (!o.refresh_token) {
                  _context14.next = 16;
                  break;
                }

                this._clearAnonymousUUID();

                this.setRefreshToken(o.refresh_token);
                _context14.next = 13;
                return this._request.refreshAccessToken();

              case 13:
                j(z, {
                  env: this.config.env
                });
                j(V, {
                  loginType: Y.CUSTOM,
                  persistence: "local"
                });
                return _context14.abrupt("return", {
                  credential: {
                    refreshToken: o.refresh_token
                  }
                });

              case 16:
                throw new Error("匿名转化失败");

              case 17:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function linkAndRetrieveDataWithTicket(_x9) {
        return _linkAndRetrieveDataWithTicket.apply(this, arguments);
      }

      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "_setAnonymousUUID",
    value: function _setAnonymousUUID(e) {
      var _this$_cache$keys9 = this._cache.keys,
          t = _this$_cache$keys9.anonymousUuidKey,
          s = _this$_cache$keys9.loginTypeKey;
      this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(s, Y.ANONYMOUS);
    }
  }, {
    key: "_clearAnonymousUUID",
    value: function _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }]);
  return ie;
}(ne);

var ae = /*#__PURE__*/function (_ne2) {
  (0, _inherits2.default)(ae, _ne2);

  var _super5 = (0, _createSuper2.default)(ae);

  function ae() {
    (0, _classCallCheck2.default)(this, ae);
    return _super5.apply(this, arguments);
  }

  (0, _createClass2.default)(ae, [{
    key: "signIn",
    value: function () {
      var _signIn2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e) {
        var t, s;
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context15.next = 2;
                  break;
                }

                throw new Error("ticket must be a string");

              case 2:
                t = this._cache.keys.refreshTokenKey;
                _context15.next = 5;
                return this._request.send("auth.signInWithTicket", {
                  ticket: e,
                  refresh_token: this._cache.getStore(t) || ""
                });

              case 5:
                s = _context15.sent;

                if (!s.refresh_token) {
                  _context15.next = 15;
                  break;
                }

                this.setRefreshToken(s.refresh_token);
                _context15.next = 10;
                return this._request.refreshAccessToken();

              case 10:
                j(H);
                j(V, {
                  env: this.config.env,
                  loginType: Y.CUSTOM,
                  persistence: this.config.persistence
                });
                _context15.next = 14;
                return this.refreshUserInfo();

              case 14:
                return _context15.abrupt("return", new oe(this.config.env));

              case 15:
                throw new Error("自定义登录失败");

              case 16:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function signIn(_x10) {
        return _signIn2.apply(this, arguments);
      }

      return signIn;
    }()
  }]);
  return ae;
}(ne);

var ce = /*#__PURE__*/function (_ne3) {
  (0, _inherits2.default)(ce, _ne3);

  var _super6 = (0, _createSuper2.default)(ce);

  function ce() {
    (0, _classCallCheck2.default)(this, ce);
    return _super6.apply(this, arguments);
  }

  (0, _createClass2.default)(ce, [{
    key: "signIn",
    value: function () {
      var _signIn3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(e, t) {
        var s, n, r, o, i;
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context16.next = 2;
                  break;
                }

                throw new Error("email must be a string");

              case 2:
                s = this._cache.keys.refreshTokenKey;
                _context16.next = 5;
                return this._request.send("auth.signIn", {
                  loginType: "EMAIL",
                  email: e,
                  password: t,
                  refresh_token: this._cache.getStore(s) || ""
                });

              case 5:
                n = _context16.sent;
                r = n.refresh_token;
                o = n.access_token;
                i = n.access_token_expire;

                if (!r) {
                  _context16.next = 22;
                  break;
                }

                this.setRefreshToken(r);

                if (!(o && i)) {
                  _context16.next = 15;
                  break;
                }

                this.setAccessToken(o, i);
                _context16.next = 17;
                break;

              case 15:
                _context16.next = 17;
                return this._request.refreshAccessToken();

              case 17:
                _context16.next = 19;
                return this.refreshUserInfo();

              case 19:
                j(H);
                j(V, {
                  env: this.config.env,
                  loginType: Y.EMAIL,
                  persistence: this.config.persistence
                });
                return _context16.abrupt("return", new oe(this.config.env));

              case 22:
                throw n.code ? new Error("\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: [".concat(n.code, "] ").concat(n.message)) : new Error("邮箱登录失败");

              case 23:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function signIn(_x11, _x12) {
        return _signIn3.apply(this, arguments);
      }

      return signIn;
    }()
  }, {
    key: "activate",
    value: function () {
      var _activate = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(e) {
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                return _context17.abrupt("return", this._request.send("auth.activateEndUserMail", {
                  token: e
                }));

              case 1:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function activate(_x13) {
        return _activate.apply(this, arguments);
      }

      return activate;
    }()
  }, {
    key: "resetPasswordWithToken",
    value: function () {
      var _resetPasswordWithToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(e, t) {
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                return _context18.abrupt("return", this._request.send("auth.resetPasswordWithToken", {
                  token: e,
                  newPassword: t
                }));

              case 1:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function resetPasswordWithToken(_x14, _x15) {
        return _resetPasswordWithToken.apply(this, arguments);
      }

      return resetPasswordWithToken;
    }()
  }]);
  return ce;
}(ne);

var ue = /*#__PURE__*/function (_ne4) {
  (0, _inherits2.default)(ue, _ne4);

  var _super7 = (0, _createSuper2.default)(ue);

  function ue() {
    (0, _classCallCheck2.default)(this, ue);
    return _super7.apply(this, arguments);
  }

  (0, _createClass2.default)(ue, [{
    key: "signIn",
    value: function () {
      var _signIn4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(e, t) {
        var s, n, r, o, i;
        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context19.next = 2;
                  break;
                }

                throw new Error("username must be a string");

              case 2:
                "string" != typeof t && (t = "", console.warn("password is empty"));
                s = this._cache.keys.refreshTokenKey;
                _context19.next = 6;
                return this._request.send("auth.signIn", {
                  loginType: Y.USERNAME,
                  username: e,
                  password: t,
                  refresh_token: this._cache.getStore(s) || ""
                });

              case 6:
                n = _context19.sent;
                r = n.refresh_token;
                o = n.access_token_expire;
                i = n.access_token;

                if (!r) {
                  _context19.next = 23;
                  break;
                }

                this.setRefreshToken(r);

                if (!(i && o)) {
                  _context19.next = 16;
                  break;
                }

                this.setAccessToken(i, o);
                _context19.next = 18;
                break;

              case 16:
                _context19.next = 18;
                return this._request.refreshAccessToken();

              case 18:
                _context19.next = 20;
                return this.refreshUserInfo();

              case 20:
                j(H);
                j(V, {
                  env: this.config.env,
                  loginType: Y.USERNAME,
                  persistence: this.config.persistence
                });
                return _context19.abrupt("return", new oe(this.config.env));

              case 23:
                throw n.code ? new Error("\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: [".concat(n.code, "] ").concat(n.message)) : new Error("用户名密码登录失败");

              case 24:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function signIn(_x16, _x17) {
        return _signIn4.apply(this, arguments);
      }

      return signIn;
    }()
  }]);
  return ue;
}(ne);

var he = /*#__PURE__*/function () {
  function he(e) {
    (0, _classCallCheck2.default)(this, he);
    this.config = e, this._cache = L(e.env), this._request = se(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), K(V, this._onLoginTypeChanged);
  }

  (0, _createClass2.default)(he, [{
    key: "anonymousAuthProvider",
    value: function anonymousAuthProvider() {
      return new ie(this.config);
    }
  }, {
    key: "customAuthProvider",
    value: function customAuthProvider() {
      return new ae(this.config);
    }
  }, {
    key: "emailAuthProvider",
    value: function emailAuthProvider() {
      return new ce(this.config);
    }
  }, {
    key: "usernameAuthProvider",
    value: function usernameAuthProvider() {
      return new ue(this.config);
    }
  }, {
    key: "signInAnonymously",
    value: function () {
      var _signInAnonymously = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
        return regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                return _context20.abrupt("return", new ie(this.config).signIn());

              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function signInAnonymously() {
        return _signInAnonymously.apply(this, arguments);
      }

      return signInAnonymously;
    }()
  }, {
    key: "signInWithEmailAndPassword",
    value: function () {
      var _signInWithEmailAndPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(e, t) {
        return regeneratorRuntime.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                return _context21.abrupt("return", new ce(this.config).signIn(e, t));

              case 1:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function signInWithEmailAndPassword(_x18, _x19) {
        return _signInWithEmailAndPassword.apply(this, arguments);
      }

      return signInWithEmailAndPassword;
    }()
  }, {
    key: "signInWithUsernameAndPassword",
    value: function signInWithUsernameAndPassword(e, t) {
      return new ue(this.config).signIn(e, t);
    }
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(e) {
        return regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                this._anonymousAuthProvider || (this._anonymousAuthProvider = new ie(this.config)), K(z, this._onAnonymousConverted);
                _context22.next = 3;
                return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);

              case 3:
                return _context22.abrupt("return", _context22.sent);

              case 4:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function linkAndRetrieveDataWithTicket(_x20) {
        return _linkAndRetrieveDataWithTicket2.apply(this, arguments);
      }

      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "signOut",
    value: function () {
      var _signOut = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
        var _this$_cache$keys10, e, t, s, n, r;

        return regeneratorRuntime.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                if (!(this.loginType === Y.ANONYMOUS)) {
                  _context23.next = 2;
                  break;
                }

                throw new Error("匿名用户不支持登出操作");

              case 2:
                _this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, s = _this$_cache$keys10.accessTokenExpireKey, n = this._cache.getStore(e);

                if (n) {
                  _context23.next = 5;
                  break;
                }

                return _context23.abrupt("return");

              case 5:
                _context23.next = 7;
                return this._request.send("auth.logout", {
                  refresh_token: n
                });

              case 7:
                r = _context23.sent;
                return _context23.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(s), j(H), j(V, {
                  env: this.config.env,
                  loginType: Y.NULL,
                  persistence: this.config.persistence
                }), r));

              case 9:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function signOut() {
        return _signOut.apply(this, arguments);
      }

      return signOut;
    }()
  }, {
    key: "signUpWithEmailAndPassword",
    value: function () {
      var _signUpWithEmailAndPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(e, t) {
        return regeneratorRuntime.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                return _context24.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", {
                  email: e,
                  password: t
                }));

              case 1:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function signUpWithEmailAndPassword(_x21, _x22) {
        return _signUpWithEmailAndPassword.apply(this, arguments);
      }

      return signUpWithEmailAndPassword;
    }()
  }, {
    key: "sendPasswordResetEmail",
    value: function () {
      var _sendPasswordResetEmail = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(e) {
        return regeneratorRuntime.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                return _context25.abrupt("return", this._request.send("auth.sendPasswordResetEmail", {
                  email: e
                }));

              case 1:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function sendPasswordResetEmail(_x23) {
        return _sendPasswordResetEmail.apply(this, arguments);
      }

      return sendPasswordResetEmail;
    }()
  }, {
    key: "onLoginStateChanged",
    value: function onLoginStateChanged(e) {
      var _this9 = this;

      K(H, function () {
        var t = _this9.hasLoginState();

        e.call(_this9, t);
      });
      var t = this.hasLoginState();
      e.call(this, t);
    }
  }, {
    key: "onLoginStateExpired",
    value: function onLoginStateExpired(e) {
      K(W, e.bind(this));
    }
  }, {
    key: "onAccessTokenRefreshed",
    value: function onAccessTokenRefreshed(e) {
      K(J, e.bind(this));
    }
  }, {
    key: "onAnonymousConverted",
    value: function onAnonymousConverted(e) {
      K(z, e.bind(this));
    }
  }, {
    key: "onLoginTypeChanged",
    value: function onLoginTypeChanged(e) {
      var _this10 = this;

      K(V, function () {
        var t = _this10.hasLoginState();

        e.call(_this10, t);
      });
    }
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
        return regeneratorRuntime.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _context26.next = 2;
                return this._request.getAccessToken();

              case 2:
                _context26.t0 = _context26.sent.accessToken;
                _context26.t1 = this.config.env;
                return _context26.abrupt("return", {
                  accessToken: _context26.t0,
                  env: _context26.t1
                });

              case 5:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function getAccessToken() {
        return _getAccessToken2.apply(this, arguments);
      }

      return getAccessToken;
    }()
  }, {
    key: "hasLoginState",
    value: function hasLoginState() {
      var e = this._cache.keys.refreshTokenKey;
      return this._cache.getStore(e) ? new oe(this.config.env) : null;
    }
  }, {
    key: "isUsernameRegistered",
    value: function () {
      var _isUsernameRegistered = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee27(e) {
        var _yield$this$_request$5, t;

        return regeneratorRuntime.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context27.next = 2;
                  break;
                }

                throw new Error("username must be a string");

              case 2:
                _context27.next = 4;
                return this._request.send("auth.isUsernameRegistered", {
                  username: e
                });

              case 4:
                _yield$this$_request$5 = _context27.sent;
                t = _yield$this$_request$5.data;
                return _context27.abrupt("return", t && t.isRegistered);

              case 7:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function isUsernameRegistered(_x24) {
        return _isUsernameRegistered.apply(this, arguments);
      }

      return isUsernameRegistered;
    }()
  }, {
    key: "getLoginState",
    value: function getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
  }, {
    key: "signInWithTicket",
    value: function () {
      var _signInWithTicket = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(e) {
        return regeneratorRuntime.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                return _context28.abrupt("return", new ae(this.config).signIn(e));

              case 1:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function signInWithTicket(_x25) {
        return _signInWithTicket.apply(this, arguments);
      }

      return signInWithTicket;
    }()
  }, {
    key: "shouldRefreshAccessToken",
    value: function shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then(function (e) {
        return e.code ? e : (0, _objectSpread2.default)((0, _objectSpread2.default)({}, e.data), {}, {
          requestId: e.seqId
        });
      });
    }
  }, {
    key: "getAuthHeader",
    value: function getAuthHeader() {
      var _this$_cache$keys11 = this._cache.keys,
          e = _this$_cache$keys11.refreshTokenKey,
          t = _this$_cache$keys11.accessTokenKey,
          s = this._cache.getStore(e);

      return {
        "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + s
      };
    }
  }, {
    key: "_onAnonymousConverted",
    value: function _onAnonymousConverted(e) {
      var t = e.data.env;
      t === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
  }, {
    key: "_onLoginTypeChanged",
    value: function _onLoginTypeChanged(e) {
      var _e$data = e.data,
          t = _e$data.loginType,
          s = _e$data.persistence,
          n = _e$data.env;
      n === this.config.env && (this._cache.updatePersistence(s), this._cache.setStore(this._cache.keys.loginTypeKey, t));
    }
  }, {
    key: "currentUser",
    get: function get() {
      var e = this.hasLoginState();
      return e && e.user || null;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }]);
  return he;
}();

var le = function le(e, t) {
  t = t || A();
  var s = se(this.config.env),
      n = e.cloudPath,
      r = e.filePath,
      o = e.onUploadProgress,
      _e$fileType = e.fileType,
      i = _e$fileType === void 0 ? "image" : _e$fileType;
  return s.send("storage.getUploadMetadata", {
    path: n
  }).then(function (e) {
    var _e$data2 = e.data,
        a = _e$data2.url,
        c = _e$data2.authorization,
        u = _e$data2.token,
        h = _e$data2.fileId,
        l = _e$data2.cosFileId,
        d = e.requestId,
        f = {
      key: n,
      signature: c,
      "x-cos-meta-fileid": l,
      success_action_status: "201",
      "x-cos-security-token": u
    };
    s.upload({
      url: a,
      data: f,
      file: r,
      name: n,
      fileType: i,
      onUploadProgress: o
    }).then(function (e) {
      201 === e.statusCode ? t(null, {
        fileID: h,
        requestId: d
      }) : t(new Error("STORAGE_REQUEST_FAIL: " + e.data));
    }).catch(function (e) {
      t(e);
    });
  }).catch(function (e) {
    t(e);
  }), t.promise;
},
    de = function de(e, t) {
  t = t || A();
  var s = se(this.config.env),
      n = e.cloudPath;
  return s.send("storage.getUploadMetadata", {
    path: n
  }).then(function (e) {
    t(null, e);
  }).catch(function (e) {
    t(e);
  }), t.promise;
},
    fe = function fe(_ref5, t) {
  var e = _ref5.fileList;
  if (t = t || A(), !e || !Array.isArray(e)) return {
    code: "INVALID_PARAM",
    message: "fileList必须是非空的数组"
  };

  var _iterator3 = (0, _createForOfIteratorHelper2.default)(e),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _t6 = _step3.value;
      if (!_t6 || "string" != typeof _t6) return {
        code: "INVALID_PARAM",
        message: "fileList的元素必须是非空的字符串"
      };
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  var s = {
    fileid_list: e
  };
  return se(this.config.env).send("storage.batchDeleteFile", s).then(function (e) {
    e.code ? t(null, e) : t(null, {
      fileList: e.data.delete_list,
      requestId: e.requestId
    });
  }).catch(function (e) {
    t(e);
  }), t.promise;
},
    pe = function pe(_ref6, t) {
  var e = _ref6.fileList;
  t = t || A(), e && Array.isArray(e) || t(null, {
    code: "INVALID_PARAM",
    message: "fileList必须是非空的数组"
  });
  var s = [];

  var _iterator4 = (0, _createForOfIteratorHelper2.default)(e),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _n6 = _step4.value;
      "object" == typeof _n6 ? (_n6.hasOwnProperty("fileID") && _n6.hasOwnProperty("maxAge") || t(null, {
        code: "INVALID_PARAM",
        message: "fileList的元素必须是包含fileID和maxAge的对象"
      }), s.push({
        fileid: _n6.fileID,
        max_age: _n6.maxAge
      })) : "string" == typeof _n6 ? s.push({
        fileid: _n6
      }) : t(null, {
        code: "INVALID_PARAM",
        message: "fileList的元素必须是字符串"
      });
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  var n = {
    file_list: s
  };
  return se(this.config.env).send("storage.batchGetDownloadUrl", n).then(function (e) {
    e.code ? t(null, e) : t(null, {
      fileList: e.data.download_list,
      requestId: e.requestId
    });
  }).catch(function (e) {
    t(e);
  }), t.promise;
},
    ge = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee29(_ref7, t) {
    var e, s, n, r;
    return regeneratorRuntime.wrap(function _callee29$(_context29) {
      while (1) {
        switch (_context29.prev = _context29.next) {
          case 0:
            e = _ref7.fileID;
            _context29.next = 3;
            return pe.call(this, {
              fileList: [{
                fileID: e,
                maxAge: 600
              }]
            });

          case 3:
            s = _context29.sent.fileList[0];

            if (!("SUCCESS" !== s.code)) {
              _context29.next = 6;
              break;
            }

            return _context29.abrupt("return", t ? t(s) : new Promise(function (e) {
              e(s);
            }));

          case 6:
            n = se(this.config.env);
            r = s.download_url;

            if (!(r = encodeURI(r), !t)) {
              _context29.next = 10;
              break;
            }

            return _context29.abrupt("return", n.download({
              url: r
            }));

          case 10:
            _context29.t0 = t;
            _context29.next = 13;
            return n.download({
              url: r
            });

          case 13:
            _context29.t1 = _context29.sent;
            (0, _context29.t0)(_context29.t1);

          case 15:
          case "end":
            return _context29.stop();
        }
      }
    }, _callee29, this);
  }));

  return function ge(_x26, _x27) {
    return _ref8.apply(this, arguments);
  };
}(),
    me = function me(_ref9, o) {
  var e = _ref9.name,
      t = _ref9.data,
      s = _ref9.query,
      n = _ref9.parse,
      r = _ref9.search;
  var i = o || A();
  var a;

  try {
    a = t ? JSON.stringify(t) : "";
  } catch (e) {
    return Promise.reject(e);
  }

  if (!e) return Promise.reject(new Error("函数名不能为空"));
  var c = {
    inQuery: s,
    parse: n,
    search: r,
    function_name: e,
    request_data: a
  };
  return se(this.config.env).send("functions.invokeFunction", c).then(function (e) {
    if (e.code) i(null, e);else {
      var _t7 = e.data.response_data;
      if (n) i(null, {
        result: _t7,
        requestId: e.requestId
      });else try {
        _t7 = JSON.parse(e.data.response_data), i(null, {
          result: _t7,
          requestId: e.requestId
        });
      } catch (e) {
        i(new Error("response data must be json"));
      }
    }
    return i.promise;
  }).catch(function (e) {
    i(e);
  }), i.promise;
},
    ye = {
  timeout: 15e3,
  persistence: "session"
},
    _e = {};

var ve = /*#__PURE__*/function () {
  function ve(e) {
    (0, _classCallCheck2.default)(this, ve);
    this.config = e || this.config, this.authObj = void 0;
  }

  (0, _createClass2.default)(ve, [{
    key: "init",
    value: function init(e) {
      switch (b.adapter || (this.requestClient = new b.adapter.reqClass({
        timeout: e.timeout || 5e3,
        timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD")
      })), this.config = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, ye), e), !0) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;

        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }

      return new ve(this.config);
    }
  }, {
    key: "auth",
    value: function auth() {
      var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          e = _ref10.persistence;

      if (this.authObj) return this.authObj;
      var t = e || b.adapter.primaryStorage || ye.persistence;
      var s;
      return t !== this.config.persistence && (this.config.persistence = t), function (e) {
        var t = e.env;
        q[t] = new R(e), F[t] = new R((0, _objectSpread2.default)((0, _objectSpread2.default)({}, e), {}, {
          persistence: "local"
        }));
      }(this.config), s = this.config, te[s.env] = new ee(s), this.authObj = new he(this.config), this.authObj;
    }
  }, {
    key: "on",
    value: function on(e, t) {
      return K.apply(this, [e, t]);
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return B.apply(this, [e, t]);
    }
  }, {
    key: "callFunction",
    value: function callFunction(e, t) {
      return me.apply(this, [e, t]);
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(e, t) {
      return fe.apply(this, [e, t]);
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL(e, t) {
      return pe.apply(this, [e, t]);
    }
  }, {
    key: "downloadFile",
    value: function downloadFile(e, t) {
      return ge.apply(this, [e, t]);
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(e, t) {
      return le.apply(this, [e, t]);
    }
  }, {
    key: "getUploadMetadata",
    value: function getUploadMetadata(e, t) {
      return de.apply(this, [e, t]);
    }
  }, {
    key: "registerExtension",
    value: function registerExtension(e) {
      _e[e.name] = e;
    }
  }, {
    key: "invokeExtension",
    value: function () {
      var _invokeExtension = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(e, t) {
        var s;
        return regeneratorRuntime.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                s = _e[e];

                if (s) {
                  _context30.next = 3;
                  break;
                }

                throw Error("\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C"));

              case 3:
                _context30.next = 5;
                return s.invoke(t, this);

              case 5:
                return _context30.abrupt("return", _context30.sent);

              case 6:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function invokeExtension(_x28, _x29) {
        return _invokeExtension.apply(this, arguments);
      }

      return invokeExtension;
    }()
  }, {
    key: "useAdapters",
    value: function useAdapters(e) {
      var _ref11 = U(e) || {},
          t = _ref11.adapter,
          s = _ref11.runtime;

      t && (b.adapter = t), s && (b.runtime = s);
    }
  }]);
  return ve;
}();

var we = new ve();

function Se(e, t, s) {
  void 0 === s && (s = {});
  var n = /\?/.test(t),
      r = "";

  for (var o in s) {
    "" === r ? !n && (t += "?") : r += "&", r += o + "=" + encodeURIComponent(s[o]);
  }

  return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;
}

var ke = /*#__PURE__*/function () {
  function ke() {
    (0, _classCallCheck2.default)(this, ke);
  }

  (0, _createClass2.default)(ke, [{
    key: "post",
    value: function post(e) {
      var t = e.url,
          s = e.data,
          n = e.headers;
      return new Promise(function (e, r) {
        _.request({
          url: Se("https:", t),
          data: s,
          method: "POST",
          header: n,
          success: function success(t) {
            e(t);
          },
          fail: function fail(e) {
            r(e);
          }
        });
      });
    }
  }, {
    key: "upload",
    value: function upload(e) {
      return new Promise(function (t, s) {
        var n = e.url,
            r = e.file,
            o = e.data,
            i = e.headers,
            a = e.fileType,
            c = _.uploadFile({
          url: Se("https:", n),
          name: "file",
          formData: Object.assign({}, o),
          filePath: r,
          fileType: a,
          header: i,
          success: function success(e) {
            var s = {
              statusCode: e.statusCode,
              data: e.data || {}
            };
            200 === e.statusCode && o.success_action_status && (s.statusCode = parseInt(o.success_action_status, 10)), t(s);
          },
          fail: function fail(e) {
             false && false, s(new Error(e.errMsg || "uploadFile:fail"));
          }
        });

        "function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {
          e.onUploadProgress({
            loaded: t.totalBytesSent,
            total: t.totalBytesExpectedToSend
          });
        });
      });
    }
  }]);
  return ke;
}();

var Te = {
  setItem: function setItem(e, t) {
    _.setStorageSync(e, t);
  },
  getItem: function getItem(e) {
    return _.getStorageSync(e);
  },
  removeItem: function removeItem(e) {
    _.removeStorageSync(e);
  },
  clear: function clear() {
    _.clearStorageSync();
  }
};
var Pe = {
  genAdapter: function genAdapter() {
    return {
      root: {},
      reqClass: ke,
      localStorage: Te,
      primaryStorage: "local"
    };
  },
  isMatch: function isMatch() {
    return !0;
  },
  runtime: "uni_app"
};
we.useAdapters(Pe);
var Ae = we,
    Ie = Ae.init;

Ae.init = function (e) {
  e.env = e.spaceId;
  var t = Ie.call(this, e);
  t.config.provider = "tencent", t.config.spaceId = e.spaceId;
  var s = t.auth;
  t.auth = function (e) {
    var t = s.call(this, e);
    return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {
      t[e] = o(t[e]).bind(t);
    }), t;
  }, t.customAuth = t.auth;
  return ["deleteFile", "getTempFileURL", "downloadFile"].forEach(function (e) {
    t[e] = o(t[e]).bind(t);
  }), t;
};

var Ee = /*#__PURE__*/function (_v) {
  (0, _inherits2.default)(Ee, _v);

  var _super8 = (0, _createSuper2.default)(Ee);

  function Ee() {
    (0, _classCallCheck2.default)(this, Ee);
    return _super8.apply(this, arguments);
  }

  (0, _createClass2.default)(Ee, [{
    key: "getAccessToken",
    value: function getAccessToken() {
      var _this11 = this;

      return new Promise(function (e, t) {
        _this11.setAccessToken("Anonymous_Access_token"), e("Anonymous_Access_token");
      });
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e, t) {
      var s = Object.assign({}, e, {
        spaceId: this.config.spaceId,
        timestamp: Date.now()
      }),
          n = {
        "Content-Type": "application/json"
      };
      "auth" !== t && (s.token = this.accessToken, n["x-basement-token"] = this.accessToken), n["x-serverless-sign"] = y.sign(s, this.config.clientSecret);
      var r = p(),
          o = r.APPID,
          i = r.PLATFORM,
          a = r.DEVICEID,
          c = r.CLIENT_SDK_VERSION;
      return n["x-client-platform"] = i, n["x-client-appid"] = o, n["x-client-device-id"] = a, n["x-client-version"] = c, n["x-client-token"] = _.getStorageSync("uni_id_token"), {
        url: this.config.requestUrl,
        method: "POST",
        data: s,
        dataType: "json",
        header: JSON.parse(JSON.stringify(n))
      };
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref12) {
      var _this12 = this;

      var e = _ref12.url,
          t = _ref12.formData,
          s = _ref12.name,
          n = _ref12.filePath,
          r = _ref12.fileType,
          o = _ref12.onUploadProgress;
      return new Promise(function (a, c) {
        var u = _this12.adapter.uploadFile({
          url: e,
          formData: t,
          name: s,
          filePath: n,
          fileType: r,
          success: function success(e) {
            e && e.statusCode < 400 ? a(e) : c(new i({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            c(new i({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });

        "function" == typeof o && u && "function" == typeof u.onProgressUpdate && u.onProgressUpdate(function (e) {
          o({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(_ref13) {
      var _this13 = this;

      var e = _ref13.filePath,
          t = _ref13.cloudPath,
          _ref13$fileType = _ref13.fileType,
          s = _ref13$fileType === void 0 ? "image" : _ref13$fileType,
          n = _ref13.onUploadProgress;
      if (!t) throw new i({
        code: "CLOUDPATH_REQUIRED",
        message: "cloudPath不可为空"
      });
      var r;
      return this.getOSSUploadOptionsFromPath({
        cloudPath: t
      }).then(function (t) {
        var _t$result = t.result,
            o = _t$result.url,
            i = _t$result.formData,
            a = _t$result.name,
            c = _t$result.fileUrl;
        r = c;
        var u = {
          url: o,
          formData: i,
          name: a,
          filePath: e,
          fileType: s
        };
        return _this13.uploadFileToOSS(Object.assign({}, u, {
          onUploadProgress: n
        }));
      }).then(function () {
        return _this13.reportOSSUpload({
          cloudPath: t
        });
      }).then(function (t) {
        return new Promise(function (s, n) {
          t.success ? s({
            success: !0,
            filePath: e,
            fileID: r
          }) : n(new i({
            code: "UPLOAD_FAILED",
            message: "文件上传失败"
          }));
        });
      });
    }
  }]);
  return Ee;
}(v);

var Oe = {
  init: function init(e) {
    var t = new Ee(e);
    ["deleteFile", "getTempFileURL"].forEach(function (e) {
      t[e] = o(t[e]).bind(t);
    });
    var s = {
      signInAnonymously: function signInAnonymously() {
        return t.authorize();
      },
      getLoginState: function getLoginState() {
        return Promise.resolve(!1);
      }
    };
    return t.auth = function () {
      return s;
    }, t.customAuth = t.auth, t;
  }
};
var Ue, be;

function De(_ref14) {
  var e = _ref14.name,
      t = _ref14.data,
      s = _ref14.spaceId,
      n = _ref14.provider;
  Ue || (Ue = p(), be = {
    ak: h.appid,
    p: "android" === d ? "a" : "i",
    ut: m(),
    uuid: g()
  });
  var r = JSON.parse(JSON.stringify(t || {})),
      o = e,
      i = s,
      a = {
    tencent: "t",
    aliyun: "a"
  }[n];
  {
    var _e15 = Object.assign({}, be, {
      fn: o,
      sid: i,
      pvd: a
    });

    Object.assign(r, {
      clientInfo: Ue,
      uniCloudClientInfo: encodeURIComponent(JSON.stringify(_e15))
    });

    var _uni$getSystemInfoSyn2 = uni.getSystemInfoSync(),
        _t8 = _uni$getSystemInfoSyn2.deviceId;

    r.uniCloudDeviceId = _t8;
  }

  if (!r.uniIdToken) {
    var _e16 = _.getStorageSync("uni_id_token") || _.getStorageSync("uniIdToken");

    _e16 && (r.uniIdToken = _e16);
  }

  return r;
}

function Ce(_ref15) {
  var _this14 = this;

  var e = _ref15.name,
      t = _ref15.data;
  var s = this.localAddress,
      n = this.localPort,
      r = {
    aliyun: "aliyun",
    tencent: "tcb"
  }[this.config.provider],
      o = this.config.spaceId,
      a = "http://".concat(s, ":").concat(n, "/system/check-function"),
      c = "http://".concat(s, ":").concat(n, "/cloudfunctions/").concat(e);
  return new Promise(function (t, s) {
    _.request({
      method: "POST",
      url: a,
      data: {
        name: e,
        platform: "h5",
        provider: r,
        spaceId: o
      },
      timeout: 3e3,
      success: function success(e) {
        t(e);
      },
      fail: function fail() {
        t({
          data: {
            code: "NETWORK_ERROR",
            message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。"
          }
        });
      }
    });
  }).then(function () {
    var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref16.data;

    var _ref17 = e || {},
        t = _ref17.code,
        s = _ref17.message;

    return {
      code: 0 === t ? 0 : t || "SYS_ERR",
      message: s || "SYS_ERR"
    };
  }).then(function (_ref18) {
    var s = _ref18.code,
        n = _ref18.message;

    if (0 !== s) {
      switch (s) {
        case "MODULE_ENCRYPTED":
          console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
          break;

        case "FUNCTION_ENCRYPTED":
          console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
          break;

        case "ACTION_ENCRYPTED":
          console.error(n || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
          break;

        case "NETWORK_ERROR":
          {
            var _e17 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";
            throw console.error(_e17), new Error(_e17);
          }

        case "SWITCH_TO_CLOUD":
          break;

        default:
          {
            var _e18 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(n, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");

            throw console.error(_e18), new Error(_e18);
          }
      }

      return _this14.originCallFunction({
        name: e,
        data: t
      });
    }

    return new Promise(function (s, n) {
      var a = De({
        name: e,
        data: t,
        provider: _this14.config.provider,
        spaceId: o
      });

      _.request({
        method: "POST",
        url: c,
        data: {
          provider: r,
          platform: "h5",
          param: a
        },
        success: function success() {
          var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              e = _ref19.statusCode,
              t = _ref19.data;

          return !e || e >= 400 ? n(new i({
            code: t.code || "SYS_ERR",
            message: t.message || "request:fail"
          })) : s({
            result: t
          });
        },
        fail: function fail(e) {
          n(new i({
            code: e.code || e.errCode || "SYS_ERR",
            message: e.message || e.errMsg || "request:fail"
          }));
        }
      });
    });
  });
}

var xe = [{
  rule: /fc_function_not_found|FUNCTION_NOT_FOUND/,
  content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确已经是否已上传到服务空间",
  mode: "append"
}];
var Re = /[\\^$.*+?()[\]{}|]/g,
    qe = RegExp(Re.source);

function Fe(e, t, s) {
  return e.replace(new RegExp((n = t) && qe.test(n) ? n.replace(Re, "\\$&") : n, "g"), s);
  var n;
}

function Le(e) {
  var t = e.callFunction;

  e.callFunction = function (e) {
    var _this15 = this;

    var s;
    s = this.isReady ? Promise.resolve() : this.initUniCloud;
    var n = e.name;
    return s.then(function () {
      e.data = De({
        name: n,
        data: e.data,
        provider: _this15.config.provider,
        spaceId: _this15.config.spaceId
      });
      var s = {
        aliyun: "aliyun",
        tencent: "tcb"
      }[_this15.config.provider];
      return new Promise(function (r, o) {
        t.call(_this15, e).then(function (e) {
          if (_this15.config.useDebugFunction && e && e.requestId) {
            var _t9 = JSON.stringify({
              spaceId: _this15.config.spaceId,
              functionName: n,
              requestId: e.requestId
            });

            console.log("[".concat(s, "-request]").concat(_t9, "[/").concat(s, "-request]"));
          }

          r(e);
        }).catch(function (t) {
          if (_this15.config.useDebugFunction && t && t.requestId) {
            var _e19 = JSON.stringify({
              spaceId: _this15.config.spaceId,
              functionName: n,
              requestId: t.requestId
            });

            console.log("[".concat(s, "-request]").concat(_e19, "[/").concat(s, "-request]"));
          }

          t && t.message && (t.message = function () {
            var _ref20 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref20$message = _ref20.message,
                e = _ref20$message === void 0 ? "" : _ref20$message,
                _ref20$extraInfo = _ref20.extraInfo,
                t = _ref20$extraInfo === void 0 ? {} : _ref20$extraInfo,
                _ref20$formatter = _ref20.formatter,
                s = _ref20$formatter === void 0 ? [] : _ref20$formatter;

            for (var _n7 = 0; _n7 < s.length; _n7++) {
              var _s$_n = s[_n7],
                  _r3 = _s$_n.rule,
                  _o2 = _s$_n.content,
                  _i2 = _s$_n.mode,
                  _a = e.match(_r3);

              if (!_a) continue;
              var _c = _o2;

              for (var _e20 = 1; _e20 < _a.length; _e20++) {
                _c = Fe(_c, "{$".concat(_e20, "}"), _a[_e20]);
              }

              for (var _e21 in t) {
                _c = Fe(_c, "{".concat(_e21, "}"), t[_e21]);
              }

              switch (_i2) {
                case "replace":
                  return _c;

                case "append":
                default:
                  return e + _c;
              }
            }

            return e;
          }({
            message: "[".concat(e.name, "]: ").concat(t.message),
            formatter: xe,
            extraInfo: {
              functionName: n
            }
          })), o(t);
        });
      });
    });
  };

  var s = e.callFunction;
  e.originCallFunction = e.callFunction, e.callFunction = function (t) {
    return o(function (t) {
      var _this16 = this;

      var n;
      n = e.isReady ? Promise.resolve() : e.initUniCloud;
      var r = n.then(function () {
        return  false ? undefined : s.call(_this16, t);
      });
      return Object.defineProperty(r, "result", {
        get: function get() {
          return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};
        }
      }), r;
    }).call(this, t);
  };
}

var Ne = Symbol("CLIENT_DB_INTERNAL");

function Me(e, t) {
  return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Ne, new Proxy(e, {
    get: function get(e, s, n) {
      return function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }(e, s) || e[s] || "string" != typeof s ? e[s] : t.get(e, s, n);
    }
  });
}

var $e = /*#__PURE__*/function (_Error2) {
  (0, _inherits2.default)($e, _Error2);

  var _super9 = (0, _createSuper2.default)($e);

  function $e(e, t) {
    var _this17;

    (0, _classCallCheck2.default)(this, $e);
    _this17 = _super9.call(this, e), _this17.code = t;
    return _this17;
  }

  return $e;
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));

function Ke(e) {
  switch (t = e, Object.prototype.toString.call(t).slice(8, -1).toLowerCase()) {
    case "array":
      return e.map(function (e) {
        return Ke(e);
      });

    case "object":
      return e._internalType === Ne || Object.keys(e).forEach(function (t) {
        e[t] = Ke(e[t]);
      }), e;

    case "regexp":
      return {
        $regexp: {
          source: e.source,
          flags: e.flags
        }
      };

    case "date":
      return {
        $date: e.toISOString()
      };

    default:
      return e;
  }

  var t;
}

function je() {
  var e = _.getStorageSync("uni_id_token") || "",
      t = e.split(".");
  if (!e || 3 !== t.length) return {
    uid: null,
    role: [],
    permission: [],
    tokenExpired: 0
  };
  var s;

  try {
    s = JSON.parse((n = t[1], decodeURIComponent(atob(n).split("").map(function (e) {
      return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
    }).join(""))));
  } catch (e) {
    throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);
  }

  var n;
  return s.tokenExpired = 1e3 * s.exp, delete s.exp, delete s.iat, s;
}

var Be = t(s(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var s = "chooseAndUploadFile:fail";

  function n(e, t) {
    return e.tempFiles.forEach(function (e, s) {
      e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + s + e.name.substring(e.name.lastIndexOf("."));
    }), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {
      return e.path;
    })), e;
  }

  function r(e, t, _ref21) {
    var s = _ref21.onChooseFile,
        n = _ref21.onUploadProgress;
    return t.then(function (e) {
      if (s) {
        var _t10 = s(e);

        if (void 0 !== _t10) return Promise.resolve(_t10).then(function (t) {
          return void 0 === t ? e : t;
        });
      }

      return e;
    }).then(function (t) {
      return !1 === t ? {
        errMsg: "chooseAndUploadFile:ok",
        tempFilePaths: [],
        tempFiles: []
      } : function (e, t) {
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
        var n = arguments.length > 3 ? arguments[3] : undefined;
        (t = Object.assign({}, t)).errMsg = "chooseAndUploadFile:ok";
        var r = t.tempFiles,
            o = r.length;
        var i = 0;
        return new Promise(function (a) {
          for (; i < s;) {
            c();
          }

          function c() {
            var s = i++;
            if (s >= o) return void (!r.find(function (e) {
              return !e.url && !e.errMsg;
            }) && a(t));
            var u = r[s];
            e.uploadFile({
              filePath: u.path,
              cloudPath: u.cloudPath,
              fileType: u.fileType,
              onUploadProgress: function onUploadProgress(e) {
                e.index = s, e.tempFile = u, e.tempFilePath = u.path, n && n(e);
              }
            }).then(function (e) {
              u.url = e.fileID, s < o && c();
            }).catch(function (e) {
              u.errMsg = e.errMsg || e.message, s < o && c();
            });
          }
        });
      }(e, t, 5, n);
    });
  }

  t.initChooseAndUploadFile = function (e) {
    return function () {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        type: "all"
      };
      return "image" === t.type ? r(e, function (e) {
        var t = e.count,
            r = e.sizeType,
            _e$sourceType = e.sourceType,
            o = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,
            i = e.extension;
        return new Promise(function (e, a) {
          uni.chooseImage({
            count: t,
            sizeType: r,
            sourceType: o,
            extension: i,
            success: function success(t) {
              e(n(t, "image"));
            },
            fail: function fail(e) {
              a({
                errMsg: e.errMsg.replace("chooseImage:fail", s)
              });
            }
          });
        });
      }(t), t) : "video" === t.type ? r(e, function (e) {
        var t = e.camera,
            r = e.compressed,
            o = e.maxDuration,
            i = e.sourceType,
            a = e.extension;
        return new Promise(function (e, c) {
          uni.chooseVideo({
            camera: t,
            compressed: r,
            maxDuration: o,
            sourceType: i,
            extension: a,
            success: function success(t) {
              var s = t.tempFilePath,
                  r = t.duration,
                  o = t.size,
                  i = t.height,
                  a = t.width;
              e(n({
                errMsg: "chooseVideo:ok",
                tempFilePaths: [s],
                tempFiles: [{
                  name: t.tempFile && t.tempFile.name || "",
                  path: s,
                  size: o,
                  type: t.tempFile && t.tempFile.type || "",
                  width: a,
                  height: i,
                  duration: r,
                  fileType: "video",
                  cloudPath: ""
                }]
              }, "video"));
            },
            fail: function fail(e) {
              c({
                errMsg: e.errMsg.replace("chooseVideo:fail", s)
              });
            }
          });
        });
      }(t), t) : r(e, function (e) {
        var t = e.count,
            r = e.extension;
        return new Promise(function (e, o) {
          var i = uni.chooseFile;
          if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (i = wx.chooseMessageFile), "function" != typeof i) return o({
            errMsg: s + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
          });
          i({
            type: "all",
            count: t,
            extension: r,
            success: function success(t) {
              e(n(t));
            },
            fail: function fail(e) {
              o({
                errMsg: e.errMsg.replace("chooseFile:fail", s)
              });
            }
          });
        });
      }(t), t);
    };
  };
}));
var He = "manual";

function We(_x30, _x31) {
  return _We.apply(this, arguments);
}

function _We() {
  _We = (0, _asyncToGenerator2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee32(e, t) {
    var s, _e26, n;

    return regeneratorRuntime.wrap(function _callee32$(_context32) {
      while (1) {
        switch (_context32.prev = _context32.next) {
          case 0:
            s = "http://".concat(e, ":").concat(t, "/system/ping");
            _context32.prev = 1;
            _context32.next = 4;
            return n = {
              url: s,
              timeout: 500
            }, new Promise(function (e, t) {
              _.request((0, _objectSpread2.default)((0, _objectSpread2.default)({}, n), {}, {
                success: function success(t) {
                  e(t);
                },
                fail: function fail(e) {
                  t(e);
                }
              }));
            });

          case 4:
            _e26 = _context32.sent;
            return _context32.abrupt("return", !(!_e26.data || 0 !== _e26.data.code));

          case 8:
            _context32.prev = 8;
            _context32.t0 = _context32["catch"](1);
            return _context32.abrupt("return", !1);

          case 11:
          case "end":
            return _context32.stop();
        }
      }
    }, _callee32, null, [[1, 8]]);
  }));
  return _We.apply(this, arguments);
}

var Ve = new ( /*#__PURE__*/function () {
  function _class2() {
    (0, _classCallCheck2.default)(this, _class2);
  }

  (0, _createClass2.default)(_class2, [{
    key: "init",
    value: function init(e) {
      var t = {};
      var s = !1 !== e.debugFunction && "development" === "production" && ( true && navigator.userAgent.indexOf("HBuilderX") > 0 || "app-plus" === "h5");

      switch (e.provider) {
        case "tencent":
          t = Ae.init(Object.assign(e, {
            useDebugFunction: s
          }));
          break;

        case "aliyun":
          t = w.init(Object.assign(e, {
            useDebugFunction: s
          }));
          break;

        case "private":
          t = Oe.init(Object.assign(e, {
            useDebugFunction: s
          }));
          break;

        default:
          throw new Error("未提供正确的provider参数");
      }

      var n = undefined;
       false && (false), t.isReady = !1;
      var r = t.auth();
      return t.initUniCloud = r.getLoginState().then(function (e) {
        return e ? Promise.resolve() : r.signInAnonymously();
      }).then(function () {
        if (false) { var _t$debugInfo, _e22, _s4; }

        return Promise.resolve();
      }).then(function () {
        var _ref23 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref23.address,
            s = _ref23.port;

        if (e) t.localAddress = e, t.localPort = s;else if (t.debugInfo) {
          var _e23 =  false ? undefined : "warn",
              _s5 = console[_e23];

          "remote" === t.debugInfo.initialLaunchType ? (t.debugInfo.forceRemote = !0, _s5("当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试")) : _s5("无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试");
        }
      }).then(function () {
        return function () {
          if (true) return;
          if (uni.getStorageSync("__LAST_DCLOUD_APPID") === h.appid) return;
          uni.setStorageSync("__LAST_DCLOUD_APPID", h.appid), uni.removeStorageSync("uni_id_token") && (console.warn("检测到当前项目与上次运行到此端口的项目不一致，自动清理uni-id保存的token信息（仅开发调试时生效）"), uni.removeStorageSync("uni_id_token"), uni.removeStorageSync("uni_id_token_expired"));
        }(), new Promise(function (e) {
           false ? (undefined) : setTimeout(function () {
            d = uni.getSystemInfoSync().platform, l = uni.getStorageSync("__DC_CLOUD_UUID") || f(32), e();
          }, 0);
        });
      }).then(function () {
        t.isReady = !0;
      }), Le(t), function (e) {
        var t = e.uploadFile;

        e.uploadFile = function (e) {
          var _this18 = this;

          var s;
          return s = this.isReady ? Promise.resolve() : this.initUniCloud, s.then(function () {
            return t.call(_this18, e);
          });
        };

        var s = e.uploadFile;

        e.uploadFile = function (e) {
          return o(s).call(this, e);
        };
      }(t), function (e) {
        e.database = function () {
          if (this._database) return this._database;
          var t = {},
              s = {};

          var n = /*#__PURE__*/function () {
            function n(e, t, s) {
              (0, _classCallCheck2.default)(this, n);
              this.content = e, this.prevStage = t, this.actionName = s;
            }

            (0, _createClass2.default)(n, [{
              key: "toJSON",
              value: function toJSON() {
                var e = this;
                var t = [e.content];

                for (; e.prevStage;) {
                  e = e.prevStage, t.push(e.content);
                }

                return {
                  $db: t.reverse().map(function (e) {
                    return {
                      $method: e.$method,
                      $param: e.$param
                    };
                  })
                };
              }
            }, {
              key: "get",
              value: function get() {
                return this._send("get", Array.from(arguments));
              }
            }, {
              key: "add",
              value: function add() {
                return this._send("add", Array.from(arguments));
              }
            }, {
              key: "remove",
              value: function remove() {
                return this._send("remove", Array.from(arguments));
              }
            }, {
              key: "update",
              value: function update() {
                return this._send("update", Array.from(arguments));
              }
            }, {
              key: "end",
              value: function end() {
                return this._send("end", Array.from(arguments));
              }
            }, {
              key: "set",
              value: function set() {
                throw new Error("clientDB禁止使用set方法");
              }
            }, {
              key: "_send",
              value: function _send(n, r) {
                var o = this.toJSON();
                return o.$db.push({
                  $method: n,
                  $param: r
                }), e.callFunction({
                  name: "DCloud-clientDB",
                  data: {
                    action: this.actionName,
                    command: o
                  }
                }).then(function (e) {
                  var _e$result = e.result,
                      n = _e$result.code,
                      r = _e$result.message,
                      o = _e$result.token,
                      i = _e$result.tokenExpired,
                      _e$result$systemInfo = _e$result.systemInfo,
                      a = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;
                  if (a) for (var _e24 = 0; _e24 < a.length; _e24++) {
                    var _a$_e = a[_e24],
                        _t11 = _a$_e.level,
                        _s6 = _a$_e.message,
                        _n9 = _a$_e.detail,
                        _r5 =  false ? undefined : _t11,
                        _o3 = console[_r5] || console.log;

                    var _i3 = "[System Info]" + _s6;

                    _n9 && (_i3 = "".concat(_i3, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_n9)), _o3(_i3);
                  }
                  return n ? Promise.reject(new $e(r, n)) : (o && i && t.refreshToken && t.refreshToken.forEach(function (e) {
                    e({
                      token: o,
                      tokenExpired: i
                    });
                  }), o && i && s.refreshToken && s.refreshToken.forEach(function (e) {
                    e({
                      token: o,
                      tokenExpired: i
                    });
                  }), Promise.resolve(e));
                }).catch(function (e) {
                  var t = new $e(e.message, e.code || "SYSTEM_ERROR");
                  return s.error && s.error.forEach(function (e) {
                    e(t);
                  }), /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB"), Promise.reject(e);
                });
              }
            }, {
              key: "useAggregate",
              get: function get() {
                var e = this,
                    t = !1;

                for (; e.prevStage;) {
                  e = e.prevStage;
                  var _s7 = e.content.$method;

                  if ("aggregate" === _s7 || "pipeline" === _s7) {
                    t = !0;
                    break;
                  }
                }

                return t;
              }
            }, {
              key: "count",
              get: function get() {
                if (!this.useAggregate) return function () {
                  return this._send("count", Array.from(arguments));
                };
                var e = this;
                return function () {
                  return i({
                    $method: "count",
                    $param: Ke(Array.from(arguments))
                  }, e, e.actionName);
                };
              }
            }]);
            return n;
          }();

          var r = ["db.Geo", "db.command", "command.aggregate"];

          function o(e, t) {
            return r.indexOf("".concat(e, ".").concat(t)) > -1;
          }

          function i(e, t, s) {
            return Me(new n(e, t, s), {
              get: function get(e, t) {
                var n = "db";
                return e && e.content && (n = e.content.$method), o(n, t) ? i({
                  $method: t
                }, e, s) : function () {
                  return i({
                    $method: t,
                    $param: Ke(Array.from(arguments))
                  }, e, s);
                };
              }
            });
          }

          function a(_ref24) {
            var e = _ref24.path,
                t = _ref24.method;
            return /*#__PURE__*/function () {
              function _class3() {
                (0, _classCallCheck2.default)(this, _class3);
                this.param = Array.from(arguments);
              }

              (0, _createClass2.default)(_class3, [{
                key: "toJSON",
                value: function toJSON() {
                  return {
                    $newDb: [].concat((0, _toConsumableArray2.default)(e.map(function (e) {
                      return {
                        $method: e
                      };
                    })), [{
                      $method: t,
                      $param: this.param
                    }])
                  };
                }
              }]);
              return _class3;
            }();
          }

          var c = {
            auth: {
              on: function on(e, s) {
                t[e] = t[e] || [], t[e].indexOf(s) > -1 || t[e].push(s);
              },
              off: function off(e, s) {
                t[e] = t[e] || [];
                var n = t[e].indexOf(s);
                -1 !== n && t[e].splice(n, 1);
              }
            },
            on: function on(e, t) {
              s[e] = s[e] || [], s[e].indexOf(t) > -1 || s[e].push(t);
            },
            off: function off(e, t) {
              s[e] = s[e] || [];
              var n = s[e].indexOf(t);
              -1 !== n && s[e].splice(n, 1);
            },
            env: Me({}, {
              get: function get(e, t) {
                return {
                  $env: t
                };
              }
            }),
            action: function action(e) {
              return Me({}, {
                get: function get(t, s) {
                  return o("db", s) ? i({
                    $method: s
                  }, null, e) : function () {
                    return i({
                      $method: s,
                      $param: Ke(Array.from(arguments))
                    }, null, e);
                  };
                }
              });
            },
            Geo: Me({}, {
              get: function get(e, t) {
                return a({
                  path: ["Geo"],
                  method: t
                });
              }
            }),
            getCloudEnv: function getCloudEnv(e) {
              if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");
              return {
                $env: e.replace("$cloudEnv_", "")
              };
            },

            get serverDate() {
              return a({
                path: [],
                method: "serverDate"
              });
            },

            get RegExp() {
              return a({
                path: [],
                method: "RegExp"
              });
            }

          },
              u = Me(c, {
            get: function get(e, t) {
              return o("db", t) ? i({
                $method: t
              }) : function () {
                return i({
                  $method: t,
                  $param: Ke(Array.from(arguments))
                });
              };
            }
          });
          return this._database = u, u;
        };
      }(t), function (e) {
        e.getCurrentUserInfo = je, e.chooseAndUploadFile = o(Be.initChooseAndUploadFile(e));
      }(t), t.init = this.init, t;
    }
  }]);
  return _class2;
}())();

(function () {
  {
    var e = {};
    if (1 === [].length) e = [][0], Ve = Ve.init(e);else {
      var _e25 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo"],
          t = [].length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间";

      _e25.forEach(function (e) {
        Ve[e] = function () {
          return console.error(t), Promise.reject(new i({
            code: "SYS_ERR",
            message: t
          }));
        };
      });
    }
    Object.assign(Ve, {
      get mixinDatacom() {
        return e = Ve, {
          props: {
            localdata: {
              type: Array,
              default: function _default() {
                return [];
              }
            },
            options: {
              type: [Object, Array],
              default: function _default() {
                return {};
              }
            },
            collection: {
              type: String,
              default: ""
            },
            action: {
              type: String,
              default: ""
            },
            field: {
              type: String,
              default: ""
            },
            orderby: {
              type: String,
              default: ""
            },
            where: {
              type: [String, Object],
              default: ""
            },
            pageData: {
              type: String,
              default: "add"
            },
            pageCurrent: {
              type: Number,
              default: 1
            },
            pageSize: {
              type: Number,
              default: 20
            },
            getcount: {
              type: [Boolean, String],
              default: !1
            },
            gettree: {
              type: [Boolean, String],
              default: !1
            },
            gettreepath: {
              type: [Boolean, String],
              default: !1
            },
            startwith: {
              type: String,
              default: ""
            },
            limitlevel: {
              type: Number,
              default: 10
            },
            groupby: {
              type: String,
              default: ""
            },
            groupField: {
              type: String,
              default: ""
            },
            distinct: {
              type: [Boolean, String],
              default: !1
            },
            foreignKey: {
              type: String,
              default: ""
            },
            loadtime: {
              type: String,
              default: "auto"
            },
            manual: {
              type: Boolean,
              default: !1
            }
          },
          data: function data() {
            return {
              mixinDatacomLoading: !1,
              mixinDatacomHasMore: !1,
              mixinDatacomResData: [],
              mixinDatacomErrorMessage: "",
              mixinDatacomPage: {}
            };
          },
          created: function created() {
            var _this19 = this;

            this.mixinDatacomPage = {
              current: this.pageCurrent,
              size: this.pageSize,
              count: 0
            }, this.$watch(function () {
              var e = [];
              return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {
                e.push(_this19[t]);
              }), e;
            }, function (e, t) {
              if (_this19.loadtime === He) return;
              var s = !1;
              var n = [];

              for (var _r6 = 2; _r6 < e.length; _r6++) {
                e[_r6] !== t[_r6] && (n.push(e[_r6]), s = !0);
              }

              e[0] !== t[0] && (_this19.mixinDatacomPage.current = _this19.pageCurrent), _this19.mixinDatacomPage.size = _this19.pageSize, _this19.onMixinDatacomPropsChange(s, n);
            });
          },
          methods: {
            onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {},
            mixinDatacomEasyGet: function mixinDatacomEasyGet() {
              var _this20 = this;

              var _ref25 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                  _ref25$getone = _ref25.getone,
                  e = _ref25$getone === void 0 ? !1 : _ref25$getone,
                  t = _ref25.success,
                  s = _ref25.fail;

              this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then(function (s) {
                _this20.mixinDatacomLoading = !1;
                var _s$result = s.result,
                    n = _s$result.data,
                    r = _s$result.count;
                _this20.getcount && (_this20.mixinDatacomPage.count = r), _this20.mixinDatacomHasMore = n.length < _this20.pageSize;
                var o = e ? n.length ? n[0] : void 0 : n;
                _this20.mixinDatacomResData = o, t && t(o);
              }).catch(function (e) {
                _this20.mixinDatacomLoading = !1, _this20.mixinDatacomErrorMessage = e, s && s(e);
              }));
            },
            mixinDatacomGet: function mixinDatacomGet() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              var s = e.database();
              var n = t.action || this.action;
              n && (s = s.action(n));
              var r = t.collection || this.collection;
              s = s.collection(r);
              var o = t.where || this.where;
              o && Object.keys(o).length && (s = s.where(o));
              var i = t.field || this.field;
              i && (s = s.field(i));
              var a = t.foreignKey || this.foreignKey;
              a && (s = s.foreignKey(a));
              var c = t.groupby || this.groupby;
              c && (s = s.groupBy(c));
              var u = t.groupField || this.groupField;
              u && (s = s.groupField(u)), !0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (s = s.distinct());
              var h = t.orderby || this.orderby;
              h && (s = s.orderBy(h));
              var l = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,
                  d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,
                  f = void 0 !== t.getcount ? t.getcount : this.getcount,
                  p = void 0 !== t.gettree ? t.gettree : this.gettree,
                  g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,
                  m = {
                getCount: f
              },
                  y = {
                limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel,
                startWith: void 0 !== t.startwith ? t.startwith : this.startwith
              };
              return p && (m.getTree = y), g && (m.getTreePath = y), s = s.skip(d * (l - 1)).limit(d).get(m), s;
            }
          }
        };
        var e;
      }

    });
  }
})();

var ze = Ve;
var _default2 = ze;
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "c8ba"), __webpack_require__(/*! ./../../../../../node-libs-browser/mock/process.js */ "4362"), __webpack_require__(/*! ./node_modules/@dcloudio/uni-h5/src/core/helpers/console */ "5a52")["default"]))

/***/ }),

/***/ "accc":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-iso-string.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "23e7");
var toISOString = __webpack_require__(/*! ../internals/date-to-iso-string */ "64e5");

// `Date.prototype.toISOString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit has a broken implementations
$({ target: 'Date', proto: true, forced: Date.prototype.toISOString !== toISOString }, {
  toISOString: toISOString
});


/***/ }),

/***/ "b380":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "131a");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _setPrototypeOf;

function _setPrototypeOf(o, p) {
  exports.default = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "b85c":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "a4d3");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "e01a");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "d28b");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "d3b7");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "3ca3");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "ddb0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _createForOfIteratorHelper;

var _unsupportedIterableToArray = _interopRequireDefault(__webpack_require__(/*! ./unsupportedIterableToArray */ "06c5"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = (0, _unsupportedIterableToArray.default)(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/***/ }),

/***/ "baa5":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.last-index-of.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "23e7");
var lastIndexOf = __webpack_require__(/*! ../internals/array-last-index-of */ "e58c");

// `Array.prototype.lastIndexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof
$({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
  lastIndexOf: lastIndexOf
});


/***/ }),

/***/ "bf19":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/web.url.to-json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "23e7");

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
$({ target: 'URL', proto: true, enumerable: true }, {
  toJSON: function toJSON() {
    return URL.prototype.toString.call(this);
  }
});


/***/ }),

/***/ "d967":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.to-string */ "d3b7");

__webpack_require__(/*! core-js/modules/es.reflect.construct */ "4ae1");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "25f0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _isNativeReflectConstruct;

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "df7c":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ "4362")))

/***/ }),

/***/ "eee7":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim-start.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "23e7");
var $trimStart = __webpack_require__(/*! ../internals/string-trim */ "58a8").start;
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "c8d2");

var FORCED = forcedStringTrimMethod('trimStart');

var trimStart = FORCED ? function trimStart() {
  return $trimStart(this);
} : ''.trimStart;

// `String.prototype.{ trimStart, trimLeft }` methods
// https://github.com/tc39/ecmascript-string-left-right-trim
$({ target: 'String', proto: true, forced: FORCED }, {
  trimStart: trimStart,
  trimLeft: trimStart
});


/***/ }),

/***/ "f4b3":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "23e7");
var fails = __webpack_require__(/*! ../internals/fails */ "d039");
var toObject = __webpack_require__(/*! ../internals/to-object */ "7b0b");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "c04e");

var FORCED = fails(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
});

// `Date.prototype.toJSON` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tojson
$({ target: 'Date', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),

/***/ "fa95":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.index-of */ "c975");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "d3b7");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "25f0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _isNativeFunction;

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

/***/ })

}]);