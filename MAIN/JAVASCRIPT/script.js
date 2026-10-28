//DECLARING FUNCTION INGREDIENTS, SELECTING ALL FROM 'recipe-ingredients' class
const ingredients = document.querySelectorAll('#recipe-ingredients');
ingredients.forEach((li, index) => {
    const ingredientText = li.textContent;
    li.textContent = '';
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
ingredients.addEventListener('change', (event) => {
    if (event.target.type === 'checkbox') {
        label.classList.add('checked');
    } else {
        label.classList.remove('checked');
    }
});
