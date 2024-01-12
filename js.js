console.log("Hello World!");


class LinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value){
        const newNode = new Node(value);

        if (!this.head)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    prepend(value)
    {

        const newNode = new Node(value);

        if (!this.head)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;


    }

    size()
    {
        let tmp = this.head;

        let size = 0;

        if (this.length = 0)
        {
            return this.length;
        }

        while (tmp != null)
        {
            {
                size ++;
                tmp = tmp.next;
            }
        }

        return size

    }

    head()
    {

        return this.head;

    }

    tail()
    {
        return this.tail;
    }

    at(index)
    {
        let tmpIndex = 0;
        let tmp = this.head;

        while (tmpIndex != index)
        {
            tmpIndex++;
            tmp = tmp.next;
        }

        return tmp;

    }

    pop()
    {

        let tmp = this.head;

        while (tmp.next != this.tail)
        {
  
            tmp = tmp.next;
        }

        const removedNode = this.tail;
        tmp.next = null;
        this.tail = tmp;

        return removedNode.value;


    }

    contains(value)
    {
        let tmp = this.head;

        while (tmp.value != value)
        {
            if (tmp = this.tail)
            {
                return false;

            }
            tmp = tmp.next;
        }

        if (tmp.value === value)
        {
            return true;
        }
        
    }

    find(value)
    {

        let index = 0;
        let tmp = this.head;
        
        while (tmp.value !== value)
        {
   
            if (tmp === this.tail)
            {
                return null;

            }
            
            index++;
            tmp = tmp.next;
        }

        return index;

    }

    toString()
    {
        let current = this.head;
        let result = '';

        while (current)
        {
            result +=  `${current.value} -> `;
            current = current.next;
        }

        result += 'null';
        return result;
    }

    insertAt(value, index)
    {
        let current = this.head;
        let prev = null;

        let tmpIndex = 0;
    

        while (tmpIndex < this.length)
        {
            if (tmpIndex === index-1)
            {
                break;
            }
                tmpIndex++;
                prev = current;
                current = current.next;
        }

        const newNode = new Node(value);

        if (index <= this.length)
        {
            prev.next = newNode;
            newNode.next = current;
        }
        else
        {
            console.log("Index out of bounds");
            console.log(`You Entered: ${index}`);
            console.log(`List Length: ${this.length}`);
        }

    }

    removeAt(index)
    {

        let current = this.head;
        let prev = null;

        let tmpIndex = 0;

        while (tmpIndex < this.length)
        {
            if (tmpIndex === index)
            {
                break
            }

            tmpIndex++;
            prev = current;
            current = current.next;
        }

        if (index <= this.length)
        {
            prev.next = current.next;

        }
        else
        {
            console.log("Index out of bounds");
            console.log(`You Entered: ${index}`);
            console.log(`List Length: ${this.length}`);
        }        
    }

}

class Node
{


    constructor(value, nextNode)
    {
        this.value = value;
    }
    
}


const myList = new LinkedList();
myList.append(10);
myList.append(20);
myList.append(30);
myList.append(40);

//console.log(myList.toString());

//myList.prepend(25);

//console.log(myList.toString());

//console.log(`Size: ${myList.size()}`);

//console.log("Head: " , myList.head);

//console.log("Tail: " , myList.tail);

//const indexAt = 4;
//console.log(`At ${indexAt}:` , myList.at(indexAt));

//console.log("Pop " , myList.toString());
//myList.pop();
//console.log("Pop " , myList.toString());

//const containsNumber = 599;
//console.log(`Contains ${containsNumber}? : ` , myList.contains(containsNumber));

//let findValue = 40;
//console.log(`Find Value : ${findValue}` , myList.find(findValue));

//findValue = 30;
//console.log(`Find Value : ${findValue}` , myList.find(findValue));

myList.append(60);

console.log(myList.toString());
myList.insertAt(500, 2);
console.log(myList.toString());
myList.insertAt(8000, 2);
console.log(myList.toString());

const removeIndex = 3;

console.log("Remove at: " , removeIndex);
myList.removeAt(removeIndex);
console.log(myList.toString());