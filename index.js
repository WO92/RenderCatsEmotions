import {catsData} from './data.js'

const getImageBtn = document.getElementById('get-image-btn')
const renderEmotion = document.getElementById('emotion-radios')

renderEmotion.addEventListener('change', hilightCheckedOption)

function hilightCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    for(let radio of radios){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function getEmotionsArray(cats){
    const emotionsArray =[]
    for(let cat of cats){
        for (let emotion of cat.emotionTags){
            if (!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
    }
}}
return emotionsArray
}

function getSingleCatObject(){
    const catsArray = getMatchingCatsArray()
    if(catsArray.length === !){
        return catsArray[0]
    }
    else{
        const randomNumber = Math.floor(Math.random()*catsArray.lenth)
        return catsArray[randomNumber]
    }
}

function getMatchingCatsArray(){
    if(document.querySelector('input[type="radio"]:checked')){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        const isGif = gifsOnlyOption.checked
        const getMatchingCatsArray = catsData.filter(function (cat){
            if(isGif){
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif
            }
            else{
                return cat.emotionTags.includes(selectedEmotion)
            }
        })
        return matchingCatsArray
    }
}


function renderEmotionsRadios (cats){
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
            >
        </div>`
    }
    renderEmotion.innerHTML = radioItems
}
renderEmotionsRadios(catsData)