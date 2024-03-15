const fullSiteBookshelf = document.querySelector('.spodek')
const siteOneImg = document.querySelector('.siteOneImg')
const siteTwoImg = document.querySelector('.siteTwoImg')
const siteThreeImg = document.querySelector('.siteThreeImg')
const siteFourImg = document.querySelector('.siteFourImg')
const siteFiveImg = document.querySelector('.siteFiveImg')
const siteSixImg = document.querySelector('.siteSixImg')
const siteSevenImg = document.querySelector('.siteSevenImg')
const siteOnePreview = document.querySelector('.siteOne')
const siteTwoPreview = document.querySelector('.siteTwo')
const siteThreePreview = document.querySelector('.siteThree')
const siteFourPreview = document.querySelector('.siteFour')
const siteFivePreview = document.querySelector('.siteFive')
const siteSixPreview = document.querySelector('.siteSix')
const siteSevenPreview = document.querySelector('.siteSeven')
const sitePreview = document.querySelector(`.fullSitePreview`)
const body = document.querySelector('body')

let animationThing = 0
let opacity = 0
let site = undefined

function openAnimation() {
    if (animationThing < 40) {
        opacity += 0.025
        sitePreview.style.opacity = `${opacity}`
        animationThing += 1
        setTimeout(openAnimation, 12.5)
    } else if (animationThing >= 20) {
        sitePreview.style.opacity = `1`
        opacity = 1
        animationThing = 0
    }
}

function closeAnimation() {
    if (animationThing < 25) {
        opacity -= 0.04
        sitePreview.style.opacity = `${opacity}`
        animationThing += 1
        setTimeout(closeAnimation, 25)
    } else if (animationThing >= 20) {
        animationThing = 0
        sitePreview.style.display = 'none'
        sitePreview.style.opacity = `0`
        opacity = 0
    }
}



function sitePreviewOpener(siteID) {
    siteOneImg.removeEventListener('click', siteOnePreviewOpener)
    siteThreeImg.removeEventListener('click', siteThreePreviewOpener)
    siteTwoImg.removeEventListener('click', siteTwoPreviewOpener)
    siteFourImg.removeEventListener('click', siteFourPreviewOpener)
    siteFiveImg.removeEventListener('click', siteFivePreviewOpener)
    siteSixImg.removeEventListener('click', siteSixPreviewOpener)
    siteSevenImg.removeEventListener('click', siteSevenPreviewOpener)
    sitePreview.style.display = 'flex'

    openAnimation()

    if (siteID == 1) {
        siteOnePreview.style.display = 'flex'
        body.addEventListener('click', siteOnePreviewCloser)
    }
    if (siteID == 2) {
        siteTwoPreview.style.display = 'flex'
        body.addEventListener('click', siteTwoPreviewCloser)
    }
    if (siteID == 3) {
        siteThreePreview.style.display = 'flex'
        body.addEventListener('click', siteThreePreviewCloser)
    }
    if (siteID == 4) {
        siteFourPreview.style.display = 'flex'
        body.addEventListener('click', siteFourPreviewCloser)
    }
    if (siteID == 5) {
        siteFivePreview.style.display = 'flex'
        body.addEventListener('click', siteFivePreviewCloser)
    }
    if (siteID == 6) {
        siteSixPreview.style.display = 'flex'
        body.addEventListener('click', siteSixPreviewCloser)
    }
    if (siteID == 7) {
        siteSevenPreview.style.display = 'flex'
        body.addEventListener('click', siteSevenPreviewCloser)
    }
}

function siteOnePreviewCloser() {
    sitePreviewCloser(1)
}

function siteOnePreviewOpener(e) {
    e.stopPropagation()
    sitePreviewOpener(1)
}


function siteTwoPreviewCloser() {
    sitePreviewCloser(2)
}

function siteTwoPreviewOpener(e) {
    e.stopPropagation()
    sitePreviewOpener(2)
}


function siteThreePreviewCloser() {
    sitePreviewCloser(3)
}

function siteThreePreviewOpener(e) {
    e.stopPropagation()
    sitePreviewOpener(3)
}

function siteFourPreviewCloser() {
    sitePreviewCloser(4)
}

function siteFourPreviewOpener(e) {
    e.stopPropagation()
    sitePreviewOpener(4)
}

function siteFivePreviewCloser() {
    sitePreviewCloser(5)
}

function siteFivePreviewOpener(e) {
    e.stopPropagation()
    sitePreviewOpener(5)
}

function siteSixPreviewCloser() {
    sitePreviewCloser(6) 
}

function siteSixPreviewOpener(e) {
    e.stopPropagation()
    sitePreviewOpener(6)
}

function siteSevenPreviewCloser() {
    sitePreviewCloser(7) 
}

function siteSevenPreviewOpener(e) {
    e.stopPropagation()
    sitePreviewOpener(7)
}

function sitePreviewCloser(siteID) {
    siteOneImg.addEventListener('click', siteOnePreviewOpener)
    siteTwoImg.addEventListener('click', siteTwoPreviewOpener)
    siteThreeImg.addEventListener('click', siteThreePreviewOpener)
    siteFourImg.addEventListener('click', siteFourPreviewOpener)
    siteFiveImg.addEventListener('click', siteFivePreviewOpener)
    siteSixImg.addEventListener('click', siteSixPreviewOpener)
    siteSevenImg.addEventListener('click', siteSevenPreviewOpener)
    if (siteID == 1) {
        closeAnimation(1)
        setTimeout(()=>{
            siteOnePreview.style.display = 'none'
            body.removeEventListener('click', siteOnePreviewCloser)}, 500)
    }
    if (siteID == 2) {
        closeAnimation(2)
        setTimeout(()=>{
            siteTwoPreview.style.display = 'none'
            body.removeEventListener('click', siteTwoPreviewCloser)}, 500)
    }
    if (siteID == 3) {
        closeAnimation(3)
        setTimeout(()=>{
            siteThreePreview.style.display = 'none'
            body.removeEventListener('click', siteThreePreviewCloser)}, 500)
    }
    if (siteID == 4) {
        closeAnimation(4)
        setTimeout(()=>{
            siteFourPreview.style.display = 'none'
            body.removeEventListener('click', siteFourPreviewCloser)}, 500)
    }
    if (siteID == 5) {
        closeAnimation(5)
        setTimeout(()=>{
            siteFivePreview.style.display = 'none'
            body.removeEventListener('click', siteFivePreviewCloser)}, 500)
    }
    if (siteID == 6) {
        closeAnimation(6)
        setTimeout(()=>{
            siteSixPreview.style.display = 'none'
            body.removeEventListener('click', siteSixPreviewCloser)}, 500)
    }
    if (siteID == 7) {
        closeAnimation(7)
        setTimeout(()=>{
            siteSevenPreview.style.display = 'none'
            body.removeEventListener('click', siteSevenPreviewCloser)}, 500)
    }
}

siteOneImg.addEventListener('click', siteOnePreviewOpener)
siteTwoImg.addEventListener('click', siteTwoPreviewOpener)
siteThreeImg.addEventListener('click', siteThreePreviewOpener)
siteFourImg.addEventListener('click', siteFourPreviewOpener)
siteFiveImg.addEventListener('click', siteFivePreviewOpener)
siteSixImg.addEventListener('click', siteSixPreviewOpener)
siteSevenImg.addEventListener('click', siteSevenPreviewOpener)