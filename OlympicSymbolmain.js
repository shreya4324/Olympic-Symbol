canvas= document.getElementById("MyCanvas");
ctx= canvas.getContext("2d");
color="blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();


color="yellow";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(230, 230, 40, 0, 2 * Math.PI);
ctx.stroke();


color="black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(290, 200, 40, 0, 2 * Math.PI);
ctx.stroke();


color="green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(320, 230, 40, 0, 2 * Math.PI);
ctx.stroke();


color="red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(375, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousdown (e)
{
    color= document.getElementById("color").value; 
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvasoffsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);
}

function circle(mouse_x, mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y , 40, 0, 2*Math,PI);
    ctx.stroke();
}

function clearArea()
{
    ctx.clearRect(0,0,canvas.width, canvas.height);
}