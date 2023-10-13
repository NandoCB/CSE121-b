/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: 'Fernando Cardozo',
    favoriteFoods: ["Gnocchi", "Steaks with smashed potatoes", "Tomato and lettuce salad", ],
    photo: 'images/placeholder.png',
    hobbies: ["Run", "Bike", "Read", "Fitness", "Watch movies"],
    placesLived: [],
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {place: 'Santiago, STG, Dominican Republic',
     length: '2 years'}
);

myProfile.placesLived.push(
    {place: 'Chuí, RS, Brazil',
     length: '3 years'}
);

myProfile.placesLived.push(
    {place: 'Montevideo, MVD, Uruguay',
     length: '24 years'}
)


/* DOM Manipulation - Output */



/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

const imageElement = document.querySelector("img");
imageElement.setAttribute('src', myProfile.photo);
imageElement.setAttribute('alt', `Profile image of ${myProfile.name}`);
imageElement.setAttribute('width', '200');




/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);

});

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = placeLived.place;
    dd.textContent = placeLived.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
})
