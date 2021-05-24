var equipList = "3";

fetch("https://wger.de/api/v2/exercise/?language=2&format=json&equipment="+equipList)
.then(function(exercise){
    return exercise.json();})
.then(function(exercise){
    var exerciseCount = Math.min(exercise.count, 20); //number of results based on pull, but it only displays 20 per
    var i = Math.floor(Math.random()*exerciseCount);
        //console.log(exerciseCount);
    var exerciseName = exercise.results[i].name;
    var exerciseDesc = exercise.results[i].description; //it comes in as <p>
    var exerciseID = exercise.results[i].id; //we may not need this unless we start adding other elements

    //console.log(exercise);
    console.log(exerciseName);
    console.log(exerciseDesc);
    //console.log(exerciseID);
})
//------------------
var mealType = "lunch";
var restrictions = "health=dairy-free";
var dietType = "balanced"
fetch("https://api.edamam.com/search?q=''&to=30&app_id=b368f45b&app_key=5f185f53263101653101123378bc8443&"+"diet="+dietType+"&"+restrictions+"&meatlType="+mealType)
.then(function(recipe){
    return recipe.json();})
.then(function(recipe){
    var availRecipes = recipe.hits.length //set to maximum of 30 recipes displayed; we can tailor this to 7 if we want and display all for the week.
    var i = Math.floor(Math.random()*availRecipes);
    var numberIngredients = recipe.hits[i].recipe.ingredientLines.length; //number of ingredients
    
    for(j=0; j<numberIngredients; j++){
        var ingredients = recipe.hits[i].recipe.ingredientLines[j];
            console.log(ingredients);}
    var recipeName = recipe.hits[i].recipe.label;
    var recipeURL = recipe.hits[i].recipe.shareAs;
    var recipeSource = recipe.hits[i].recipe.source;   

    console.log(recipeName);
    console.log(recipeURL);
    console.log(recipeSource);
    //console.log(recipe);
    console.log(recipe.hits.length);

    
})