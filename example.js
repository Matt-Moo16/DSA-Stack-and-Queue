/* 
A stack is a data structure is similar to a list with access restricted to only 1 end.
It stores elements in a LIFO (Last In First Out) order.
It's like a stack of plates in your kitchen. When a plate is added, it is pushed towards the bottom of the stack. 
When a plate is added, it is pushed towards the bottom of the stack. The last plate that you put on the stack stays on the top of the stack, 
and it is the 1st plate that you get to take out and use. 
Stacks are usually thought of as vertical data structures, unlike lists and arrays which are horizontal. 
Hence the 1st and the only directly accessible item on the stack is referred to as "top" of the stack.
*/

// Creates a node containing the data and a reference to the next item
    class _Node {
        constructor (data, next) {
            this.data = data;
            this.next = next;
        }
    }

    class Stack {
        constructor() {
            this.top = null
        }
        // A stack has 2 primary functions:
        // push(): places data onto the top of a stack
        // pop(): removes data from the top of the stack
        
        push(data) {
            /* If the stack is empty, then the node will be the
               top of the stack */
            if (this.top === null) {
                this.top = new _Node(data, null);
                return this.top;
            }
    
            /* If the stack already has something, 
               then create a new node,
               add data to the new node, and
               have the pointer point to the top */
            const node = new _Node(data, this.top);
            this.top = node;
        }

        pop() {
            /* In order to remove the top of the stack, you have to point
               the pointer to the next item and that next item becomes the
               top of the stack */
            const node = this.top;
            this.top = node.next;
            return node.data;
        }
    }


/* 
A stack can remove only the most recently added data. It's in LIFO order.
What if you want an operation that is "first come, first served"? 
A queue is a data structure that models a FIFO (First In First Out) operation. 
An example of a queue is the fast food service at McDonald's.
You line up, and service is provided in the order that you (and everyone else) lined up.
If you are 1st to line up, you get served 1st. 
A queue is a type of list where data is inserted at the end and is removed from the front. 
Queues are used to store data in the order in which they occur, as opposed to a stack, in which the last piece of data entered is the 1st element used for processing.
*/

// Creates a node containing the data and a reference to the next item
    class _Node {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }

    class Queue {
        constructor() {
            this.first = null;
            this.last = null;
        }
        // the main functions of a queue include
        // enqueue(data): adds data to a queue (insertion)
        // dequeue(): removes the oldest data added to a queue (deletion)

        enqueue(data) {
            const node = new _Node(data);

            if (this.first === null) {
                this.first = node;
            }

            if (this.last) {
                this.last.next = node;
            }
            //make the new node the last item on the queue
            this.last = node;
        }

        dequeue() {
            //if the queue is empty, there is nothing to return
           if (this.first === null) {
               return;
           }
           const node = this.first;
           this.first = this.first.next;
            //if this is the last item in the queue
           if (node === this.last) {
               this.last = null;
           }
           return node.value;
       }
    }

/* 
It is also useful to know that you can use a JavaScript array to implement a stack and or a queue.
In JavaScript, the array push() and pop() methods more or less resemble the operations in a stack.
Therefor, you may see implementations of a stack and its operations in JavaScript using JavaScript arrays.
JavaScript arrays also provide the shift() method that can be used to implement the dequeue operation in a queue.
*/