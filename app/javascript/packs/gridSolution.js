// GRID CHALLENGE SOLUTION

;(function () {
  let canvas, ctx
// basic line class
  class Line {
    constructor (color, lineWidth, startX, startY, endX, endY) {
      this.color = color
      this.lineWidth = lineWidth
      this.startX = startX
      this.startY = startY
      this.endX = endX
      this.endY = endY
    }

    draw (ctx) {
      const { color, lineWidth, startX, startY, endX, endY } = this

      ctx.beginPath()
      ctx.strokeStyle = color
      ctx.lineWidth = lineWidth
      ctx.moveTo(startX, startY)
      ctx.lineTo(endX, endY)
      ctx.stroke()
    }
  }
  // draws a grid
  function createGrid () {
    // draw a line every *step* pixels
    const step = 50

    // our end points
    const width = canvas.width
    const height = canvas.height

    // set our styles
    ctx.save()
    ctx.strokeStyle = 'gray' // line colors
    ctx.fillStyle = 'black' // text color
    ctx.font = '14px Monospace'
    ctx.lineWidth = 0.50
    var ix=0;
    // draw vertical from X to Height
    for (let x = 0; x < width; x += step) {
      // draw vertical line
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()

      // draw text
      ctx.fillText(ix, x, 12)
      ix++
    }

    var iy=0;
    // draw horizontal from Y to Width
    for (let y = 0; y < height; y += step) {
      // draw horizontal line
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()

      // draw text
      ctx.fillText(iy, 0, y)
      iy++
    }
    //new Line('red', 1, 50, 50, 50, 200).draw(ctx)
    // restore the styles from before this function was called
    ctx.restore()
  }
  function draw(){
    ctx.beginPath();
    var x =10, y=100;
    ctx.fillRect(700,100,100,100);
    ctx.arc(x,y,20,0,2*Math.PI);
    ctx.fillStyle = 'rgba(250,00,0.4)';
    ctx.fill();

    x+=2;
    ctx.fillStyle="rgba(34,45,23,0.4)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(draw);
    //ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.restore()
  }
  var i=0;
  var points = []
  var dx,dy,ax,ay;
  var arrivex,arrivey;
  var x,y;
  var e=0;
  var time;
  var vita=false;
  var boucle=0;
  function move(){   
      
        ctx.fillText("X", x,y);
        requestAnimationFrame(move);
        if(dx==ax){
          if(y==ay*50){
            clearInterval(timer);
            e++;
            boucle++;
            if(ax!=arrivex||ay!=arrivey){
              document.getElementById('go').click();
            }
            vita=true;
            return;
          }
      }
       if(dy==ay){
        if(x==ax*50){
            clearInterval(timer);
            e++;
            boucle++;
            if(ax!=arrivex||ay!=arrivey){
              document.getElementById('go').click();
            }
            vita=true;
            return;
          }
      }
    if(dx==ax){
      if(dy<ay){y++;}
      if(dy>ay){y--;}
      
    }
    if(dy==ay){
      if(dx<ax){x++;}
      if(dx>ax){x--;}
      console.log("depart"+dx);
      console.log("arrive"+ax);
      
    }
  }
  function init () {
    // set our config variables
    canvas = document.getElementById('gameCanvas')
    ctx = canvas.getContext('2d')
    createGrid();
    // draw();
    const lines = []
    
    var options = document.getElementById('list').options;
    for(let i=0;i<options.length-1;i++){
      // console.log(options[i].value);
      const xy=options[i].value.split("-").map(Number);
      points.push(xy);
      const xy1=options[i+1].value.split("-").map(Number);
      points.push(xy1);
      lines.push(new Line('red', 1, xy[0]*50, xy[1]*50, xy1[0]*50, xy1[1]*50).draw(ctx));
      if(i==0){
        ctx.fillText("A", xy[0]*50, xy[1]*50)
      }if(i==options.length-2){
        ctx.fillText("B", xy1[0]*50, xy1[1]*50)
      }
    }
    var dx1=parseInt(document.getElementById('departx').value);
    //dx1=2.5;
    var dy1=parseInt(document.getElementById('departy').value);
    //dy1=2;
    var ax1=parseInt(document.getElementById('dx').value);
    var ay1=parseInt(document.getElementById('dy').value);
    arrivex=ax1;arrivey=ay1;
    for(let i=0;i<points.length-1;i++){
      if(
        dx1 >= Math.min(points[i][0], points[i+1][0]) &&
        dx1 <= Math.max(points[i][0], points[i+1][0]) &&
        dy1 >= Math.min(points[i][1], points[i+1][1]) &&
        dy1 <= Math.max(points[i][1], points[i+1][1])
      ){
        e=i;
      }
    }
    document.getElementById('go').onclick=function(){
      vita=false;
      console.log(e);
        var depart =points[e];
        var arrive =points[e+1];
        dx=depart[0];dy=depart[1];
        if(boucle==0){
          dx=dx1;dy=dy1;
        }
        ax=arrive[0];ay=arrive[1];
        x=dx*50,y=dy*50;
        //if(dx1>=depart[0] && dy1>=depart[1] ){
            // console.log(e);
            timer=setInterval(move, 1000);
       // }
      if(vita==true){
        document.getElementById('go').click();
      }
    }

  }
  
  document.addEventListener('DOMContentLoaded', init)
})()