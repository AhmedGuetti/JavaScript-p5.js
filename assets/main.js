function setup(){
    createCanvas(1000,500);
}
function draw(){
//white line
    stroke(255,255,255);
    line(500,0,500,1000);
    line(0,250,1000,250);
    //red lines
    stroke(255,0,0);
    line(550,0,550,1000);
    line(0,300,1000,300);
    //cryon line
    stroke(0,255,255);
    line(450,0,450,1000);
    line(0,200,1000,200);
//blue lines
    stroke(0,0,255);
    line(400,0,400,1000);
    stroke(0,0,255);
    line(600,0,600,1000);


//first half logo
    stroke(0,0,0);
    fill(255,255,255);
    quad(450,200,500,200,450,250,400,250);
    quad(400,250,450,250,500,300,450,300);
    //second half logo
    stroke(255,255,255);
    fill(0,0,0);
    quad(500,200,550,200,600,250,550,250);
    quad(550,250,600,250,550,300,500,300);

}