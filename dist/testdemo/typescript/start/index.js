(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["w567675"] = factory();
	else
		root["w567675"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 317);
/******/ })
/************************************************************************/
/******/ ({

/***/ 262:
/***/ function(module, exports) {

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var smallStudent = (function (_super) {
    __extends(smallStudent, _super);
    function smallStudent(x, y, z) {
        return _super.call(this, x, y, z) || this;
    }
    smallStudent.prototype.a = function () {
        [].map(function () {
        });
    };
    return smallStudent;
}(Student));
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
var a = 1;
var b = '2';
var c = true;
var d = [1, 2, 3];
var e;
e = [1, '2'];
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["yellow"] = 1] = "yellow";
    color[color["green"] = 2] = "green";
})(color || (color = {}));
var f = color.red;
var sure = 4;
sure.toString();
var list = [1, , 'ss'];
list[1] = true;
var wranUser = function () {
    alert(22222);
};
var someValue = 'this is string';
var strLength = someValue.length;
var obj = { x: 1, y: 2 };
var xx = obj.x, yy = obj.y;
var obj2 = __assign({}, obj, { y: 3 });
var createSquare = function (config) {
    console.log(config);
    var newSquare = {
        color: 111,
        area: 100,
    };
    if (config.color) {
        newSquare.color = Number(config.color);
    }
    return newSquare;
};
createSquare({ color: '1', width: 1, a: 1 });
var mySearch = function (src, sub) {
    return false;
};
mySearch('1', '2');
var myArray;
myArray = { x: '1' };
var myStr = myArray[1];
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var NumberDictionnaryObj = {
    x: 1,
    length: 1,
    name: 'xxx'
};
var NumberDictionnaryObj2 = NumberDictionnaryObj;
NumberDictionnaryObj2['x'] = 1;
var AnalogClock = (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log('tick tock');
    };
    return AnalogClock;
}());
var createClock = function (ctor, hour, minute) {
    return new ctor(hour, minute);
};
var analog = createClock(AnalogClock, 12, 17);
var square = {};
square.color = 'bule';
var getCounter = function () {
    var counter = (function (start) { });
    counter.reset = function () { };
    return counter;
};
var cc = getCounter();
cc.reset();
var Control = (function () {
    function Control() {
    }
    return Control;
}());
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super.apply(this, arguments) || this;
    }
    Button.prototype.xx2 = function () {
    };
    return Button;
}(Control));
var Animal2 = (function () {
    function Animal2(name) {
        this.name = name;
    }
    Animal2.prototype.sayName = function () {
        console.log(this.name);
    };
    return Animal2;
}());
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name2) {
        var _this = _super.call(this, name2) || this;
        _this.name2 = name2;
        return _this;
    }
    Object.defineProperty(Horse.prototype, "fullName", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name + Horse.origin.x;
        },
        enumerable: true,
        configurable: true
    });
    return Horse;
}(Animal2));
Horse.origin = { x: 0, y: 0 };
var tom = new Horse('sss');
tom.fullName = '1';
tom.sayName();
var Animal3 = (function () {
    function Animal3() {
    }
    Animal3.prototype.makeSound = function () {
        return 2222;
    };
    return Animal3;
}());
var Horse2 = (function () {
    function Horse2() {
    }
    Horse2.prototype.makeSound = function () {
        return 1111;
    };
    return Horse2;
}());
console.log(Horse2 === Animal3);
var horse2 = Horse2;
var ccccc = new horse2();


/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(262);


/***/ }

/******/ });
});
//# sourceMappingURL=index.js.map