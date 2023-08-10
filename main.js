const serchFood = () =>{
    const inputField = document.getElementById("searchBox");
    const inputValue = inputField.value
    // console.log(inputValue);
    inputField.value = "";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
    // console.log(url);

    fetch(url)
    .then(response => response.json())
    .then(data => displayFood(data.meals))


}


const displayFood = (foods) =>{
    const resultValue = document.getElementById('serch-result');
    resultValue.textContent = "";
    foods.forEach(food => {
        const div = document.createElement('div');
        div.classList.add('col'); 
        div.innerHTML = `  
        <div class="card">
        <img src=${food.strMealThumb} class="card-img-top" alt=${food.strMeal}>
        <div class="card-body">
          <h5 class="card-title">${food.strMeal}</h5>
          <p class="card-text">${food.strInstructions.slice(0, 150)}</p>

          <button onclick="foodItems(${food.idMeal})" class="btn w-100 btn-secondary">Order Now</button>
        </div>


        `
        resultValue.appendChild(div);
    });


}

const foodItems = (mealId) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    // console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => displaySingleFood(data.meals[0]))
}
const displaySingleFood = (food) =>{
    // console.log(food);
    const foodItems = document.getElementById("food-item");

    foodItems.innerHTML = `
             <div class="card">
                <img src=${food.strMealThumb} class="card-img-top" alt=${food.strMeal}>
                <div class="card-body">
                <h5 class="card-title">${food.strMeal}</h5>
                <p class="card-text">${food.strInstructions}</p>
        
            
                </div>
            `
}