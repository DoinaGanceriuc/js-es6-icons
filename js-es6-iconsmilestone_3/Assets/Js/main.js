/* Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone */

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

// seleziona elementi DOM
const classUserElement = document.getElementsByClassName("user");
const classVegetableElement = document.getElementsByClassName("vegetable");
const classAnimalElement = document.getElementsByClassName("animal");

icons.forEach(singleIcon => {
    /* console.log(singleIcon); */
    const cardElement = ` <div class="card">
                        <i class="${singleIcon.family} ${singleIcon.prefix}${singleIcon.name} ${singleIcon.type}"></i>
                        <p class="text">${singleIcon.name.toLocaleUpperCase()}</p>
                    </div>`


    document.querySelector(".cards").insertAdjacentHTML("beforeend", cardElement)


	if(singleIcon.type == "animal") {
		 for (let i = 0; i < classAnimalElement.length; i++) {
	classAnimalElement[i].classList.add("blue")
		 }
  } else if (singleIcon.type == "vegetable") {
	  for (let i = 0; i < classVegetableElement.length; i++) {
	classVegetableElement[i].classList.add("orange")
		 }

  }
  else if (singleIcon.type == "user") {
	for (let i = 0; i < classUserElement.length; i++) {
	classUserElement[i].classList.add("purple")
		 }

  }    
});






	
 

  