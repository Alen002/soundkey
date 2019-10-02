

document.onkeypress = () => {createCircle(), playAudio()};
document.onclick = () => {createCircle(), playAudio()};

function createCircle() {
    var c = document.querySelector("#myCanvas");
    ctx = c.getContext("2d");
    ctx.beginPath();
    z = 0;
    x = randPos().xRand;
    y = randPos().yRand;
    color = createColor();
    
 
    let interval = setInterval(function drawCircle() { 
        z++;
        ctx.arc(x, y, z, 0, 2 * Math.PI); //x,y, radius
        ctx.fillStyle = color;
        ctx.fill();
       
        if (z > 150) {
            clearInterval(interval); 
            ctx.arc(x, y, 2000, 0, 2 * Math.PI); //x,y, radius
            ctx.fillStyle = 'black';
            ctx.fill();
        }     
    }, 0.1); 


}

function playAudio() {
    playlist = arraySounds();
    let select = Math.round(Math.random()*25);
    console.log(select)
    let audio = new Audio(playlist[select]);
    audio.play();
}

function circleRadius() {
    for(let a = 0; a < 100; a++) {
        a += 1;
       return a;
    }   
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


function arraySounds()  {
    let sounds = [
        './sounds/bubbles.mp3',
        './sounds/clay.mp3',
        './sounds/confetti.mp3',
        './sounds/corona.mp3',
        './sounds/dotted-spiral.mp3',
        './sounds/flash-1.mp3',
        './sounds/flash-2.mp3',
        './sounds/flash-3.mp3',
        './sounds/glimmer.mp3',
        './sounds/moon.mp3',
        './sounds/pinwheel.mp3',
        './sounds/piston-1.mp3',
        './sounds/piston-2.mp3',
        './sounds/piston-3.mp3',
        './sounds/prism-1.mp3',
        './sounds/prism-2.mp3',
        './sounds/prism-3.mp3',
        './sounds/splits.mp3',
        './sounds/squiggle.mp3',
        './sounds/strike.mp3',
        './sounds/suspension.mp3',
        './sounds/timer.mp3',
        './sounds/ufo.mp3',
        './sounds/veil.mp3',
        './sounds/wipe.mp3',
        './sounds/zig-zag.mp3',
    ];
    return sounds;
}