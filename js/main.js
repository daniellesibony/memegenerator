'use strict'



function init() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    drawImg()

}


function drawText(text, x, y) {
    gCtx.beginPath()
    gCtx.fillStyle = gCurrFillColor;
    console.log(gCurrFillColor);
    gCtx.strokeStyle = gCurrOutlineColor;
    gCtx.lineWidth = '2';
    gCtx.font = '48px Impact';
    gCtx.textAlign = 'start';
    gCtx.fillText(text, 100, 50);
    gCtx.strokeText(text, 100, 50);
}



function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
    drawImg()
}


function setCurrDrawing(text) {
    gCurrDrawing = text
}

function onSetOutlineColor(color) {
  setOutlineColor(color)
}

function onSetFillColor(color) {
   setFillColor(color)
}




function setText(ev) {
    const { value } = ev.target
    gText = value
}

function draw(ev) {
    const { offsetX, offsetY } = ev

    switch (gCurrDrawing) {
        case 'text':
            drawText(gText, offsetX, offsetY)
            break;

    }
}



function drawImg() {
    var img = new Image()
    var currImg = getCurrImage()
    var currImgUrl = currImg.url
    img.src = currImgUrl;
    console.log(img.src)
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}


function showGallery() {
	var elGallery = document.querySelector(".gallery");
	if (elGallery.style.display === "none") {
		elGallery.style.display = "block";
	} else {
		elGallery.style.display = "none";
	}
}

function showMemeEditor() {
	var elMemeEditor = document.querySelector(".meme-editor");
	if (elMemeEditor.style.display === "none") {
		elMemeEditor.style.display = "block";
	} else {
		elMemeEditor.style.display = "none";
	}
}