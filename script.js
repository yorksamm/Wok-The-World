document.addEventListener('DOMContentLoaded', () => {
    const recipeModal = document.getElementById('recipeModal');
    const openFormBtn = document.getElementById('openForm');
    const closeFormBtn = document.getElementById('closeForm');
    const recipeForm = document.getElementById('recipeForm');
    const recipeList = document.getElementById('recipeList');

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