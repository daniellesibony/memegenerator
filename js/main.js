'use strict'

var gCanvas;
var gCtx;
var gCurrOutlineColor = 'cyan'
var gCurrFillColor = 'black'
var gText = 'bob'

function init() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    console.log('The context:', gCtx);
    drawImg()
    console.log(gMeme.selectedImgId)

}


function drawText(text, x, y) {
    // gCtx.strokeStyle = 'red'
    // gCtx.fillStyle = 'white'
    gCtx.beginPath()
    gCtx.fillStyle = gCurrFillColor;
    console.log(gCurrFillColor);
    gCtx.strokeStyle = gCurrOutlineColor;
    gCtx.lineWidth = '2';
    gCtx.font = '48px Ariel';
    gCtx.textAlign = 'start';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}



// function clearCanvas() {
//     gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
// }

function drawImg() {
    var elImg = document.querySelector('img')
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
}


function setShape(shape) {
    gCurrShape = shape
}

function setOutlineColor(color) {
    gCurrOutlineColor = color
}

function setFillColor(color) {
    gCurrFillColor = color
}

function setText(ev) {
    const { value } = ev.target
    gText = value
}

function draw(ev) {
    const { offsetX, offsetY } = ev
    if (gText === 'text') {
        drawText(gText, offsetX, offsetY)
    }
}



function drawImg() {
    var img = new Image()
    img.src = gMeme.selectedImg;
    console.log(img.src)
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}


