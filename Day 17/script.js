// ! Day 17: Data Structures

// * Activity 1: Linked List
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    addNode(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    removeNode(){
        if(!this.head){
            console.log('List is empty');
            return;
        }
        if(!this.head.next){
            this.head = null;
            return;
        }

        let current = this.head;
        while(current.next && current.next.next){
            current = current.next;
        }
        current.next = null;
    }

    displayNodes(){
        if(!this.head){
            console.log('List is empty');
            return;
        }

        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
console.log(list.displayNodes());

// * Activity 2 : Stack
class Stack{
    constructor(){
        this.items = [];
    }

    // method to add an element
    push(element){
        this.items.push(element);
    }

    // method to remove an element
    pop(){
        if(this.items.length === 0){
            console.log("Stack is empty");
            return null
        }
        return this.items.pop();
    }

    // method to view the top element of the stack
    peek(){
        if(this.items.length === 0){
            console.log("Stack is empty");
            return null
        }
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    // method to display all elements in the stack
    display(){
        console.log(this.items.join(' '));
    }
}

function reverseString(str){
    const stack = new Stack();

    for(let i = 0; i < str.length; i++){
        stack.push(str[i]);
    }

    let reversedStr = '';
    while(!stack.isEmpty()){
        reversedStr += stack.pop();
    }

    return reversedStr;
}

const originalString = "hello";
console.log(reverseString(originalString));


const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

stack.display()

console.log(stack.peek());

stack.pop();
stack.display();

console.log(stack.peek());