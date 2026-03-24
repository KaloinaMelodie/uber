/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/grid.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/grid.js":
/*!**************************************!*\
  !*** ./app/javascript/packs/grid.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// This was the first iteration
// of the animated grid I put together
;

(function () {
  var canvas, ctx, mouse; // helper / visualizer to see x / y coordinates

  var Mouse = /*#__PURE__*/function () {
    function Mouse(ctx) {
      var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      _classCallCheck(this, Mouse);

      this.x = x;
      this.y = y;
      this.ctx = ctx;
    } // sets x, y from mousemove event


    _createClass(Mouse, [{
      key: "pos",
      set: function set(evt) {
        var canvasDimensions = canvas.getBoundingClientRect(); // get mouse position relative to canvas

        this.x = Math.floor(evt.clientX - canvasDimensions.left);
        this.y = Math.floor(evt.clientY - canvasDimensions.top);
        var x = this.x,
            y = this.y,
            ctx = this.ctx;
        var txt = "X: ".concat(x, ", Y: ").concat(y); // set the font

        ctx.font = '16px Monospace'; // offset the text position for readability (so it doesnt go off screen)

        var offsetX = x < canvas.width / 2 ? 20 : -ctx.measureText(txt).width - 20;
        var offsetY = y < canvas.height / 2 ? 25 : -18;
        ctx.fillText(txt, this.x + offsetX, this.y + offsetY);
      }
    }]);

    return Mouse;
  }(); // basic line class


  var Line = /*#__PURE__*/function () {
    function Line(color, lineWidth, startX, startY, endX, endY) {
      _classCallCheck(this, Line);

      this.color = color;
      this.lineWidth = lineWidth;
      this.startX = startX;
      this.startY = startY;
      this.endX = endX;
      this.endY = endY;
    }

    _createClass(Line, [{
      key: "draw",
      value: function draw(ctx) {
        var color = this.color,
            lineWidth = this.lineWidth,
            startX = this.startX,
            startY = this.startY,
            endX = this.endX,
            endY = this.endY;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }
    }]);

    return Line;
  }(); // grid


  var Grid = /*#__PURE__*/function () {
    function Grid() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'gray';
      var lineWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.25;
      var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 25;
      var boldNth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;
      var boldColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'Darkgray';
      var boldWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0.5;

      _classCallCheck(this, Grid);

      // set our values
      this.color = color;
      this.lineWidth = lineWidth;
      this.step = step;
      this.boldNth = boldNth;
      this.boldColor = boldColor;
      this.boldWidth = boldWidth; // set this to not exist at start

      this.lines = null;
    } // adds lines to our lines array property


    _createClass(Grid, [{
      key: "createLines",
      value: function createLines() {
        var color = this.color,
            lineWidth = this.lineWidth,
            step = this.step,
            boldNth = this.boldNth,
            boldColor = this.boldColor,
            boldWidth = this.boldWidth; // create a lines array to build upon

        var lines = []; // used to calculate every nth line, i.e. every 5th line

        var div = boldNth * step; // create vertical lines

        for (var x = 0; x < canvas.width; x += step) {
          // if this is equal to 0
          // it means its our nth line and we should bold it
          var isNth = x % div === 0; // start at X: x, Y: 0 & end at X: x, Y: canvas.height
          // X is unchanged from start to end, only Y changes thus creating
          // a vertical line

          lines.push(isNth ? new Line(boldColor, boldWidth, x, 0, x, canvas.height) : new Line(color, lineWidth, x, 0, x, canvas.height));
        } // create horizontal lines


        for (var y = 0; y < canvas.height; y += step) {
          var _isNth = y % div === 0;

          lines.push(_isNth ? new Line(boldColor, boldWidth, 0, y, canvas.width, y) : new Line(color, lineWidth, 0, y, canvas.width, y));
        } // add the array as a property


        this.lines = lines;
      }
    }, {
      key: "drawText",
      value: function drawText(ctx) {
        var step = this.step,
            boldNth = this.boldNth,
            boldColor = this.boldColor; // set font

        ctx.font = '16px Monospace';
        ctx.fillStyle = boldColor; // add 0,0

        ctx.fillText('0', 1, 15); // create vertical text

        for (var x = step * boldNth; x < canvas.width; x += step * boldNth) {
          // text with value of x, at position x, 15 pixels below top of canvas
          ctx.fillText(x, x, 15);
        } // create horizontal text


        for (var y = step * boldNth; y < canvas.height; y += step * boldNth) {
          // text with value of y, at position 0, Y + 15 pixels below bolded line
          ctx.fillText(y, 0, y + 15);
        }
      } // draw all of our lines

    }, {
      key: "draw",
      value: function draw(ctx) {
        if (!this.lines) this.createLines(); // uncomment this to see the array of lines
        // console.log(lines)

        this.lines.forEach(function (line) {
          return line.draw(ctx);
        });
        this.drawText(ctx);
      }
    }]);

    return Grid;
  }();

  function init() {
    // set our config variables
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    mouse = new Mouse(ctx); // draw grid
    // default values
    // color = 'gray', lineWidth = 0.25, step = 25,
    // boldNth = 5, boldColor = 'Darkgray', boldWidth = 0.5
    // default gray version
    // const grid = new Grid()
    // gray with 50px steps

    var grid = new Grid('gray', 0.25, 50, 2); // pink version
    // const grid = new Grid('DeepPink', 0.25, 50, 2, 'DarkViolet', 1)

    grid.draw(ctx); // logs coordinates at mouse position to console

    canvas.addEventListener('mousemove', function (evt) {
      // clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height); // redraw grid

      grid.draw(ctx); // call the mouse set pos() function passing in evt

      mouse.pos = evt; // console.log(`Mouse X: ${mouse.x}, Y: ${mouse.y}`)
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();

/***/ })

/******/ });
//# sourceMappingURL=grid-6fe4084c75c41ee07f67.js.map