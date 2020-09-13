// //You can only use arrow functions with reg functions 
// //if you have an arrow callback
// //otherwise you need the .call method


// @@@ Ex #1:
// class Vec {
// 	constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     };
  
//         plus = (vec) => {
//     	let new_x = this.x + vec.x;
//     	let new_y = this.y + vec.y;
//     	return new Vec(new_x, new_y);
//     } 
    
//         minus = (vec) => {
//     	let new_x = this.x - vec.x;
//     	let new_y = this.y - vec.y;
//     	return new Vec(new_x, new_y);
//     }
//         length = () => {
//     	return Math.sqrt(this.x * this.x + this.y * this.y)
//     }
  
// };