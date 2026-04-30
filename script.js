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
            if (!v || v.length < 10) showError('recipeDirections', 'Directions must be at least 10 characters.');
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

        // Create elements safely to prevent XSS - use textContent instead of innerHTML
        const h3 = document.createElement('h3');
        h3.textContent = `${recipe.recipeName} (${recipe.recipeCuisine})`;
        listItem.appendChild(h3);

        const descLabel = document.createElement('h4');
        descLabel.textContent = 'Description';
        listItem.appendChild(descLabel);

        const descPara = document.createElement('p');
        descPara.style.fontStyle = 'italic';
        descPara.textContent = recipe.recipeDesc;
        listItem.appendChild(descPara);

        const ingredLabel = document.createElement('h4');
        ingredLabel.textContent = 'Ingredients';
        listItem.appendChild(ingredLabel);

        const ingredPara = document.createElement('p');
        ingredPara.textContent = recipe.recipeIngredients;
        listItem.appendChild(ingredPara);

        const dirLabel = document.createElement('h4');
        dirLabel.textContent = 'Directions';
        listItem.appendChild(dirLabel);

        const dirPara = document.createElement('p');
        dirPara.textContent = recipe.recipeDirections;
        listItem.appendChild(dirPara);

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
            if (!directions || directions.length < 10) { 
                showError('recipeDirections', 'Directions must be at least 10 characters.'); 
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

//search bar
const searchInput = document.getElementById("recipe-search");

if (searchInput && typeof recipes !== "undefined") {
    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); 

            const query = searchInput.value.toLowerCase().trim();
            if (!query) return;
            const match = recipes.find(r =>
                r.recipeName.toLowerCase().includes(query)
            );

            if (match) {
                const allListItems = document.querySelectorAll("li");

                let targetElement = null;

                allListItems.forEach(li => {
                    if (li.textContent.toLowerCase().includes(match.recipeName.toLowerCase())) {
                        targetElement = li;
                    }
                });

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                    // highlight effect
                    targetElement.style.backgroundColor = "#ffff99";
                    setTimeout(() => {
                        targetElement.style.backgroundColor = "";
                    }, 1500);
                }
            }
        }
    });
}