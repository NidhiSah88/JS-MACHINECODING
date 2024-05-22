# JS-MACHINECODING

STAR RATING IN JAVASCRIPT - MACHINE CODING ROUND

<div class="continer">
<h1>
Star Rating 
</h1>
<div id="star-container" class="star-container">
<span class="star" data-index="1" >&#9733;</span>
<span class="star" data-index="2">&#9733;</span>
<span class="star" data-index="3">&#9733;</span>
<span class="star" data-index="4">&#9733;</span>
<span class="star" data-index="5">&#9733;</span>

</div>
<h2 id="count">
Rating count: 4
</h2>
</div>

let container = document.getElementById("star-container");
let star = document.querySelectorAll(".star");
let filled = 0;


container.addEventListener("click", function(e){
let currClicked = e.target.dataset.index;
console.log(currClicked);

for(let i = 0; i< filled; i++){
	star[i].classList.remove("star-filled");
}

for(let i = 0; i< currClicked; i++){
	star[i].classList.add("star-filled");
}

filled = currClicked;
document.getElementById("count").innerText = `Rating count: ${currClicked}`;

})

container.addEventListener("mouseover", function(e){
let currClicked = e.target.dataset.index;
console.log(currClicked);

for(let i = 0; i< 5; i++){
	star[i].classList.remove("star-filled");
}

for(let i = 0; i< currClicked; i++){
	star[i].classList.add("star-filled");
}

filled = currClicked;

})


container.addEventListener("mouseleave", function(e){

for(let i = 0; i< 5; i++){
	star[i].classList.remove("star-filled");
}

for(let i = 0; i< filled; i++){
	star[i].classList.add("star-filled");
}

filled = currClicked;

})
.container{
  display:flex;
  flex-direction: column;
  align-items:center;
  
}
.star-container{
  font-size: 40px;
}

.star{
  cursor:pointer;
  padding: 10px;
  color::gray;
  
}
.star-filled{
  color: yellow;
  
}









