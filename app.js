'use srtict'
let maxAttempts=25;
let userAttemptsCounter=0;

// the random number index for the first image
let firstImageIndex; 
// the random number index for the second image
let secondImageIndex;
// the random number index for the third image
let thirdImageIndex;

let copy=['','',''];
let imgVotingElement=document.getElementById('imgVoting');
let btnResult = document.getElementById("voteResult");
//////////////
let imgVote=[];
let imgSelected=[];
let imgNames=[];

// link the DIV images elements declared in HTML with variables in JS for each by id  
let firstImageElement=document.getElementById('first-image');
let secondImageElement=document.getElementById('second-image');
let thirdImageElement=document.getElementById('third-image');


function product(name,source) {
  this.name=name;
  this.source=source;
  this.votes=0;
  this.countSelected=0;

  product.allproducts.push(this);
  imgNames.push(this.name);  
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
new product('dog-duck', 'assets/dog-duck.jpg');//19


function generateRandomIndex() {
  // 0 => 19
  return Math.floor(Math.random() * product.allproducts.length); 
}

// console.log(generateRandomIndex());




function renderThreeAssets() {

  // first pic
  firstImageIndex=generateRandomIndex();
  // second pic
  secondImageIndex=generateRandomIndex();
  // third pic
  thirdImageIndex= generateRandomIndex();


      // Check duplicate in the array itself and the previous
     // Check duplicate inside the array itself
     while ((firstImageIndex === secondImageIndex) || (firstImageIndex === thirdImageIndex) || (secondImageIndex === thirdImageIndex) 
     || (copy.includes(secondImageIndex)) || ( copy.includes(thirdImageIndex)) || ( copy.includes(thirdImageIndex))) 
     {
       firstImageIndex=generateRandomIndex();
       secondImageIndex=generateRandomIndex();
     }
    
     firstImageElement.src=product.allproducts[firstImageIndex].source;
     secondImageElement.src=product.allproducts[secondImageIndex].source;
     thirdImageElement.src=product.allproducts[thirdImageIndex].source;
    
    copy[0]=firstImageIndex;

    copy[1]=secondImageIndex;

    copy[2]=thirdImageIndex;

    console.log(firstImageElement.src+" render Three Assets");


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
    if (userAttemptsCounter<=maxAttempts) {

   

    if (event.target.id==='first-image') {
      // the random number
      // product.allproducts[5].votes++
      product.allproducts[firstImageIndex].votes++;

    }
    else if(event.target.id==='second-image')
    {
      product.allproducts[secondImageIndex].votes++;
    }
    else if(event.target.id==='third-image')
    {
      product.allproducts[thirdImageIndex].votes++;
    }


    btnResult.disabled = true;
    console.log(product.allproducts+" handle User Click");
    renderThreeAssets();
    
   }

    else
    {
      btnResult.disabled = false;
      for(let x=0; x < product.allproducts.length; x++){


        pVotes.push(product.allproducts[i].votes);
        pShown.push(product.allproducts[i].timesImgShown);
    }
      imgVotingElement.removeEventListener('click',UserClick);      
    }
   
  }



  btnResult.addEventListener('click',showingList);
//button showing result
 

  
function showingList() {
  let list=document.getElementById('results-list');
  for (let i = 0; i < product.allproducts.length; i++) {
    let prodResult=document.createElement('li');

    list.append(prodResult);

    prodResult.textContent=`${product.allproducts[i].name} has ${product.allproducts[i].votes} votes and was seen ${product.allproducts[i].countSelected}`;
    
  }
  // button.removeEventListener('click',showingList);
  btnResult.hidden=true;
}

  function userClick(event){
    //  console.log(event.target.id);
      userAttemptsCounter++;
     // console.log(userAttemptsCounter);
 
     if(userAttemptsCounter<=maxAttempts){
      if(event.target.id='first-image'){
          product.allproducts[firstImageIndex].votes++;
      }
      else if(event.target.id='second-image'){
         product.allPpoducts[secondImageIndex].votes++;
     }
     else{
         product.allproducts[thirdImageIndex].votes++;
     }

     renderThreeImages();
     }
     
     else{
        
         allImgElements.removeEventListener('click',userClick);
 
        for(let i=0;i<Product.allProducts.length;i++){
          imgVote.push(product.allproducts[i].votes);
          imgSelected.push(Product.allProducts[i].timesImgShown);
        }
 
         chart();
         
         }
     }
 
     
  
function chart() {
  let ctx = document.getElementById('myChart');
  let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels:goatNames,
          datasets: [{
              label: '# of Votes',
              data:votes,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          },
          {
            label: '# of Shown',
            data:shown,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }
        ]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
    
}
