function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

function ReverseLinkedList(headNode){
    let pNode = null;
    let cNode = headNode;
    while(cNode.next){
        let nNode = cNode.next;
        cNode.next = pNode;
        pNode = cNode;
        cNode = nNode
    }
    //link up cNode with pNode;
    cNode.next = pNode
    return cNode;
}

function iterateLinkedList(headNode){
    let cNode = headNode;
    while(cNode){
        console.log(cNode.value);
        cNode = cNode.next;
    }
}

let someObj1 = new LinkedListNode(10);
let someObj2 = new LinkedListNode(11);
let someObj3 = new LinkedListNode(12)
someObj1.next = someObj2
someObj2.next = someObj3;

iterateLinkedList(ReverseLinkedList(someObj2));