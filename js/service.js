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
        align: 'start',
        outLineColor: 'white',
        fillColor: 'black',
        font: 'impact',
        x: 135,
        y: 50
    },
    {
        txt: 'Enter Text',
        size: 48,
        align: 'start',
        outLineColor: 'white',
        fillColor: 'black',
        font: 'impact',
        x: 135,
        y: 400
    }]

}




function setFont(font) {
    let i = gMeme.selectedLineIdx
    gMeme.lines[i].font = (font)
}

function alignTxtLeft() {
    gMeme.lines.forEach(function (line){
        line.align = 'start';

    })
}


function alignTxtCenter() {
    gMeme.lines.forEach(function (line){
        line.align = 'center';

    })
}

function alignTxtRight() {
    gMeme.lines.forEach(function (line){
        line.align = 'right';

    })
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

    function setX(x) {
        let i = gMeme.selectedLineIdx
        gMeme.lines[i].x = x
    }

    function setY(y) {
        let i = gMeme.selectedLineIdx
        gMeme.lines[i].y = y
    }
    function moveYPosUp() {
        let i = gMeme.selectedLineIdx
        let currY = gMeme.lines[i].y
        currY += 20;
        currY++;
        console.log(currY)
    }

    function addTextLine() {
        let newLine = {
            txt: 'Enter Text',
            size: 48,
            align: 'start',
            outLineColor: 'white',
            fillColor: 'black',
            font: 'impact',
            x: 135,
            y: 250
        }

        let lines = gMeme.lines
        lines.push(newLine)
        let midTxtLine = lines[2].txt
        if (midTxtLine.length > 0) return;



    }

    function addAnotherTextLine() {
        let lines = gMeme.lines

        let newLine = {
            txt: 'Enter Text',
            size: 48,
            align: 'start',
            outLineColor: 'white',
            fillColor: 'black',
            font: 'impact',
            x: 135,
            y: 50
        }

        let anotherNewLine = {
            txt: 'Enter Text',
            size: 48,
            align: 'start',
            outLineColor: 'white',
            fillColor: 'black',
            font: 'impact',
            x: 135,
            y: 50
        }

        let firstLine = lines[0].txt
        console.log('the first line is,', firstLine)
        let lastLine = lines[1].txt
        console.log('the last line is,', lastLine)

        console.log('length is', firstLine.length)

        if (firstLine.length === 0) {
            lines.push(newLine)
        }

        if (lastLine.length === 0) {
            lines.push(anotherNewLine)
        }

    }


    function deleteTextLine() {
        let lines = gMeme.lines
        lines.pop()
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
