


document.onkeypress = () => {createCircle()};



function createCircle() {
    var c = document.querySelector("#myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 200, 50, 0, 2 * Math.PI); //x,y, radius 
    //ctx.stroke();
    ctx.fillStyle = createColor();
    ctx.fill();
    
}

function createColor() {
    let resultRed = Math.floor(Math.random()*256);
    let resultGreen = Math.floor(Math.random()*256);
    let resultBlue = Math.floor(Math.random()*256);
    return 'rgb(' +resultRed+ ',' +resultGreen+ ',' +resultBlue+ ')'; 
}