'use strict'


var gCanvas;
var gCtx;

function init() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    renderGallery()

}







function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
    drawImg()
}


function setCurrDrawing(text) {
    gCurrDrawing = text
}

// function onSetOutlineColor(color) {
//     setOutlineColor(color)
// }




function onSetMemeText(ev, text) {
    const { value } = ev.target
    gText = value
    setMemeText(text)
    console.log(text)
    renderCanvas()
}

function onSwitchMemeText() {
    switchMemeText()
    setTextInputValue()
}

function setTextInputValue (){
    let currMeme = getMeme()
    document.querySelector('.text-input').value = currMeme.lines[currMeme.selectedLineIdx].txt

}

function onIncreaseFontSize(size) {
    // const { value } = ev.target
    // gCurrFontSize = value
    setFontSize(size)
    renderCanvas()
}

function onSetOutlineColor(ev, color) {
    const { value } = ev.target
    gCurrOutlineColor = value
    setOutlineColor(color)
    console.log(color)
    renderCanvas()
}


function onSetFillColor(ev, color) {
    const { value } = ev.target
    gCurrFillColor = value
    setFillColor(color)
    console.log(color)
    renderCanvas()
}


// function draw() {
//     const { offsetX, offsetY } = ev
//     if (gCurrDrawing === 'text') {
//         drawText1(gText, offsetX, offsetY)

//     }
// }



function drawImg() {
    var img = new Image()
    var currImg = getCurrImage()
    var currImgUrl = currImg.url
    img.src = currImgUrl;
    console.log(img.src)
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
    console.log(gCurrFillColor);
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
        console.log('line is:', line)
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
    let images = getImages()
    let elGallery = document.querySelector('.gallery-container')
    let strHtmls = images.map((image) => {
        console.log(image.url)
        return `
    <img src=${image.url} id=${image.id} class="img" onclick="showMemeEditor(${image.id})">
    `
    }).join('')

    elGallery.innerHTML = strHtmls

}

