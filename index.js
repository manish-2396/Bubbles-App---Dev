const bubble_app = document.querySelector("#bubble_app");
const reset = document.querySelector("#reset");
const shape = bubble_app.getContext("2d");

// circle functions

circular_shape(150, 60, 35, 0, "#fed866");

circular_shape(150, 190, 35, 0, "#2a79e4");

circular_shape(150, 320, 35, 0, "#cc0101");

circular_shape(150, 450, 35, 0, "#6ba84e");

// create circular shape
function circular_shape(x, y, radius, startAngle, color) {
  shape.beginPath();
  shape.lineWidth = 2.5;
  shape.arc(x, y, radius, startAngle, 2 * Math.PI, false);
  shape.fillStyle = color;
  shape.fill();
  shape.stroke();
}

// set gap between two arrows

const a1 = 125;
const a2 = 255;
const a3 = 385;

// arrow functions

trinagle_shape(800, 64, 850, 24, 102, 61);

trinagle_shape(800, 64 + a1, 850, 24 + a1, 102 + a1, 61 + a1);

trinagle_shape(800, 64 + a2, 850, 24 + a2, 102 + a2, 61 + a2);

trinagle_shape(800, 64 + a3, 850, 24 + a3, 102 + a3, 61 + a3);

// create arrow shape
//sx ans sy = start point of trinagle
//ex , eyt and eyb = end point of trinagle
function trinagle_shape(sx, sy, ex, eyt, eyb, l) {
  // trinagle shape
  shape.beginPath();
  shape.moveTo(sx, sy);
  shape.lineTo(ex, eyt);
  shape.lineTo(ex, eyb);
  shape.fillStyle = "black";
  shape.fill();

  //  ractangular shape
  shape.beginPath();
  shape.lineWidth = 20;
  shape.moveTo(ex, l);
  shape.lineTo(ex + 140, l);
  shape.stroke();
}

// find x and y conrdinates of the circular shape
function getMousePosition(canvas, event) {
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;

  // switch( x , y)

  if (x > 110 && x < 190 && y > 28 && y < 95) {
    cir1();
  } else if (x > 110 && x < 190 && y > 151 && y < 228) {
    cir2();
  } else if (x > 110 && x < 190 && y > 289 && y < 351) {
    cir3();
  } else if (x > 110 && x < 190 && y > 409 && y < 488) {
    cir4();
  }
}

bubble_app.addEventListener("mousedown", function (event) {
  getMousePosition(bubble_app, event);
});

// initialize movement points
let move1 = 0;
let move2 = 0;
let move3 = 0;
let move4 = 0;

// motion speed set
const motion_speed = 3;

// 1st arrow movement
function cir1() {
  shape.fillStyle = "#fff";
  shape.fillRect(186, 20, 830, 85);

  trinagle_shape(800 - move1, 64, 850 - move1, 24, 102, 61);

  let frame = requestAnimationFrame(cir1);
  if (move1 > 613) {
    cancelAnimationFrame(frame);
    circular_shape(150, 60, 35, 0, "#989899");
    return;
  }
  move1 += motion_speed;
}

// 2nd arrow movement
function cir2() {
  shape.fillStyle = "#fff";
  shape.fillRect(186, 148, 830, 85);

  trinagle_shape(800 - move2, 64 + a1, 850 - move2, 24 + a1, 102 + a1, 61 + a1);

  let frame = requestAnimationFrame(cir2);
  if (move2 > 613) {
    cancelAnimationFrame(frame);
    circular_shape(150, 190, 35, 0, "#989899");
    return;
  }
  move2 += motion_speed;
}

// 3rd arrow movement
function cir3() {
  shape.fillStyle = "#fff";
  shape.fillRect(186, 278, 830, 95);

  trinagle_shape(800 - move3, 64 + a2, 850 - move3, 24 + a2, 102 + a2, 61 + a2);

  let frame = requestAnimationFrame(cir3);
  if (move3 > 613) {
    cancelAnimationFrame(frame);
    circular_shape(150, 320, 35, 0, "#989899");
    return;
  }
  move3 += motion_speed;
}

// 4th arrow movement
function cir4() {
  shape.fillStyle = "#fff";
  shape.fillRect(186, 406, 830, 95);

  trinagle_shape(800 - move4, 64 + a3, 850 - move4, 24 + a3, 102 + a3, 61 + a3);

  let frame = requestAnimationFrame(cir4);
  if (move4 > 613) {
    cancelAnimationFrame(frame);
    circular_shape(150, 450, 35, 0, "#989899");
    return;
  }
  move4 += motion_speed;
}

//Reset to initial state
reset.addEventListener("click", () => {
  location.reload();
});
