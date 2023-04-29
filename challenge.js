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
    let node = new Node(number)
        
    // check if the head node is valid
    if(!this.head){
      
     //if not, make the new node the head and tail node of the stack
      this.head = node
      this.tail = node
    }else{
     // if there is at least one node in the stack
     // make new node to be the head and the previous 
     // head node to be the next property of the new head 
       let temp = this.head
       this.head = node
       this.head.next = temp
    }
  
   // increment the size
   this.size++
  
  return this.size
  }
  
  pop() {
    // your code here
        // if there is no node return null
        if(!this.head) return null
        // if there are nodes
        let temp = this.head
        // if only one node, set the head to null
        if(this.head === this.tail){
              this.tail = null
        }
        
        //set the head to be the next node
        this.head = this.head.next
       
        //decrement the size
        this.size--
        
        //return removed node value
        return temp.value
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
