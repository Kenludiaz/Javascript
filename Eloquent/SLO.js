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

// Ex. 2

// class Group {
//     constructor() {
//       this.members = [];
//     }
  
//     add(value) {
//       if (!this.has(value)) {
//         this.members.push(value);
//       }
//     }
  
//     delete(value) {
//       this.members = this.members.filter(v => v !== value);
//     }
  
//     has(value) {
//       return this.members.includes(value);
//     }
  
//     static from(collection) {
//       let group = new Group;
//       for (let value of collection) {
//         group.add(value);
//       }
//       return group;
//     }
//   }
  

// Ex. 3

class Group {
    constructor() {
      this.members = [];
    }
  
    add(value) {
      if (!this.has(value)) {
        this.members.push(value);
      }
    }
  
    delete(value) {
      this.members = this.members.filter(v => v !== value);
    }
  
    has(value) {
      return this.members.includes(value);
    }
  
    static from(collection) {
      let group = new Group;
      for (let value of collection) {
        group.add(value);
      }
      return group;
    }
  
    [Symbol.iterator]() {
      return new GroupIterator(this);
    }
  }
  
  class GroupIterator {
    constructor(group) {
      this.group = group;
      this.position = 0;
    }
  
    next() {
      if (this.position >= this.group.members.length) {
        return {done: true};
      } else {
        let result = {value: this.group.members[this.position],
                      done: false};
        this.position++;
        return result;
      }
    }
  }