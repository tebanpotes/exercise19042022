
const CircularLinkedList = require('./lists');
const prompt = require('prompt-sync')();

const lists = new CircularLinkedList();



//print pointer the last node list.last.next

lists.insertfirst("(I Can't Get No) Satisfaction");
lists.insertfirst("Respect");
lists.insertfirst("Stairway To Heaven");
lists.insertfirst("Like a Rolling Stone");
lists.insertfirst("Born to Run");

// lists.insertlast('Hola');

// lists.insert(2022,1);

// console.log(lists.show());


while(true){
    console.log('');

    console.log('Songs in list\n');

    

    console.log(lists.show());

    console.log(`\nMenu:\n 1. Entered new song\n 2. Play song \n 3. Pause / Readjust\n 4. Play song next  \n 5. Exit \n 6. Show list \n`);


   

    let option = prompt('Please type option : ');

    if(option == 1){
        const songNew = prompt('Typing name song: ');
        lists.insertlast(songNew);
        
    }
    
    if(option == 2){

        
        const songReproduce = prompt('which song do you want to play? please type option: ');
        console.log('')
        console.log(`is reproducing ..........................${lists.search(songReproduce)}........................` )

        
    }

    if (option == 3) {

        console.log(`song is pause ======================${lists.activeSong}=============================`)

        let option = prompt('song play ? type 2 or ctrl + c Exit: ');

        if (option == 2) {
            console.log(`is reproducing ..........................${lists.activeSong}........................`)

        }

    }

    if(option == 4){

       console.log(''); 
       console.log('song actually:',lists.activeSong);

       console.log(`Now it's playing the next song! ...................................${lists.nextSong(lists.activeSong)}.................................`)
        
    }

    if(option == 6){
        console.log(''),
        console.log('List actually\n');
        console.log(lists.show());
    }

    if(option == 5){
        break;
    }

}


