const appId = "1602f865";
const appKey = "bf12eff41ed89d11ec705e2725cf9e5d";

window.getRecipes =  async function() {
    var response = await fetch(`https://api.edamam.com/api/recipes/v2?q=chicken&type=public&app_id=${appId}&app_key=${appKey}`);
    // console.log(response.json()); 
    // hits[0].recipe.label
    var results = await response.json();

    console.log(results.hits);

    var table = document.createElement('table');
    table.setAttribute('id', 'recipe-list');

    var tableRow = document.createElement('tr');
    var tableHeading = document.createElement('th');
    tableHeading.innerText = "Name";
    tableRow.appendChild(tableHeading);
    table.appendChild(tableRow);

    tableHeading = document.createElement('th');
    tableHeading.innerText = "Calories";
    tableRow.appendChild(tableHeading);
    table.appendChild(tableRow);

    tableHeading = document.createElement('th');
    tableHeading.innerText = "Dish Type";
    tableRow.appendChild(tableHeading);
    table.appendChild(tableRow);

    results.hits.forEach(result => {
        var row = document.createElement('tr');
        var cell = document.createElement('td');
        cell.innerText = result.recipe.label;
        row.appendChild(cell);
        
        cell = document.createElement('td');
        cell.innerText = result.recipe.calories;
        row.appendChild(cell);

        cell = document.createElement('td');
        cell.innerText = result.recipe.dishType;
        row.appendChild(cell);

        table.appendChild(row);
    });


    document.getElementById('search-table').appendChild(table);
    
}

function createRecipe() {
    console.log("HERE");
    getRecipes();
}

async function loadPlanTable() {
    var host = window.location.origin;

    try {
        const planResponse = await fetch(`${host}/plans`);
        if (!planResponse.ok) {
            throw new Error('Network response was not ok');
        }
        const plans = await planResponse.json();
        console.log(planResponse)
        console.log(plans)

        var table = document.createElement('table');
        table.setAttribute('id', 'lists');

        var tableRow = document.createElement('tr');
        var tableHeading = document.createElement('th');
        tableHeading.innerText = "Plan";
        tableRow.appendChild(tableHeading);
        table.appendChild(tableRow);

        plans.forEach(plan => {
            var row = document.createElement('tr');
            var cell = document.createElement('td');
            cell.innerText = plan.recipes
            row.appendChild(cell);
            table.appendChild(row);
        });

        const planTableElement = document.getElementById('plan-table');
        if (planTableElement) {
            planTableElement.appendChild(table);
        } else {
            console.error('No element with id "plan-table" found');
        }

        const supabaseResponse = await fetch(`${host}/supabase`);
        if (!supabaseResponse.ok) {
            throw new Error('Network response was not ok');
        }
        const supabaseData = await supabaseResponse.json();
        console.log(supabaseData); 

    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function parsetableJSON() {
    var recipes = document.getElementById('recipes').value;
    var recipeList = recipes.split(',');
    recipeList = recipeList.map(recipe => recipe.trim());
    return recipeList;
}

window.onload = loadPlanTable;


var form = document.getElementById("searchform");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

window.postRecipe= async function(){

    fetch("/plans", {
        method: 'POST',
        body: JSON.stringify({ recipes: 'hello' }),
        headers: new Headers({ "Content-Type": "application/json" })
    });
}

