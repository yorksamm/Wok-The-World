document.addEventListener('DOMContentLoaded', () => {
    const recipeModal = document.getElementById('recipeModal');
    const openFormBtn = document.getElementById('openForm');
    const closeFormBtn = document.getElementById('closeForm');
    const recipeForm = document.getElementById('recipeForm');
    const recipeList = document.getElementById('recipeList');
    const popularList = document.getElementById('popular-list');

    if (openFormBtn) {
        openFormBtn.onclick = () => recipeModal.style.display = 'flex';
    }
    if (closeFormBtn) {
        closeFormBtn.onclick = () => recipeModal.style.display = 'none';
    }

    function displayRecipe(recipe) {
        if (!recipeList) return;
        const listItem = document.createElement('li');
        listItem.style.border = "2px solid #004d24";
        listItem.style.padding = "20px";
        listItem.style.borderRadius = "15px";
        listItem.style.marginBottom = "20px";
        listItem.style.backgroundColor = "#fff";

        listItem.innerHTML = `
            <h3>${recipe.recipeName} (${recipe.recipeCuisine})</h3>
            <p><em>${recipe.recipeDesc}</em></p>
            <h4>Ingredients</h4>
            <p>${recipe.recipeIngredients}</p>
            <h4>Directions</h4>
            <p>${recipe.recipeDirections}</p>
        `;
        recipeList.appendChild(listItem);
    }

    const savedRecipes = JSON.parse(localStorage.getItem('myRecipes')) || [];
    if (recipeList) {
        savedRecipes.forEach(recipe => displayRecipe(recipe));
    }

    //display popular recipes aka first 3 recipes
    if (popularList && typeof recipes !== "undefined") {
        popularList.innerHTML = '';
        const popularRecipes = recipes.slice(0, 3); // First 3 recipes
        popularRecipes.forEach(recipe => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = `recipe.html?id=${recipe.id}`;
            link.textContent = recipe.recipeName;
            li.appendChild(link);
            popularList.appendChild(li);
        });
        
        // Add "See More" link
        const seeLi = document.createElement('li');
        const seeLink = document.createElement('a');
        seeLink.href = 'search.html';
        seeLink.textContent = 'See More';
        seeLi.appendChild(seeLink);
        popularList.appendChild(seeLi);
    }

    // Display recipes by cuisine in search.html
    if (typeof recipes !== "undefined") {
        const cuisines = ['Chinese', 'Japanese', 'Korean', 'Thai', 'Vietnamese'];
        cuisines.forEach(cuisine => {
            const cuisineId = cuisine.toLowerCase() + '-recipes';
            const cuisineList = document.getElementById(cuisineId);
            if (cuisineList) {
                const cuisineRecipes = recipes.filter(r => r.recipeCuisine === cuisine);
                cuisineRecipes.forEach(recipe => {
                    const li = document.createElement('li');
                    const link = document.createElement('a');
                    link.href = `recipe.html?id=${recipe.id}`;
                    link.textContent = recipe.recipeName;
                    li.appendChild(link);
                    cuisineList.appendChild(li);
                });
            }
        });
    }

    if (recipeForm) {
        recipeForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const newRecipe = {
                recipeName: document.getElementById('recipeName').value,
                recipeCuisine: document.getElementById('recipeCuisine').value,
                recipeIngredients: document.getElementById('recipeIngredients').value,
                recipeDirections: document.getElementById('recipeDirections').value,
                recipeDesc: document.getElementById('recipeDesc').value
            };

            const updatedRecipes = JSON.parse(localStorage.getItem('myRecipes')) || [];
            updatedRecipes.push(newRecipe);
            localStorage.setItem('myRecipes', JSON.stringify(updatedRecipes));

            alert("Recipe shared successfully!");
            recipeForm.reset();
            recipeModal.style.display = 'none';
            
            if (recipeList) {
                displayRecipe(newRecipe);
            }
        });
    }
});