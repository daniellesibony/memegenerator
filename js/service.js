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
{ id: 17, url: 'images/17.jpg' }];

//  let img = gImgs[0]
//  let currImg = img.url
//  let imgId = img.id

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I never eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'
    },
    {
        txt: 'I\'m a meme',
        size: 20,
        align: 'center',
        color: 'black'

    }]
}


function getMemeById(memeId) {
    // let imageId = gImages.find(image => image.id)
    // if (gMeme.selectedImgId !== imageId) return;
    let meme = gMemes.find(function (meme) {
        return memeId === meme.selectedImgId
    })
    return meme;
}
