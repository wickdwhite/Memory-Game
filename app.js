const cardArray=[ //Drew the images myself in Photoshop!
    {
        name: 'red',
        img: 'images/red.png'
    },
    {
        name: 'orange',
        img: 'images/orange.png'
    },
    {
        name: 'yellow',
        img: 'images/yellow.png'
    },
    {
        name: 'green',
        img: 'images/green.png'
    },
    {
        name: 'blue',
        img: 'images/blue.png'
    },
    {
        name: 'violet',
        img: 'images/violet.png'
    },
    {
        name: 'red',
        img: 'images/red.png'
    },
    {
        name: 'orange',
        img: 'images/orange.png'
    },
    {
        name: 'yellow',
        img: 'images/yellow.png'
    },
    {
        name: 'green',
        img: 'images/green.png'
    },
    {
        name: 'blue',
        img: 'images/blue.png'
    },
    {
        name: 'violet',
        img: 'images/violet.png'
    },
]

cardArray.sort(()=>0.5 -Math.random())

const gridDisplay= document.querySelector('#grid')
const resultDisplay=document.querySelector('#result')
let cardsChosen=[]
let cardsChosenIds=[]
const cardsWon=[]

function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        const card= document.createElement('img')
        card.setAttribute('src', 'images/back.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
        resultDisplay.textContent='Score: '+cardsWon.length
    }
}

createBoard()

function checkMatch(){
    const cards= document.querySelectorAll('#grid img')
    const optionOneId=cardsChosenIds[0]
    const optionTwoId=cardsChosenIds[1]

    if(optionOneId==optionTwoId){
        alert('You clicked on the same img!')
        cards[optionOneId].setAttribute('src','images/back.png')
        cards[optionTwoId].setAttribute('src','images/back.png')
    } else if(cardsChosen[0]==cardsChosen[1]){
        //alert('You found a match!')
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src','images/back.png')
        cards[optionTwoId].setAttribute('src','images/back.png')
    }

    resultDisplay.textContent='Score: '+cardsWon.length
    cardsChosen=[]
    cardsChosenIds=[]

    if (cardsWon.length===(cardArray.length/2)){
        resultDisplay.textContent='Congratulations, you found them all!'
    }
}

function flipCard (){
    const cardId= this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if (cardsChosen.length===2){
        setTimeout(checkMatch,500)
    }
}