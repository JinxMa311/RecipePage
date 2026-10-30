//DECLARING FUNCTION INGREDIENTS, SELECTING ALL FROM 'recipe-ingredients' class
const ingredients = document.querySelectorAll('#recipe-ingredients');
ingredients.forEach((li) => {
//CREATING CHECKBOXES FOR EACH INDEX OF INGREDIENTS LIST
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'ingredient-${index}';
//DEFINING LABELS FOR EACH INGREDIENT, IN THIS CASE JUST KEEPING THEIR TEXT
    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = ' ${ingredientText}';
//APPENDING THE CHECKBOX AND LABEL TO THE LIST
    li.appendChild(checkbox);
    li.appendChild(label);
});
//CREATING EVENT LISTENER FOR CLICK EVENTS
ingredients.addEventListener('change', (event) => {
    if (event.target.type === 'checkbox') {
        label.class = 'checked';
    } else {
        label.class = 'unchecked';
    }
});
