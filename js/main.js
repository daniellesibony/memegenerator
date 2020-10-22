'use strict'


var gCanvas;
var gCtx;

function init() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    // drawImg()
    renderGallery()

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
    var elMemeEditor = document.querySelector('.meme-editor');
    var elGallery = document.querySelector('.main-container');
    if (elGallery.style.display === 'none') {
        (elGallery.style.display = 'block') && (elMemeEditor.style.display = 'none')
    }

}

function showMemeEditor(imageId) {
    setSelectedImg(imageId)
    drawImg()
    var elMemeEditor = document.querySelector('.meme-editor');
    var elGallery = document.querySelector('.main-container');
    if (elGallery.style.display === 'none') {
        elMemeEditor.style.display = 'block'
    }
    if (elMemeEditor.style.display === 'none') {
        (elMemeEditor.style.display = 'block') && (elGallery.style.display = 'none');
    } 
    else {
        elMemeEditor.style.display = 'none';
    }

}




function renderGallery() {
    let images = gImgs
    let elGallery = document.querySelector('.gallery-container')
    let strHtmls = images.map((image) => {
        console.log(image.url)
        return `
    <img src=${image.url} id=${image.id} class="img" onclick="showMemeEditor(${image.id})">
    `
    }).join('')

    elGallery.innerHTML = strHtmls

}

