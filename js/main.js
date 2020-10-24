'use strict'


let gCanvas;
let gCtx;

function init() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    renderGallery()

}

function showMenu() {
    document.querySelector('.main-nav').classList.toggle('show');
}


function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
    imgToCanvas()
    
}



function drawRect(x, y) {
    gCtx.beginPath()
    gCtx.rect(x, y, 130, 200)
    gCtx.strokeStyle = 'black'
    gCtx.stroke()
}

function onSetMemeText(text) {
    // drawRect(100, 20)
    setMemeText(text)
    renderCanvas()
}

function onMoveTextUp() {
    moveYPosUp();
    renderCanvas();

}

function onAddTextLine() {
    addTextLine();
    addAnotherTextLine();
    renderCanvas();
}

function onDeleteTextLine() {
    deleteTextLine()
    renderCanvas()
}

function onAlignTxtLeft(){
 alignTxtLeft()
 renderCanvas()

}

function onAlignTxtCenter(){
    alignTxtCenter()
    renderCanvas()
   
   }

   function onAlignTxtRight(){
    alignTxtRight()
    renderCanvas()
   
   }


function onSwitchMemeText() {
    switchMemeText()
    setTextInputValue()
}

function setTextInputValue() {
    let currMeme = getMeme()
    document.querySelector('.text-input').value = currMeme.lines[currMeme.selectedLineIdx].txt

}

function onIncreaseFontSize(size) {
    setFontSize(size)
    renderCanvas()
}


function onSetFontType(font){
    setFont(font)
    renderCanvas()
}

function onSetOutlineColor(color) {
    setOutlineColor(color)
    renderCanvas()
}


function onSetFillColor(color) {
    setFillColor(color)
    renderCanvas()
}

function imgToCanvas() {
    var img = new Image()
    var currImg = getCurrImage()
    var currImgUrl = currImg.url
    img.src = currImgUrl;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }

}


function drawImg() {
    var img = new Image()
    var currImg = getCurrImage()
    var currImgUrl = currImg.url
    img.src = currImgUrl;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawLines()
    }

}






function showGallery() {
    var elMemeEditor = document.querySelector('.meme-editor');
    var elGallery = document.querySelector('.main-container');
    if (elGallery.style.display === 'none') {
        (elGallery.style.display = 'block') && (elMemeEditor.style.display = 'none')
    }


}

function drawLine(line) {
    gCtx.beginPath()
    gCtx.fillStyle = line.fillColor;
    gCtx.strokeStyle = line.outLineColor;
    gCtx.lineWidth = '2';
    gCtx.font = `${line.size}px ${line.font}`
    gCtx.textAlign = line.align
    gCtx.fillText(line.txt, line.x, line.y);
    gCtx.strokeText(line.txt, line.x, line.y);
}

function drawLines() {
    let currMeme = getMeme()
    currMeme.lines.forEach(function (line) {
        drawLine(line)
    })
}


function renderCanvas() {
    drawImg()


}



function showMemeEditor(imageId) {
    setSelectedImg(imageId)
    setTextInputValue()
    renderCanvas()
    var elMemeEditor = document.querySelector('.meme-editor');
    var elGallery = document.querySelector('.main-container');
    
    elMemeEditor.style.display = 'block'
    elGallery.style.display = 'none'


}




function renderGallery() {
    let images = getImages()
    let elGallery = document.querySelector('.gallery-container')
    let strHtmls = images.map((image) => {
        return `
    <img src=${image.url} id=${image.id} class="img" onclick="showMemeEditor(${image.id})">
    `
    }).join('')

    elGallery.innerHTML = strHtmls

}

function downloadImg(elLink) {
    var imgContent = gCanvas.toDataURL('image/jpeg');
    elLink.href = imgContent
}


