'use srtict'


let maxAttempts=25;
let userAttemptsCounter=0;

// the random number index for the first image
let firstImageIndex; 

// the random number index for the second image
let secondImageIndex;
// the random number index for the third image
let thirdImageIndex;


// link the DIV images elements declared in HTML with variables in JS for each by id  
let firstImageElement=document.getElementById('first-image');
let secondImageElement=document.getElementById('second-image');
let thirdImageElement=document.getElementById('third-image');
///
let imgVotingElement=document.getElementById('imgVoting');



let btnResult = document.getElementById("voteResult");


function product(name,source) {
  this.name=name;
  this.source=source;
  this.votes=0;

  product.allproducts.push(this);
}

// will contain all of the products that will be created

product.allproducts=[];


new product('bag','assets/bag.jpg');//0
new product('banana', 'assets/banana.jpg');//1
new product('bathroom', 'assets/bathroom.jpg');//2
new product('boots', 'assets/boots.jpg');//3
new product('breakfast', 'assets/breakfast.jpg');//4
new product('bubblegum', 'assets/bubblegum.jpg');//5
new product('chair', 'assets/chair.jpg');//6
new product('cthulhu', 'assets/cthulhu.jpg');//7
new product('dragon','assets/dragon.jpg');//8
new product('pen', 'assets/pen.jpg');//9
new product('pet-sweep', 'assets/pet-sweep.jpg');//10
new product('scissors', 'assets/scissors.jpg');//11
new product('shark', 'assets/shark.jpg');//12
new product('sweep', 'assets/sweep.png');//13
new product('tauntaun', 'assets/tauntaun.jpg');//14
new product('unicorn', 'assets/unicorn.jpg');//15
new product('usb', 'assets/usb.gif');//16
new product('water-can', 'assets/water-can.jpg');//17
new product('wine-glass', 'assets/wine-glass.jpg');//18
new product('dog-dug', 'assets/dog-dug.jpg');//19


function generateRandomIndex() {
  // 0 => 19
  return Math.floor(Math.random() * product.allproducts.length); 
}

// console.log(generateRandomIndex());


function renderThreeAssets(productArray) {
  
  // first pic
  firstImageIndex=generateRandomIndex();
  // second pic
  secondImageIndex=generateRandomIndex();
  // third pic
  thirdImageIndex= generateRandomIndex();


  // While there remain elements to generate
  /*
while (currentIndex) {

  // Pick a remaining element…
  rand = Math.floor(Math.random() * currentIndex--);

  // And swap it with the current element.
  temp = array[currentIndex];
  array[currentIndex] = array[rand];
  array[rand] = temp;
}
return array;
*/


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

  console.log(product.allproducts[firstImageIndex].source);


  // make the source for the first and second and third image equal to the random product source
  firstImageElement.src=product.allproducts[firstImageIndex].source;
  secondImageElement.src=product.allproducts[secondImageIndex].source;
  thirdImageElement.src=product.allproducts[thirdImageIndex].source;

}
renderThreeAssets();

// add event listner
// container
imgVotingElement.addEventListener('click',handleUserClick);




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

    btnResult.disabled = true;

    if (event.target.id==='first-image') {
      // the random number
      // product.allproducts[5].votes++
      product.allproducts[firstImageIndex].votes++

    }
    else if(event.target.id==='second-image')
    {
      product.allproducts[secondImageIndex].votes++
    }
    else if(event.target.id==='third-image')
    {
      product.allproducts[thirdImageIndex].votes++
    }
    console.log(product.allproducts);
    renderThreeAssets();
    
   }

    else
    {
      btnResult.disabled = false;
      imgVotingElement.removeEventListener('click',UserClick);
      
    }
   
    
  

  }



  btnResult.addEventListener('click',UserClick);


function UserClick(event) {
  
    // show results
    btnResult.disabled = false;


    let list=document.getElementById('results-list');
    for (let i = 0; i < product.allproducts.length; i++) {
      let productResult=document.createElement('li');

      list.append(productResult);

      productResult.textContent=`${product.allproducts[i].name} has ${product.allproducts[i].votes} votes`;
      
    }

    // stop the clicking
    btnResult.removeEventListener("click", UserClick);
    

  }


