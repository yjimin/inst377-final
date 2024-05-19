const appId = "1602f865";
const appKey = "bf12eff41ed89d11ec705e2725cf9e5d";

async function getRecipes() {
    
}

async function loadPlanTable() {
    var host = window.location.origin;
    await fetch (`${host}/plans`)
        .then(res => res.json())
        .then(data => {
            var table = document.createElement('table');
            table.setAttribute('id','lists');

            var tableRow = document.createElement('tr');
            var tableHeading
        });

}
function parsetableJSON() {
    var recipes = document.getElementById('recipes').value;
    var recipeList = recipes.split(',');
    var recipeList = recipeList.map(recipe => recipe.trim());
    return recipeList;
}

window.onload = loadPlanTable