const recipes = [
    { title: 'Spaghetti Bolognese', ingredients: 'Spaghetti, minced meat, tomato sauce', instructions: 'Cook spaghetti. Prepare sauce with minced meat and tomato sauce.', videoURL: 'https://www.youtube.com/watch?v=1', imageURL: 'img/01.jpg' },
    { title: 'Chicken Curry', ingredients: 'Chicken, curry powder, coconut milk', instructions: 'Cook chicken. Add curry powder and coconut milk.', videoURL: 'https://www.youtube.com/watch?v=2', imageURL: 'img/02.jpg' },
    { title: 'Vegetable Stir Fry', ingredients: 'Mixed vegetables, soy sauce, garlic, ginger', instructions: 'Stir fry vegetables with garlic and ginger. Add soy sauce.', videoURL: 'https://www.youtube.com/watch?v=3', imageURL: 'img/03.jpg' },
    { title: 'Beef Tacos', ingredients: 'Ground beef, taco shells, lettuce, cheese, salsa', instructions: 'Cook ground beef. Fill taco shells with beef, lettuce, cheese, and salsa.', videoURL: 'https://www.youtube.com/watch?v=4', imageURL: 'img/04.jpg' },
    { title: 'Pancakes', ingredients: 'Flour, milk, eggs, baking powder, sugar', instructions: 'Mix ingredients and cook on a griddle.', videoURL: 'https://www.youtube.com/watch?v=5', imageURL: 'img/05.jpg' },
    { title: 'Caesar Salad', ingredients: 'Romaine lettuce, croutons, Caesar dressing, Parmesan cheese', instructions: 'Toss lettuce with croutons, dressing, and cheese.', videoURL: 'https://www.youtube.com/watch?v=6', imageURL: 'img/06.jpg' },
    { title: 'Tomato Soup', ingredients: 'Tomatoes, onion, garlic, vegetable broth, cream', instructions: 'Cook tomatoes, onion, and garlic. Blend with broth and cream.', videoURL: 'https://www.youtube.com/watch?v=7', imageURL: 'img/07.jpg' },
    { title: 'Grilled Cheese Sandwich', ingredients: 'Bread, cheese, butter', instructions: 'Butter bread and grill with cheese in between slices.', videoURL: 'https://www.youtube.com/watch?v=8', imageURL: 'img/08.jpg' },
    { title: 'Mango Smoothie', ingredients: 'Mango, yogurt, honey, ice', instructions: 'Blend all ingredients until smooth.', videoURL: 'https://www.youtube.com/watch?v=9', imageURL: 'img/09.jpg' },
    { title: 'Chicken Alfredo', ingredients: 'Chicken breast, fettuccine, Alfredo sauce', instructions: 'Cook pasta. Sauté chicken and mix with Alfredo sauce.', videoURL: 'https://www.youtube.com/watch?v=10', imageURL: 'img/10.jpg' },
    { title: 'BBQ Ribs', ingredients: 'Pork ribs, BBQ sauce, spices', instructions: 'Season ribs and cook with BBQ sauce.', videoURL: 'https://www.youtube.com/watch?v=11', imageURL: 'img/11.jpg' },
    { title: 'Chocolate Cake', ingredients: 'Flour, cocoa powder, sugar, eggs, butter, baking powder', instructions: 'Mix ingredients and bake.', videoURL: 'https://www.youtube.com/watch?v=12', imageURL: 'img/12.jpg' },
    { title: 'Guacamole', ingredients: 'Avocados, lime, onion, cilantro, salt', instructions: 'Mash avocados and mix with other ingredients.', videoURL: 'https://www.youtube.com/watch?v=13', imageURL: 'img/13.jpg' },
    { title: 'Lemonade', ingredients: 'Lemons, water, sugar', instructions: 'Mix lemon juice with water and sugar.', videoURL: 'https://www.youtube.com/watch?v=14', imageURL: 'img/14.jpg' },
    { title: 'Sushi', ingredients: 'Sushi rice, seaweed, fish, vegetables', instructions: 'Prepare sushi rice and roll with seaweed, fish, and vegetables.', videoURL: 'https://www.youtube.com/watch?v=15', imageURL: 'img/15.jpg' },
    { title: 'Lasagna', ingredients: 'Lasagna noodles, meat sauce, ricotta cheese, mozzarella cheese', instructions: 'Layer noodles with sauce and cheese, then bake.', videoURL: 'https://www.youtube.com/watch?v=16', imageURL: 'img/16.jpg' },
    { title: 'Garlic Bread', ingredients: 'Bread, garlic, butter, parsley', instructions: 'Spread garlic butter on bread and bake.', videoURL: 'https://www.youtube.com/watch?v=17', imageURL: 'img/17.jpg' },
    { title: 'Chicken Soup', ingredients: 'Chicken, carrots, celery, onions, noodles, broth', instructions: 'Cook chicken and vegetables in broth. Add noodles.', videoURL: 'https://www.youtube.com/watch?v=18', imageURL: 'img/18.jpg' },
    { title: 'Tiramisu', ingredients: 'Mascarpone cheese, coffee, ladyfingers, cocoa powder', instructions: 'Layer coffee-soaked ladyfingers with mascarpone mixture.', videoURL: 'https://www.youtube.com/watch?v=19', imageURL: 'img/19.jpg' },
    { title: 'Beef Stew', ingredients: 'Beef, potatoes, carrots, onions, broth', instructions: 'Cook beef and vegetables in broth until tender.', videoURL: 'https://www.youtube.com/watch?v=20', imageURL: 'img/20.jpg' }
];

document.addEventListener('DOMContentLoaded', () => {
    displayRecipes(recipes);
});

function displayRecipes(recipesArray) {
    const recipesList = document.getElementById('recipes-list');
    recipesList.innerHTML = '';
    recipesArray.forEach((recipe, index) => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        recipeElement.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.imageURL}" alt="${recipe.title}">
            <p>${recipe.ingredients.substring(0, 50)}...</p>
            <button onclick="viewRecipe(${index})">View More</button>
            <button onclick="deleteRecipe(${index})">Delete</button>
        `;
        recipesList.appendChild(recipeElement);
    });
}

document.getElementById('search-input').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(searchQuery) || 
        recipe.ingredients.toLowerCase().includes(searchQuery)
    );
    displayRecipes(filteredRecipes);
});

function viewRecipe(index) {
    const recipe = recipes[index];
    const recipeDetails = document.getElementById('recipe-details');
    recipeDetails.innerHTML = `
        <h2>${recipe.title}</h2>
        <img src="${recipe.imageURL}" alt="${recipe.title}">
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
        <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        <a href="${recipe.videoURL}" target="_blank">Watch Video</a>
    `;
}

document.getElementById('add-recipe-button').addEventListener('click', function() {
    const title = document.getElementById('new-title').value;
    const ingredients = document.getElementById('new-ingredients').value;
    const instructions = document.getElementById('new-instructions').value;
    const videoURL = document.getElementById('new-video-url').value;
    const imageURL = document.getElementById('new-image-url').value;

    const newRecipe = { title, ingredients, instructions, videoURL, imageURL };
    recipes.push(newRecipe);
    displayRecipes(recipes);

    // Clear the form
    document.getElementById('new-title').value = '';
    document.getElementById('new-ingredients').value = '';
    document.getElementById('new-instructions').value = '';
    document.getElementById('new-video-url').value = '';
    document.getElementById('new-image-url').value = '';
});

function deleteRecipe(index) {
    recipes.splice(index, 1);
    displayRecipes(recipes);
}
