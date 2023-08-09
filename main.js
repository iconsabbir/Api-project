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
    // console.log(foods);
    const resultValue = document.getElementById('serch-result');
    foods.forEach(food => {
        const div = document.createElement('div');
        div.classList.add('col'); 
        div.innerHTML = `  
        <div class="card">
        <img src=${food.strMealThumb} class="card-img-top" alt=${food.strMeal}>
        <div class="card-body">
          <h5 class="card-title">${food.strMeal}</h5>
          <p class="card-text">${food.strInstructions.silce(0,150)}</p>
        </div>


        `
        resultValue.appendChild(div);
    });


}