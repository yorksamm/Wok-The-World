document.addEventListener('DOMContentLoaded', () => {
    // Get recipe ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = parseInt(urlParams.get('id'));
    
    if (typeof recipes !== 'undefined') {
        const recipe = recipes.find(r => r.id === recipeId);
        
        if (recipe) {
            document.getElementById('recipe-title').textContent = recipe.recipeName;
            document.getElementById('recipe-desc').textContent = recipe.recipeDesc;
            document.getElementById('recipe-ingredients').textContent = recipe.recipeIngredients;
            document.getElementById('recipe-directions').textContent = recipe.recipeDirections;
        } else {
            document.getElementById('recipe-title').textContent = 'Recipe Not Found';
        }
    }
});
