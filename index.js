/**@type{HTMLCanvasElement} */

window.addEventListener("load", function () {
  const cardArray = [
    {
      name: "fries",
      img: "fries.jpg",
    },
    {
      name: "cheeseburger",
      img: "cheeseburger.jpg",
    },
    {
      name: "hotdog",
      img: "hotdog.jpg",
    },
    {
      name: "icecream",
      img: "icecream.jpg",
    },
    {
      name: "milkshake",
      img: "milkshake.jpg",
    },
    {
      name: "pizza",
      img: "pizza.jpg",
    },
    {
      name: "fries",
      img: "fries.jpg",
    },
    {
      name: "cheeseburger",
      img: "cheeseburger.jpg",
    },
    {
      name: "hotdog",
      img: "hotdog.jpg",
    },
    {
      name: "icecream",
      img: "icecream.jpg",
    },
    {
      name: "milkshake",
      img: "milkshake.jpg",
    },
    {
      name: "pizza",
      img: "pizza.jpg",
    },
  ];
  cardArray.sort(() => 0.5 - Math.random());
  const gridDisplay = document.getElementById("grid");
  const matchesDisplay = document.getElementById("matches");
  const attemptsDisplay = document.getElementById("attempt");
  const finishCard = document.getElementById("finishCard");
  const goesDisplay = document.getElementById("numOfGoes");
  const restartBtn = document.getElementById("restartBtn");
  let cardsChosenArray = [];
  let chosenCardIds = [];
  const cardsWon = []
  let tries = []
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "blank.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      gridDisplay.append(card);
    }
  }
  createBoard();

  function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = chosenCardIds[0]
    const optionTwoId = chosenCardIds[1]
    if(optionOneId == optionTwoId){
      alert('you have clicked the same image')
    }
    if (cardsChosenArray[0] == cardsChosenArray[1]) {
      alert("you have found a match");
      cards[chosenCardIds[0]].setAttribute("src", 'white.jpg');
      cards[chosenCardIds[1]].setAttribute("src", 'white.jpg');
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosenArray)
    }else{
      cards[optionOneId].setAttribute('src', 'blank.jpg')
      cards[optionTwoId].setAttribute('src', 'blank.jpg')
      alert('sorry try again')
    }
    console.log(cardsWon.length)
    matchesDisplay.textContent = cardsWon.length
    cardsChosenArray = []
    chosenCardIds = []

    if(cardsWon.length == cardArray.length/2){
      finishCard.classList.add("finishCardActive");
      goesDisplay.textContent = tries.length / 2;

      //resultDisplay.textContent = 'congratulations you have found all matches'
    }
    
  }
   

  function flipCard() {
    const cardId = this.getAttribute("data-id");
    tries.push('attempt')
    attemptsDisplay.textContent = tries.length/2
    console.log(tries.length);
    cardsChosenArray.push(cardArray[cardId].name);
    chosenCardIds.push(cardId)
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosenArray.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }
  restartBtn.addEventListener('click', function(){
     finishCard.classList.remove("finishCardActive");
    location.reload()

  })
  

  //load function end
});
