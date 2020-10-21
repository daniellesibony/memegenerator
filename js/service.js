'use strict'

console.log('Service JS')

var gImgs = [{ id: 1, url: 'images/1.jpg', keywords: ['politics'] },
{ id: 2, url: 'images/2.jpg' }, { id: 3, url: 'images/3.jpg' },
{ id: 4, url: 'images/4.jpg' }, { id: 5, url: 'images/5.jpg' },
{ id: 6, url: 'images/6.jpg' }, { id: 7, url: 'images/7.jpg' },
{ id: 8, url: 'images/8.jpg' }, { id: 9, url: 'images/9.jpg' },
{ id: 10, url: 'images/10.jpg' }, { id: 11, url: 'images/11.jpg' },
{ id: 12, url: 'images/12.jpg' }, { id: 13, url: 'images/13.jpg' },
{ id: 14, url: 'images/14.jpg' }, { id: 15, url: 'images/15.jpg' },
{ id: 16, url: 'images/16.jpg' }, { id: 17, url: 'images/17.jpg' },
{ id: 18, url: 'images/18.jpg' }];

var gCanvas;
var gCtx;
var gCurrDrawing = 'text'
var gCurrOutlineColor = 'white'
var gCurrFillColor = 'black'
var gText = 'change the text'

var gMeme = {
    selectedImgId: 7,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I never eat Falafel',
        size: 20,
        align: 'left',
        outLineColor: gCurrOutlineColor,
        fillColor: gCurrFillColor,
        font: 'impact'
    }]
}



function setOutlineColor(color) {
    gCurrOutlineColor = color
}

function setFillColor(color) {
    gCurrFillColor = color
}


function setCurrDrawing(text) {
    gCurrDrawing = text
}


function getMemeById(memeId) {
    // let imageId = gImages.find(image => image.id)
    // if (gMeme.selectedImgId !== imageId) return;
    let meme = gMemes.find(function (meme) {
        return memeId === meme.selectedImgId
    })
    return meme;
}



function getCurrImage(){
    let currImg = gImgs.find(function (img) {
        return img.id === gMeme.selectedImgId
    })
    return currImg;
}


function showGallery() {
	var elGallery = document.querySelector(".gallery");
	if (elGallery.style.display === "none") {
		elGallery.style.display = "block";
	} else {
		elGallery.style.display = "none";
	}
}

function showCanvas() {
	var elCanvas = document.querySelector(".canvas");
	if (elCanvas.style.display === "none") {
		elCanvas.style.display = "block";
	} else {
		elCanvas.style.display = "none";
	}
}
