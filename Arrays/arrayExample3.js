let books = ["Death on the Nile", "1984", "The Very Hungry Catapillar","A Song of Ice and Fire", "Charlie and the Choclate Factory"];
let films = ["Blade Runner","Blues Brothers","Lord of the Rings","Matrix","2001 A Space Odyssey","The Shining","Full Metal Jacket","Batman the Dark Night","Romeo+Juliet","Star Wars"];
let bands = ["Arcade Fire","The Cure","Grimes","Pulp","Frank Zappa"]
//In order to put arrays together we can create another varible and use "= [...Example1,...Example2]".//
let favourites = [...films,...books,...bands];
//Its inportant to have the varibles come first in the lines//
console.log("My favourite films, books and bands are " + favourites +" they are really cool.");
