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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/gridSolution.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/gridSolution.js":
/*!**********************************************!*\
  !*** ./app/javascript/packs/gridSolution.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// GRID CHALLENGE SOLUTION
;

(function () {
  var canvas, ctx; // basic line class

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
  }(); // draws a grid


  function createGrid() {
    // draw a line every *step* pixels
    var step = 50; // our end points

    var width = canvas.width;
    var height = canvas.height; // set our styles

    ctx.save();
    ctx.strokeStyle = 'gray'; // line colors

    ctx.fillStyle = 'black'; // text color

    ctx.font = '14px Monospace';
    ctx.lineWidth = 0.50;
    var ix = 0; // draw vertical from X to Height

    for (var _x = 0; _x < width; _x += step) {
      // draw vertical line
      ctx.beginPath();
      ctx.moveTo(_x, 0);
      ctx.lineTo(_x, height);
      ctx.stroke(); // draw text

      ctx.fillText(ix, _x, 12);
      ix++;
    }

    var iy = 0; // draw horizontal from Y to Width

    for (var _y = 0; _y < height; _y += step) {
      // draw horizontal line
      ctx.beginPath();
      ctx.moveTo(0, _y);
      ctx.lineTo(width, _y);
      ctx.stroke(); // draw text

      ctx.fillText(iy, 0, _y);
      iy++;
    } //new Line('red', 1, 50, 50, 50, 200).draw(ctx)
    // restore the styles from before this function was called


    ctx.restore();
  }

  function draw() {
    ctx.beginPath();
    var x = 10,
        y = 100;
    ctx.fillRect(700, 100, 100, 100);
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(250,00,0.4)';
    ctx.fill();
    x += 2;
    ctx.fillStyle = "rgba(34,45,23,0.4)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(draw); //ctx.clearRect(0,0,canvas.width,canvas.height)

    ctx.restore();
  }

  var i = 0;
  var points = [];
  var dx, dy, ax, ay;
  var arrivex, arrivey;
  var x, y;
  var e = 0;
  var time;
  var vita = false;

  function move() {
    ctx.fillText("X", x, y);
    requestAnimationFrame(move);

    if (dx == ax) {
      if (y == ay * 50) {
        clearInterval(timer);
        e++;

        if (ax != arrivex || ay != arrivey) {
          document.getElementById('go').click();
        }

        vita = true;
        return;
      }
    }

    if (dy == ay) {
      if (x == ax * 50) {
        clearInterval(timer);
        e++;

        if (ax != arrivex || ay != arrivey) {
          document.getElementById('go').click();
        }

        vita = true;
        return;
      }
    }

    if (dx == ax) {
      y++;
    }

    if (dy == ay) {
      x++; //console.log(x);
      //console.log(y);
    }
  }

  function init() {
    // set our config variables
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    createGrid(); // draw();

    var lines = [];
    var options = document.getElementById('list').options;

    for (var _i = 0; _i < options.length - 1; _i++) {
      // console.log(options[i].value);
      var xy = options[_i].value.split("-");

      points.push(xy);

      var xy1 = options[_i + 1].value.split("-");

      points.push(xy1);
      lines.push(new Line('red', 1, xy[0] * 50, xy[1] * 50, xy1[0] * 50, xy1[1] * 50).draw(ctx));

      if (_i == 0) {
        ctx.fillText("A", xy[0] * 50, xy[1] * 50);
      }

      if (_i == options.length - 2) {
        ctx.fillText("B", xy1[0] * 50, xy1[1] * 50);
      }
    }

    var dx1 = document.getElementById('departx').value;
    dx1 = 2;
    var dy1 = document.getElementById('departy').value;
    dy1 = 2.5;
    var ax1 = document.getElementById('dx').value;
    var ay1 = document.getElementById('dy').value;
    arrivex = ax1;
    arrivey = ay1;

    for (var _i2 = 0; _i2 < points.length - 1; _i2++) {
      if (points[_i2][0] <= dx1 && dx1 <= points[_i2 + 1][0] && points[_i2][1] <= dy1 && dy1 <= points[_i2 + 1][1]) {
        e = _i2;
      }
    }

    document.getElementById('go').onclick = function () {
      vita = false;
      console.log(e);
      var depart = points[e];
      var arrive = points[e + 1];
      dx = depart[0];
      dy = depart[1]; //if(e==0){
      //dx=dx1;dy=dy1;
      //}

      ax = arrive[0];
      ay = arrive[1];
      x = dx * 50, y = dy * 50; //if(dx1>=depart[0] && dy1>=depart[1] ){
      // console.log(e);

      timer = setInterval(move, 1000); // }

      if (vita == true) {
        document.getElementById('go').click();
      }
    };
  }

  document.addEventListener('DOMContentLoaded', init);
})();

/***/ })

/******/ });
//# sourceMappingURL=gridSolution-f37d6b6faf65588f256a.js.map