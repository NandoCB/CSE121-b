/* W05: Programming Tasks */

/* Declare and initialize global variables */

let templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    templesElement.innerHTML = ''; // Clean existing content
    const templeGrid = document.createElement('div');
    templeGrid.classList.add('temple-grid');
  
    temples.forEach((temple) => {
      const articleElement = document.createElement('article');
      const h3Element = document.createElement('h3');
      h3Element.textContent = temple.templeName;
  
      const imgElement = document.createElement('img');
      imgElement.setAttribute('src', temple.imageUrl);
      imgElement.setAttribute('alt', temple.templeName);
  
      articleElement.appendChild(h3Element);
      articleElement.appendChild(imgElement);
      templeGrid.appendChild(articleElement);
    });
  
    templesElement.appendChild(templeGrid);
  };


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch ('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');

    if (response. ok)
    {
        templeList = await response.json ();
    
        displayTemples (templeList);
    }
}


/* reset Function */
function reset () {
    templesElement.innerHTML = "";
}

/* sortBy Function */
function sortBy (temples) {

    reset ();

    const filter = document.querySelector ('#sortBy').value;

    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temp => temp.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temp => !temp.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temp => new Date(temp.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
            console.log("Invalid filter option");
    }
}

/* Event Listener */
document.querySelector ('#sortBy').addEventListener("change", () => {sortBy(templeList)});

getTemples ();