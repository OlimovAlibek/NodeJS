const { log } = require('console');
const fs = require('fs')

//reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

//writing files
// fs.writeFile('./docs/blog1.txt', 'Hello mother fuckers', () => {
//     console.log("Done");
    
// })

// fs.writeFile('./docs/blog2.txt', 'Hello mother fuckers 2', () => {
//     console.log("Done");
    
// })


//directories
// if(!fs.existsSync('./assets')) {
// fs.mkdir('./assets', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log("doneee");
// })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if(err) {
//         console.log(err);}
//         console.log("deleted");
        
//     }
// )
// }


//deleting
if(fs.existsSync('./docs/deleted.txt')) {
    fs.unlink('./docs/deleted.txt', () => {
        console.log("deleteddd");
        
    })
}


