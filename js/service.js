'use strict'

const STORAGE_KEY = 'memeDB';

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



var gMeme = {
    selectedImgId: 7,
    selectedLineIdx: 0,
    lines: [{
        txt: 'Enter Text',
        size: 48,
        align: 'center',
        outLineColor: 'white',
        fillColor: 'black',
        font: 'impact',
        x: 250,
        y: 50
    },
    {
        txt: 'Enter Text',
        size: 48,
        align: 'center',
        outLineColor: 'white',
        fillColor: 'black',
        font: 'impact',
        x: 250,
        y: 480
    }]

}


function getYPos(){
    let i = gMeme.selectedLineIdx
    let y = gMeme.lines[i].y 
    return y;

}

function getXPos(){
    let i = gMeme.selectedLineIdx
    let y = gMeme.lines[i].x 
    return x;

}


function setFont(font) {
    let i = gMeme.selectedLineIdx
    gMeme.lines[i].font = (font)
}

function alignTxtLeft() {
    let i = gMeme.selectedLineIdx
    gMeme.lines[i].align = 'right'
}


function alignTxtCenter() {
    let i = gMeme.selectedLineIdx
    gMeme.lines[i].align = 'center'
}

function alignTxtRight() {
    let i = gMeme.selectedLineIdx
    gMeme.lines[i].align = 'start'
}

function setFontSize(size) {
    let i = gMeme.selectedLineIdx
    gMeme.lines[i].size = parseInt(size)
}


function setOutlineColor(color) {
    let i = gMeme.selectedLineIdx
    gMeme.lines[i].outLineColor = color
}

function setFillColor(color) {
    let i = gMeme.selectedLineIdx
    gMeme.lines[i].fillColor = color
}

function moveTxtDown() {
    let i = gMeme.selectedLineIdx
    gMeme.lines[i].y += 20;
}

function moveTxtUp() {
    let i = gMeme.selectedLineIdx
    gMeme.lines[i].y -= 20;
}


function addLine( y){
    let line = {
        txt: 'Enter Text',
        size: 48,
        align: 'center',
        outLineColor: 'white',
        fillColor: 'black',
        font: 'impact',
        x: 250,
        y
    }
    return line;


}

function addTextLine(){
    let lines = gMeme.lines
    let y;
    switch (lines.length) {
        case 0:
            y = 50
            break;
        case 1:
            y = 480
            break;
        default:
            y = 50 * lines.length +150
            break;
    }

    lines.push(addLine(y))
    
}



function deleteTextLine() {
    let lines = gMeme.lines
    lines.splice(gMeme.selectedLineIdx, 1)
}


function switchMemeText() {
    let currLineIdx = ++gMeme.selectedLineIdx
    if (currLineIdx >= gMeme.lines.length) {
        gMeme.selectedLineIdx = 0
    }
}

function getCurrImage() {
    let currImg = gImgs.find(function (img) {
        return img.id === gMeme.selectedImgId
    })
    return currImg;
}


function getMeme() {
    return gMeme
}

function getImages() {
    return gImgs;
}


function setSelectedImg(imageId) {
    gMeme.selectedImgId = imageId
    _saveMemeToStorage()
}



function setMemeText(text) {
    let i = gMeme.selectedLineIdx
    gMeme.lines[i].txt = text

}

function switchMemeText() {
    let currLineIdx = ++gMeme.selectedLineIdx
    if (currLineIdx >= gMeme.lines.length) {
        gMeme.selectedLineIdx = 0
    }
}



function _saveMemeToStorage() {
    saveToStorage(STORAGE_KEY, gMeme)
}
