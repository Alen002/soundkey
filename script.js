


document.onkeypress = () => {createCircle()};



function createCircle() {
    var c = document.querySelector("#myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(randPos().xRand, randPos().yRand, 50, 0, 2 * Math.PI); //x,y, radius 
    //ctx.stroke();
    ctx.fillStyle = createColor();
    ctx.fill();
    
}

function randPos() {
    let x = 0;
    let y = 0;
    let xRand =  Math.random(x)*1200;
    let yRand =  Math.random(y)*600;
    return {xRand, yRand};
} 


function createColor() {
    let resultRed = Math.floor(Math.random()*256);
    let resultGreen = Math.floor(Math.random()*256);
    let resultBlue = Math.floor(Math.random()*256);
    return 'rgb(' +resultRed+ ',' +resultGreen+ ',' +resultBlue+ ')'; 
}

