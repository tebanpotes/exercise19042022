const Node = require('./node');


class CircularLinkedList {

    //Define constructor Class

    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
        this.activeSong = '';
    }

    

    listEmpty(){
        return this.first == null;
    }

    insertfirst(data){
  
        let newNode = new Node(data);
  
        if(this.listEmpty()){
    
            this.first = newNode;
            this.last = newNode;      
            
        }else{
    
            newNode.next = this.first;
   
            this.first = newNode;
            
            
        } 
        //-->
        this.last.next = this.first;
        //<--

        this.size++;

    }

    insertlast(data){
        //console.log(data)

        let newNode = new Node(data)
        if(this.listEmpty()){
            this.first = newNode;
            this.last = newNode;

        }else{
            // Pointer next the element last => newNode
            this.last.next = newNode;
            //Pointer last => new element
            this.last = newNode;

            
        }

        //==>
        this.last.next = this.first;
        //newNode.next = this.first;
        //<==
        this.size++;
    
    }


     search(position){
       
        let aux = this.first;
        while(aux){
            if(aux.data == position){

                this.activeSong = position;
                return aux.data;
                // return true;
            }

            aux = aux.next;

            if (aux == this.first){
                break;
            }
        }
    }

     nextSong(song){
        
        let aux = this.first;
        while(aux){
            if(aux.data == song){


                if(aux.next == this.last){                    
                    return aux.next.data;
                } else if( aux.next.next ){
                    return aux.next.data
                }   
                
                
               
            }

            aux = aux.next;

            if (aux == this.first){
                break;
            }
        }
    }
//<==
    show(){
        
        let aux = this.first;
        let cont = 0;
        while(aux){
            cont++;
            console.log(cont +'-' + aux.data);
            aux = aux.next;
            
            if (aux == this.first){
                break;
            }
        }
        console.log('');
    }

}


module.exports = CircularLinkedList;
