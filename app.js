'use srtict'
let firstImageElement=document.getElementById('first-image');
let thirdImageElement=document.getElementById('second-image');
let secondImageElement=document.getElementById('third-image');

let maxAttempts=10;
let userAttemptsCounter=0;

// the random number index for the left image
let firstImageIndex; 

// the random number index for the right image
let secondImageIndex;
// the random number index for the second image
let thirdImageIndex;



function Goat(name,source) {
  this.name=name;
  this.source=source;
  this.votes=0;

  Goat.allGoats.push(this);
}

// will contain all of the goats that will be created

Goat.allGoats=[];


new Goat('bag','assets/bag.jpg');//0
new Goat('banana', 'assets/banana.jpg');//1
new Goat('bathroom', 'assets/bathroom.jpg');//2
new Goat('boots', 'assets/boots.jpg');//3
new Goat('breakfast', 'assets/breakfast.jpg');//4
new Goat('bubblegum', 'assets/bubblegum.jpg');//5
new Goat('chair', 'assets/chair.jpg');//6
new Goat('cthulhu', 'assets/cthulhu.jpg');//7

new Goat('dragon','assets/dragon.jpg');//0
new Goat('pen', 'assets/pen.jpg');//1
new Goat('pet-weep', 'assets/pet-weep.jpg');//2
new Goat('scissors', 'assets/scissors.jpg');//3
new Goat('shark', 'assets/shark.jpg');//4
new Goat('sweep', 'assets/sweep.jpg');//5
new Goat('tauntaun', 'assets/tauntaun.jpg');//6
new Goat('unicorn', 'assets/unicorn.jpg');//7
new Goat('usb', 'assets/usb.gif');//5
new Goat('water-can', 'assets/water-can.jpg');//6
new Goat('wine-glass', 'assets/wine-glass.jpg');//7


function generateRandomIndex() {
  // 0 => 21
  return Math.floor(Math.random() * Goat.allGoats.length); 
}

// console.log(generateRandomIndex());


function renderThreeassets() {
  // first pic
  firstImageIndex=generateRandomIndex();
  // second pic
  secondImageIndex=generateRandomIndex();
  // third pic
  thirdImageIndex= generateRandomIndex();


  while ((firstImageIndex === secondImageIndex) || (firstImageIndex === thirdImageIndex) || (secondImageIndex === thirdImageIndex)) 
  
  {
      firstImageIndex=generateRandomIndex();
      secondImageIndex=generateRandomIndex();
  }
/*
  while((secondImageIndex !== thirdImageIndex))
  {
    secondImageIndex=generateRandomIndex();
  }
 
*/

  console.log(Goat.allGoats[firstImageIndex].source);

  // make the source for the left and right image equal to the random goat source
  firstImageElement.src=Goat.allGoats[firstImageIndex].source;

  secondImageElement.src=Goat.allGoats[secondImageIndex].source;
  thirdImageElement.src=Goat.allGoats[thirdImageIndex].source;
  
}
renderThreeassets();

// add event listner
// container
firstImageElement.addEventListener('click',handleUserClick);
secondImageElement.addEventListener('click',handleUserClick);
thirdImageElement.addEventListener('click',handleUserClick);


function handleUserClick(event) {
  
  console.log(event.target.id);

  // adding to attempts
  userAttemptsCounter++;
  // console.log(userAttemptsCounter);

  // if the attempts is lower than the max:
  // -add to the votes based on the id
  // -render two new assets

  // ELSE
  // show the list
  // remove the clicking


  if (userAttemptsCounter<=maxAttempts) {


    if (event.target.id==='first-image') {
      // the random number
      // Goat.allGoats[5].votes++
      Goat.allGoats[firstImageIndex].votes++

    }
    else if(event.target.id==='second-image')
    {
      Goat.allGoats[secondImageIndex].votes++
    }
    else if(event.target.id==='third-image')
    {
      Goat.allGoats[thirdImageIndex].votes++
    }

    console.log(Goat.allGoats);
    renderThreeassets();


  }else{
    // show results
    let list=document.getElementById('results-list');
    for (let i = 0; i < Goat.allGoats.length; i++) {
      let goatResult=document.createElement('li');

      list.append(goatResult);

      goatResult.textContent=`${Goat.allGoats[i].name} has ${Goat.allGoats[i].votes} votes`;
      
    }

    // stop the clicking
    firstImageElement.removeEventListener('click',handleUserClick);
    secondImageElement.removeEventListener('click',handleUserClick);
    thirdImageElement.removeEventListener('click',handleUserClick);

  }

}
