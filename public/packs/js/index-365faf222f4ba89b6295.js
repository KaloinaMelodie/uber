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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/index.js":
/*!***************************************!*\
  !*** ./app/javascript/packs/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '../libs/canvas-coords'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// coordinate grid helper library


(function () {
  var canvas, ctx, mouse, grid; // function to create rectangle objects

  var Rectangle = /*#__PURE__*/function () {
    // you create new Rectangles by calling this as a function
    // these are the arguments you pass in
    // add default values to avoid errors on empty arguments
    function Rectangle() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var fillColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
      var strokeColor = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
      var strokeWidth = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 2;

      _classCallCheck(this, Rectangle);

      // ensure the arguments passed in are numbers
      // a bit overkill for this tutorial
      this.x = Number(x);
      this.y = Number(y);
      this.width = Number(width);
      this.height = Number(height);
      this.fillColor = fillColor;
      this.strokeColor = strokeColor;
      this.strokeWidth = strokeWidth;
    } // get keyword causes this method to be called
    // when you use myRectangle.area


    _createClass(Rectangle, [{
      key: "area",
      get: function get() {
        return this.width * this.height;
      } // gets the X position of the left side

    }, {
      key: "left",
      get: function get() {
        // origin is at top left so just return x
        return this.x;
      } // get X position of right side

    }, {
      key: "right",
      get: function get() {
        // x is left position + the width to get end point
        return this.x + this.width;
      } // get the Y position of top side

    }, {
      key: "top",
      get: function get() {
        // origin is at top left so just return y
        return this.y;
      } // get Y position at bottom

    }, {
      key: "bottom",
      get: function get() {
        return this.y + this.height;
      } // draw rectangle to screen

    }, {
      key: "draw",
      value: function draw() {
        // destructuring
        var x = this.x,
            y = this.y,
            width = this.width,
            height = this.height,
            fillColor = this.fillColor,
            strokeColor = this.strokeColor,
            strokeWidth = this.strokeWidth; // saves the current styles set elsewhere
        // to avoid overwriting them

        ctx.save(); // set the styles for this shape

        ctx.fillStyle = fillColor;
        ctx.lineWidth = strokeWidth; // create the *path*

        ctx.beginPath();
        ctx.strokeStyle = strokeColor;
        ctx.rect(x, y, width, height); // draw the path to screen

        ctx.fill();
        ctx.stroke(); // restores the styles from earlier
        // preventing the colors used here
        // from polluting other drawings

        ctx.restore();
      }
    }]);

    return Rectangle;
  }(); // initial setup


  function init() {
    // set our config variables
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d'); // helper utils for writing tutorial

    mouse = new !(function webpackMissingModule() { var e = new Error("Cannot find module '../libs/canvas-coords'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(ctx, canvas, 'black');
    grid = new !(function webpackMissingModule() { var e = new Error("Cannot find module '../libs/canvas-coords'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    mouse.track();
    window.requestAnimationFrame(update);
  } // all example shapes


  function drawExamples() {
    // outlined square X: 50, Y: 35, width/height 50
    ctx.beginPath();
    ctx.strokeRect(50, 35, 50, 50); // filled square X: 125, Y: 35, width/height 50

    ctx.beginPath();
    ctx.fillRect(125, 35, 50, 50); // save to prevent first two squares
    // from changing due to coordinate animation

    ctx.save(); // filled, outlined square X: 200, Y: 35, width/height 50

    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.fillStyle = 'blue';
    ctx.lineWidth = 5;
    ctx.rect(200, 35, 50, 50);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(275, 35, 50, 50);
    ctx.fill();
    ctx.stroke();
    ctx.restore(); // create a new rectangle object using the Rectangle class

    var mySquare = new Rectangle(400, 85, 50, 50, 'gold'); // now we have data and methods to describe our square
    // console.log(mySquare)
    // fillColor: "gold"
    // height: 50
    // strokeColor: ""
    // strokeWidth: 2
    // width: 50
    // x: 450
    // y: 100
    // area: (...)
    // bottom: (...)
    // left: (...)
    // right: (...)
    // top: (...)
    // draw the square data to screen

    mySquare.draw(); // lets use the helper methods to
    // draw shapes on the sides of mySquare

    var childrenSquares = [// top side square - align x with mySquare's left side
    // align bottom with top of mySquare
    new Rectangle(mySquare.left, mySquare.top - 50, 50, 50, 'red'), // right side square - align x with right side of mySquare
    // align top with mySquare top
    new Rectangle(mySquare.right, mySquare.top, 50, 50, 'green'), // bottom square
    new Rectangle(mySquare.left, mySquare.bottom, 50, 50, 'blue'), // left square
    new Rectangle(mySquare.left - 50, mySquare.top, 50, 50, 'magenta')]; // draw all of the child squares by looping over them

    childrenSquares.forEach(function (square) {
      return square.draw();
    }); // LINES

    ctx.save();
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'blue';
    ctx.lineWidth = 4; // stroked trapezoid

    ctx.beginPath(); // sets our starting point

    ctx.moveTo(50, 200); // create a line from start point to X: 100, Y: 200

    ctx.lineTo(100, 200); // create the right side

    ctx.lineTo(90, 180); // top side

    ctx.lineTo(60, 180); // left side and closes the path

    ctx.closePath(); // draws it to screen via a stroke

    ctx.stroke(); // filled trapezoid

    ctx.beginPath();
    ctx.moveTo(150, 200); // starting point

    ctx.lineTo(200, 200); // bottom side

    ctx.lineTo(190, 180); // right side

    ctx.lineTo(160, 180); // top side
    // no need to closePath, fill automatically closes the path

    ctx.fill();
    ctx.restore(); // TEXT
    // usual setup

    ctx.save();
    ctx.strokeStyle = 'red';
    ctx.fillStyle = 'black'; // text specific styles

    ctx.font = 'bold 16px Monospace';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.strokeText('Stroked Text', 50, 250);
    var textWidth = ctx.measureText('Stroked Text').width; // previous X position + width + 25px margin

    ctx.fillText('Filled Text', 50 + textWidth + 25, 250);
    ctx.restore(); // ARCS / Circles
    // usual setup

    ctx.save(); // remember to use beginPath for each new shape
    // or you'll end up with a line connecting them

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'red'; // x, y, radius, startAngle, endAngle, antiClockwise = false by default

    ctx.arc(50, 300, 15, 0, 2 * Math.PI, false); // full circle

    ctx.fill();
    ctx.stroke(); // half circle counter clockwise

    ctx.beginPath();
    ctx.arc(100, 300, 15, 0, Math.PI, true);
    ctx.fill();
    ctx.stroke(); // half circle clockwise

    ctx.beginPath();
    ctx.arc(150, 300, 15, 0, Math.PI);
    ctx.fill();
    ctx.stroke(); // pacman like

    ctx.beginPath();
    ctx.fillStyle = 'gold';
    ctx.arc(200, 300, 15, 0.1 * Math.PI, 1.85 * Math.PI);
    ctx.lineTo(200, 300);
    ctx.fill();
    ctx.restore(); // TRIANGLES
    // usual setup

    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'orangered'; // Filled Triangle

    ctx.moveTo(50, 400); // starting point

    ctx.lineTo(50, 350); // left side

    ctx.lineTo(100, 400); // hypotenuse / long side

    ctx.fill(); // closes the bottom side

    ctx.beginPath();
    ctx.moveTo(150, 400); // starting point

    ctx.lineTo(200, 400); // bottom side

    ctx.lineTo(200, 350); // right side

    ctx.closePath(); // hypotenuse/long side (remember to close path for strokes!)

    ctx.stroke();
    ctx.restore();
  } // only used for the grid helper library while writing tutorial


  function update() {
    window.requestAnimationFrame(update);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // draw grid on bottom

    grid.draw(ctx, canvas); // all of the actual examples from tutorial

    drawExamples(); // draw mouse coordinates on top

    mouse.draw();
  }

  document.addEventListener('DOMContentLoaded', init);
})();

/***/ })

/******/ });
//# sourceMappingURL=index-365faf222f4ba89b6295.js.map