class Node {
    //Define constructor the class

    constructor(data,next = null ){
        this.data = data;
        
        this.next = next;
    }
}

// const node4 = new Nodo(3.1);
// const node1 = new Nodo(3.2, node4);

// console.log(node1)


module.exports =Node;