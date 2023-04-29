class Node {
  constructor(value){
      this.value = value
      this.next = null
  }

}

class Stack {
  constructor(){
    this.head = null
    this.tail = null
    this.size = 0
}

  push(number) {
    // your code here
    
  }
  
  pop() {
    // your code here
        
  }
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.pop())
// => 5

stack.push(2)
stack.push(7)
console.log(stack.pop())
// => 7

console.log(stack.pop())
// => 2

console.log(stack.pop())
// => 3

module.exports = Stack
