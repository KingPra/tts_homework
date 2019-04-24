// Exercise 1

// ​Create an array to represent your shopping list with the following items: 'pop tarts', 'ramen noodles', 'chips', 'salsa', and 'coffee'.
// Add 'fruit loops' to the list.
// Update 'coffee' to 'fair trade coffee'
// Replace 'chips' and 'salsa' with 'rice' and 'beans'
// Create an empty array to represent your shopping cart.
// Remove the last item from your shopping list and add it to your cart

// Remove the first item from your shopping list and add it to the cart

// Write a 'while' loop that takes items from your shopping list and moves them to your cart until there are no items left on the list.

// Sort the items in your cart alphabetically... backwards

// Print the list of items in your shopping cart to the console as comma separated string.

const shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];

console.log(shoppingList);

// add fruit loops
shoppingList.push('fruit loops');

console.log('add fruit loops: ', shoppingList);

// update coffee to fair trade coffee
//shoppingList.splice(4, 1, 'fair trade coffee');

// an easier way:
shoppingList[4] = 'fair trade coffee';

console.log('update coffee to fair trade coffee ', shoppingList);

// Replace 'chips' and 'salsa' with 'rice' and 'beans'

shoppingList.splice(2,2, 'rice', 'beans');

console.log('replace ships and salsa with rice and beans ', shoppingList);

// Create an empty array to represent your shopping cart.

const shoppingCart = [];

// Remove the last item from your shopping list and add it to your cart

shoppingCart.push(shoppingList.pop());
//shoppingList.splice(-1, 1);

console.log('add item to shopping cart: ',shoppingCart);
console.log('remove item from shopping list: ', shoppingList);

// Remove the first item from your shopping list and add it to the cart
shoppingCart.push(shoppingList.shift());

console.log('add item to cart : ',shoppingCart);
console.log('remove first item from shopping list: ', shoppingList);

// Write a 'while' loop that takes items from your shopping list and moves them to your cart until there are no items left on the list.

while(shoppingList.length > 0) {
	shoppingCart.push(shoppingList.pop());
}
console.log('move shopping list to shopping cart:')
console.log('shopping cart: ', shoppingCart);
console.log('shopping list: ', shoppingList);

// Sort the items in your cart alphabetically... backwards
shoppingCart.sort().reverse();

console.log('sort itmes in shopping cart, alphabetically...backwards: ', shoppingCart);

// Print the list of items in your shopping cart to the console as comma separated string.
console.log(shoppingCart.toString());

/*----------------------------------------------------------------------------*/

// Exercise: Addressing Objects
// Get the following values:

// Name of the course ('JavaScript Applications')

// Name of the second teacher ('Shane')

// Name of the first student ('Steve')

// Katy's computer type ('macbook')

// The preReq equipment object

// The second OSOption from equipment prereqs ('osx')

// String listing the OSOptions separated by 'or' ('linux or osx')

// An array of all the students that are using OSX.



var course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
	{
		name: 'Steve',
		computer: {
			OS: 'Linux',
			type: 'laptop'
		}
	},
	{
		name: 'Katy',
		computer: {
			OS: 'OSX',
			type: 'macbook'
		}
	},
	{
		name: 'Chuck',
		computer: {
			OS: 'OSX',
			type: 'macbook'
		}
	}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};

//1. Name of the course ('JavaScript Applications')
console.log('name of course: ',course.name);

//2. Name of the second teacher ('Shane')
console.log('name of second teacher: ',course.teachers[1]);


//3.  Name of the first student ('Steve')
console.log(course.students[0].name);

//4. Katy's computer type ('macbook')
console.log(course.students[1].computer.type);

//5. The preReq equipment object
console.log(course.preReqs.equipment);

//6. The second OSOption from equipment prereqs ('osx')
console.log(course.preReqs.equipment.OSOptions[1]);

//7. String listing the OSOptions separated by 'or' ('linux or osx')
console.log(course.preReqs.equipment.OSOptions.join(' or '));

//8.  An array of all the students that are using OSX.
//console.log(course.students.map(student => student.computer.OS === 'OSX' ? student.name : '' ))
//console.log(course.students.map(student => student.computer.OS === 'OSX' && student.name ));

let arr = [];
course.students.map(student => {
	if (student.computer.OS === 'OSX') {
		arr.push(student.name)
	}
})
console.log('osx users are: ', arr);

// template for building object

// var name_of_object = {
// 	key: value
// }

// const dog = {
// 	name: 'Leo',
// 	speed: 100,
// 	stamina: 80,
// 	coat: 'Black and Tan',
// 	nails: 'short',
// 	health: 100,
// 	owner: {
// 		name: 'Shaz',
// 		health: 100,
// 		profession: 'Chipotle',
// 		do_park_member: true,
// 	},
// 	siblings: ['Lucy', 'Winter', 'Larry']
// }

//  delete dog.speed;
//  dog.speed = 100;
// console.log(dog);

