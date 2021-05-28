function sleep(miliseconds) {
    const date = Date.now();
    let currentDate = null;
    do{
        currentDate = Date.now()
    } while (currentDate - date < miliseconds)
}

var formResults = function(form){
    var equips = [];
    var intolerances = [];
    var diets = [];

    /**** Pull data from form ****/
    var exercises = document.getElementById("exNum");
    var exerValue = exercises.value;

    for (var equip of document.getElementById("equipment").options){
        if (equip.selected) {
            equips.push(equip.value);
        }
    };

    for (var rest of document.getElementById("restrictions").options){
        if (rest.selected){
            if (rest.value === "intolerance"){
                intolerances.push(rest.label);
            }
            else if (rest.value === "diet"){
                diets.push(rest.label);
            }
        }
    };

    /**** Use data in API and display on page ****/
    var diet = document.getElementById("diet");
    var dietValue = diet.options[diet.selectedIndex].vaule;

    var equipList = equips[Math.floor(Math.random() * equips.length)];

    for (var numOfEx = 0; numOfEx < exerValue; numOfEx++){
        fetch("https://wger.de/api/v2/exercise/?language=2&format=json&equipment="+equipList)
        .then(function(exercise) {
            return exercise.json();
        })
        .then(function (exercise) {
            var exerciseCount = Math.min(exercise.count, 20);
            var i = Math.floor(Math.random() * exerciseCount);

            var exerciseName = exercise.results[i].name;
            var exerciseDesc = exercise.results[i].description;

            var workDiv = document.getElementById("workout-container");
            var workOuts = document.createElement("div");
            var workTitle = document.createElement("h2");
            workTitle.innerHTML = exerciseName;
            var workDesc = document.createElement("p");
            workDesc.innerHTML = exerciseDesc;
            workOuts.appendChild(workTitle);
            workOuts.appendChild(workDesc)
            workOuts.classList = "card box has-background-warning-light is-size-6 workouts";
            workDiv.appendChild(workOuts);
        })
    }

    var intol = "&intolerances";
    for (var re = 0; re < intolerances.length; re++){
        intol = intol + intolerances[re];
        if ((re + 1) != intolerances.length){
            intol = intol + ',';
        }
    }

    var die = "&diet=";
    for (var de = 0; de < diets.length; de++){
        die = die + diets[de];
        if ((de + 1) != diets.length){
            die = die + ',';
        }
    }

    var dietType = dietValue;
    var addMeals = function(mealType, div){
        fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=5b8e5dfba53941858f709b66116ee0e1&addRecipeNutrition=true&'+
        intol+
        die+
        dietType+
        "&type="+mealType)
        .then(function(recipe) {
            return recipe.json();
        })
        .then(function(recipe) {
            for (var totalMeals = 0; totalMeals < 7; totalMeals++){
                var currentRecipe = recipe.results[totalMeals];
                var recipeUrl = currentRecipe.sourceUrl;
                //var recipeName = currentRecipe.title;

                if (div === 1){
                    var recCardDiv = document.querySelector("#breakfast");
                }
                else if (div === 2){
                    recCardDiv = document.querySelector("#lunch");
                }
                else {
                    recCardDiv = document.querySelector("#dinner");
                }

                var recHeader = document.createElement("header");
                recHeader.classList = "card-header";
                var recP = document.createElement("p");
                recP.classList = "card-header-title is-italic has-text-left";
                var recA = document.createElement("a");
                recA.textContent = "Link to recipe";
                recA.href = recipeUrl;
                recA.classList = "card-header-item";
                recP.appendChild(recA);
                recHeader.appendChild(recP);
                recCardDiv.appendChild(recHeader);
            }
        })
    }

    addMeals("breakfast", 1);
    sleep(1000);
    addMeals("fingerfood", 2);
    sleep(1000);
    addMeals("main course", 3);
}