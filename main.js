
var canvas=new fabric.Canvas("myCanvas")

ball_x=20
ball_y=20

golf_x=800
golf_y=650


block_width = 5;
block_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(Img)
    {
        hole_object=Img
        hole_object.scaleToWidth(60)

        hole_object.scaleToHeight(54)

        hole_object.set({
            top:golf_y,
            left:golf_x
            
        })
        canvas.add(hole_object)
    }
    ) 
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png",function(Img)
    {
        ball_object=Img
        ball_object.scaleToWidth(50)

        ball_object.scaleToHeight(50)

        ball_object.set({
            top:ball_y,
            left:ball_x
            
        })
        canvas.add(ball_object)
    }
    ) 
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (ball_x==golf_x && ball_y==golf_y)
    {
        canvas.remove(ball_object)
		document.getElementById("hd3").innerHTML="You have hit the goal!!!"
		document.getElementById("myCanvas").style.borderColor="red";
	}

	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up() {
		if(ball_y>=0) {
			ball_y=ball_y-block_height
			canvas.remove(ball_object)
			new_image()
		}
	}
	
	function down() {
		if(ball_y<=850) {
			ball_y=ball_y+block_height
			canvas.remove(ball_object)
			new_image()
		}
	}
	
	function left() {
		if(ball_x>=0) {
			ball_x=ball_x-block_width
			canvas.remove(ball_object)
			new_image()
		}
	}
	
	function right() {
		if(ball_x<=1000) {
			ball_x=ball_x+block_width
			canvas.remove(ball_object)
			new_image()
		}
	}
}