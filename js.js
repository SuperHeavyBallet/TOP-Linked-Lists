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

    }

    contains(value)
    {

    }

    find(value)
    {

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

    }

    removeAt(index)
    {

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

console.log(myList.toString());

myList.prepend(25);

console.log(myList.toString());

console.log(`Size: ${myList.size()}`);

console.log("Head: " , myList.head);

console.log("Tail: " , myList.tail);

const indexAt = 4;
console.log(`At ${indexAt}:` , myList.at(indexAt));