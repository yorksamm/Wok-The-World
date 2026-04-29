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

    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const existing = document.getElementById(fieldId + '-error');
        if (existing) existing.remove();

        const errorSpan = document.createElement('span');
        errorSpan.id = fieldId + '-error';
        errorSpan.textContent = message;
        errorSpan.style.color = 'red';
        errorSpan.style.fontSize = '0.85em';
        errorSpan.style.display = 'block';
        field.insertAdjacentElement('afterend', errorSpan);
    }

    function clearError(fieldId) {
        const existing = document.getElementById(fieldId + '-error');
        if (existing) existing.remove();
    }

    function clearAllErrors() {
        ['recipeName','recipeCuisine','recipeDesc','recipeIngredients','recipeDirections']
            .forEach(id => clearError(id));
    }

    if (recipeForm) {
        document.getElementById('recipeName').addEventListener('blur', () => {
            const v = document.getElementById('recipeName').value.trim();
            if (!v) showError('recipeName', 'Recipe name is required.');
            else if (v.length < 3) showError('recipeName', 'Name must be at least 3 characters.');
            else clearError('recipeName');
        });

        document.getElementById('recipeCuisine').addEventListener('blur', () => {
            const v = document.getElementById('recipeCuisine').value.trim();
            if (!v) showError('recipeCuisine', 'Please select a cuisine.');
            else clearError('recipeCuisine');
        });

        document.getElementById('recipeDesc').addEventListener('blur', () => {
            const v = document.getElementById('recipeDesc').value.trim();
            if (!v || v.length < 10) showError('recipeDesc', 'Description must be at least 10 characters.');
            else clearError('recipeDesc');
        });

        document.getElementById('recipeIngredients').addEventListener('blur', () => {
            const v = document.getElementById('recipeIngredients').value.trim();
            if (!v || v.length < 10) showError('recipeIngredients', 'Please enter more detail for ingredients.');
            else clearError('recipeIngredients');
        });

        document.getElementById('recipeDirections').addEventListener('blur', () => {
            const v = document.getElementById('recipeDirections').value.trim();
            if (!v || v.length < 20) showError('recipeDirections', 'Directions must be at least 20 characters.');
            else clearError('recipeDirections');
        });
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
            clearAllErrors(); 

            const name = document.getElementById('recipeName').value.trim();
            const cuisine = document.getElementById('recipeCuisine').value.trim();
            const desc = document.getElementById('recipeDesc').value.trim();
            const ingredients = document.getElementById('recipeIngredients').value.trim();
            const directions = document.getElementById('recipeDirections').value.trim();

            let hasErrors = false;
            if (!name || name.length < 3) { 
                showError('recipeName', 'Recipe name must be at least 3 characters.'); 
                hasErrors = true; }
            if (!cuisine) { 
                showError('recipeCuisine', 'Please select a cuisine.'); 
                hasErrors = true; }
            if (!desc || desc.length < 10) { 
                showError('recipeDesc', 'Description must be at least 10 characters.'); 
                hasErrors = true; }
            if (!ingredients || ingredients.length < 10) { 
                showError('recipeIngredients', 'Please enter more detail for ingredients.'); 
                hasErrors = true; }
            if (!directions || directions.length < 20) { 
                showError('recipeDirections', 'Directions must be at least 20 characters.'); 
                hasErrors = true; }

            if (hasErrors) return; 

            const submitBtn = recipeForm.querySelector('[type="submit"]');
            if (submitBtn) submitBtn.disabled = true;

            const newRecipe = {
                recipeName: name,
                recipeCuisine: cuisine,
                recipeIngredients: ingredients,
                recipeDirections: directions,
                recipeDesc: desc
            };

            const updatedRecipes = JSON.parse(localStorage.getItem('myRecipes')) || [];
            updatedRecipes.push(newRecipe);
            localStorage.setItem('myRecipes', JSON.stringify(updatedRecipes));

            alert("Recipe shared successfully!");
            recipeForm.reset();
            clearAllErrors(); 
            recipeModal.style.display = 'none';
            if (submitBtn) submitBtn.disabled = false; 

            if (recipeList) {
                displayRecipe(newRecipe);
            }
        });
    }
});