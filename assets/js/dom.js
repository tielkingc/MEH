//console.log(exercise);
console.log(exerciseName);
console.log(exerciseDesc);
//console.log(exerciseID);
 //console.log(exerciseCount);

 console.log(recipeName);
 console.log(recipeURL);
 console.log(recipeSource);
 //console.log(recipe);
 console.log(recipe.hits.length);

 //console.log(document.domain);
 console.log(document.title);
 console.log(document.head);
 console.log(document.body);
 console.log(document.forms[0]);
 console.log(document.links);
 console.log(document.image);
 console.log(document.control);
 console.log(document.tile);


 //GETELEMENTBYID/

document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector()
document.querySelectorAll()

items[1].textcontent = 'hello2';
items[1].style.fontweight = 'bold';
items[1].stylebackgroundColor = 'yellow';

//style to all of them
for(var i = o < items.lenght; 1++){
    items[i].style.backgroung = Image
}

var li = documetn.getElementsByTagName(li)
console.log(li);
console.log(li[1]);
li[1].textContent = '!text!'


//QUERY SELECTOR//

var header = document.querySelectorAll('4')

var titles = document.querySelectorAll('.title');

console.log(titles)

//TRAVERSING THE DOM??

var itemList = document.querySelector('#items') Gym

console.log(itemList.parentNode);

//parentElement

//ChildNodes
console.log(itemList.children)

//FirstChild
console.log(itemList.firstChild);
//firstelementchild
console.log(itemlist.firstElementChild)
itemList.lastElementChild.textContent = ''

//nextSibling
console.log(itemList.nextSibling);
//
//nextElementSibling
console.log(itemList.nextElementSibling);

//createElement

//Create a div
var newDiv = document.createElement('div');

newDiv.className = ''

//add attr
newDiv.setAttribute('title', 'Hello Div')

var newDivTect = document.createTextNode('hello world')

//add text
newDiv.apprendChild(newDivTect);

console.log(newDiv);


//INSERT INTO THE DOM. WE HAVE TO DECIDE WHERE TO PUT IT.
//RIGHT BELLOW CLASS = CONTAINER OR UNDER EACH CLASS?

var container = document.querySelector('header .container');
var h1 =  document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv, h1);

//EVENTS

//OnHTML
//<br>
//<button class="btn btn-dark btn-block" id="button">ClickHere</button>
//</br>

var button = document.getElementById('buton').addEventListener('click'), buttonClick);

function buttonClick(){
    console.loge('Button clicked')
    document.getElementById('header-title').textContent = 'MEH';
    document.querySelector('#main').style.background = Image?

    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);


    console.log(e.type);
    console.log(e.);
}

var button = document.getElementById('button');

button.addEventListener('click', runEvent);

//button.addEventListener('dbclick', runEvent);

//button.addEventListener('mousedown', runEvent);


function runEvent(e){
    console.log('EVENT TYPE: '+e.type)

}



//Create under the Button  a div with an id
//create another var

var button = document.getElementById('button');
var box = document.getElementById('box');

box.addEventlistener ()


