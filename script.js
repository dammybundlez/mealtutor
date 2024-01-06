let result = document.getElementById('result');
let result1 = document.getElementById('result1');
let search_btn = document.getElementById('search-btn');
let search_btn1 = document.getElementById('search-btn1');
let randomResult = document.getElementById('randomresult');
const categoryResult = document.querySelector('#categoryresult');

document.addEventListener('click' , function () {
  event.stopPropagation();
  result.style.display = 'block'
})

document.addEventListener("click" , function(event){
  let target =  event.target;
      if(target !== search_btn && !result.contains(target)){
          result.style.display = 'none';
      }
  })
  
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s="
search_btn.addEventListener('click' , () => {
  let user_input = document.getElementById('user-input').value;
  if(user_input.length == 0){
    result.innerHTML = `<h3>Input Field Cannot Be Empty</h3>`
    result1.innerHTML = `<h3>Input Field Cannot Be Empty</h3>`
  }else{
    fetch( url + user_input)
        .then(response => response.json())
        .then((data) => {
          let myMeals = data.meals[0]
          console.log(myMeals)
          console.log(myMeals.strMeal)
          let count = 1;
          let ingredients = []
          for (let i in myMeals) {
            let ingredient = "";
            let measure = "";
            if (i.startsWith("strIngredient") && myMeals[i]){
              ingredient = myMeals[i];
              measure = myMeals[`strMeasure` + count];
              count+=1;         
              ingredients.push(`${measure} ${ingredient}
              `);
            };
          }
          console.log(ingredients)
          result.classList.add("show");
          result.innerHTML = `
          <div id="resu">
           <img id="img1" src=${myMeals.strMealThumb}>
           <div id="details">
            <h2>${myMeals.strMeal}</h2>
            <h4>${myMeals.strArea}</h4>
           </div>
           <div id="ingredient-con">
    
           </div>
           <div id="recipe">
            <button id="hide-recipe">x</button>
            <pre>${myMeals.strInstructions}</pre>
           </div>
           <button id="show-recipe">View Steps</button>
          </div>
          `;

          let ingredientCon = document.getElementById('ingredient-con');
          let parent = document.createElement('ul');
          let recipe = document.getElementById('recipe');
          let hideRecipe = document.getElementById('hide-recipe');
          let showRecipe = document.getElementById('show-recipe');
    
          ingredients.forEach((i) => {
            let child = document.createElement('li');
            child.innerText = i ;
            parent.appendChild(child);
            ingredientCon.appendChild(parent);
          });
          
          hideRecipe.addEventListener('click', () => {
            recipe.style.display = 'none';
          });
          showRecipe.addEventListener('click', () => {
            recipe.style.display = 'block';
          });
        })
        .catch(() => {
          result.innerHTML = `<h3>Invalid Input</h3>`;
        })
  }
})


document.addEventListener('click' , function () {
  event.stopPropagation();
  result1.style.display = 'block'
})

document.addEventListener("click" , function(event){
  let target =  event.target;
      if(target !== search_btn1 && !result1.contains(target)){
          result1.style.display = 'none';
      }
  })
search_btn1.addEventListener('click' , () => {
  let user_input1 = document.getElementById('user-input1').value;
  if(user_input1.length == 0){
    result1.innerHTML = `<h3>Input Field Cannot Be Empty</h3>`
  }else{
    fetch( url + user_input1)
        .then(response => response.json())
        .then((data) => {
          let myMeals = data.meals[0]
          console.log(myMeals)
          console.log(myMeals.strMeal)
          let count = 1;
          let ingredients1 = []
          for (let i in myMeals) {
            let ingredient = "";
            let measure = "";
            if (i.startsWith("strIngredient") && myMeals[i]){
              ingredient = myMeals[i];
              measure = myMeals[`strMeasure` + count];
              count+=1;         
              ingredients1.push(`${measure} ${ingredient}
              `);
            };
          }
          console.log(ingredients1)
          result1.classList.add("show");
          result1.innerHTML = `
           <img id="img1" src=${myMeals.strMealThumb}>
           <div id="details">
            <h2>${myMeals.strMeal}</h2>
            <h4>${myMeals.strArea}</h4>
           </div>
           <div id="ingredient-con">
    
           </div>
           <div id="recipe">
            <button id="hide-recipe">x</button>
            <pre>${myMeals.strInstructions}</pre>
           </div>
           <button id="show-recipe">View Steps</button>
          `;

          let ingredientCon1 = document.getElementById('ingredient-con');
          let parent1 = document.createElement('ul');
          let recipe1 = document.getElementById('recipe');
          let hideRecipe1 = document.getElementById('hide-recipe');
          let showRecipe1 = document.getElementById('show-recipe');
    
          ingredients1.forEach((i) => {
            let child = document.createElement('li');
            child.innerText = i ;
            parent1.appendChild(child);
            ingredientCon1.appendChild(parent1);
          });
          
          hideRecipe1.addEventListener('click', () => {
            recipe1.style.display = 'none';
          });
          showRecipe1.addEventListener('click', () => {
            recipe1.style.display = 'block';
          });
        })
        .catch(() => {
          result1.innerHTML = `<h3>Invalid Input</h3>`;
        })
  }
})

  let randomurl = "https://www.themealdb.com/api/json/v1/1/random.php"
  fetch(randomurl)
    .then(response => response.json())
    .then((data) => {
      let myMeals = data.meals[0];
      let count = 1;
          let ingredients = []
          for (let i in myMeals) {
            let ingredient = "";
            let measure = "";
            if (i.startsWith("strIngredient") && myMeals[i]){
              ingredient = myMeals[i];
              measure = myMeals[`strMeasure` + count];
              count+=1;         
              ingredients.push(`${measure} ${ingredient}
              `);
            };
          }
      randomResult.innerHTML = `
        <div id="randomrecipe">
          <div id="recipe-ins">
            <h2>${myMeals.strMeal}</h2>
            <h4>${myMeals.strArea}</h4>
            <p>${myMeals.strInstructions}</p>
          </div>
          <div id="ingredient-con1">
          </div>
          <div>
            <a href=${myMeals.strSource}><button> Learn </button></a>
            <a href=${myMeals.strYoutube}><button> Watch </button></a>
          </div>
        </div> 
        <img class="randomimg" src=${myMeals.strMealThumb} >
      `;

      let ingredientCon = document.getElementById('ingredient-con1');
          let parent = document.createElement('ul');
      
          ingredients.forEach((i) => {
            let child = document.createElement('li');
            child.innerText = i ;
            parent.appendChild(child);
            ingredientCon.appendChild(parent);
          });
    })


  let categoryurl = "https://www.themealdb.com/api/json/v1/1/categories.php"
  const getData = async () => {
   const res = await fetch(categoryurl);
   const data = await res.json();
   console.log(data)
   return data
  }
  const displayCategory = async () => {
    const payload = await getData();
    let catDisplay = payload.categories.map((object) => {
    const { strCategory , strCategoryThumb , strCategoryDescription} = object;

    return `
    <div id="details1">
      <h2> ${strCategory}</h2>
      <img src=${strCategoryThumb}>
      <h4>${strCategoryDescription}</h4>
   </div>
   `
   }).join('');
   categoryResult.innerHTML = catDisplay;
  }

  displayCategory()