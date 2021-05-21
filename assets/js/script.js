var equipList = "3";

fetch("http://wger.de/api/v2/exercise/?language=2&equipment="+equipList)
.then(function(exercise){
    return exercise.json();})
.then(function(exercise){
    var exerciseCount = exercise.count; //number of results based on pull
    var i = Math.floor(Math.random()*exerciseCount);
    var exerciseName = exercise.results[i].name;
    var exerciseDesc = exercise.results[i].description;
    var exerciseID = exercise.results[i].id; //we may not need this unless we start adding other elements

    console.log(exercise);
    console.log(exerciseName);
    console.log(exerciseDesc);
    console.log(exerciseID);
})