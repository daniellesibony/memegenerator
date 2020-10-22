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

var gCurrDrawing = 'text'
var gCurrOutlineColor = 'white'
var gCurrFillColor = 'black'
var gText = 'change the text'
var gCurrFont = 'impact'
var gCurrFontSize = '48'

var gMeme = {
    selectedImgId: 7,
    selectedLineIdx: 0,
    lines: [{
        txt: '',
        size: 48,
        align: 'start',
        outLineColor: 'white',
        fillColor: 'black',
        font: 'impact',
        x: 100,
        y: 50
    },
    {   
        txt: 'meme',
        size: 48,
        align: 'start',
        outLineColor: gCurrOutlineColor,
        fillColor: gCurrFillColor,
        font: 'impact',
        x: 100,
        y: 100
    }]
    
}




function setFont(font) {
    let i = gMeme.selectedLineIdx
    gMeme.lines[i].font = (font)
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

function setX(x){
    let i = gMeme.selectedLineIdx
    gMeme.lines[i].x = x
}

function setY(y){
    let i = gMeme.selectedLineIdx
    gMeme.lines[i].y = y
}


function getCurrImage() {
    let currImg = gImgs.find(function (img) {
        return img.id === gMeme.selectedImgId
    })
    return currImg;
}


function getMeme(){
    return gMeme
}

function getImages(){
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



function _saveMemeToStorage() {
    saveToStorage(STORAGE_KEY, gMeme)
}
