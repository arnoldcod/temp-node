const {readFile, writeFile} = require('fs').promises

//const util = require('util) // util is a module
// const readFilePromise = util.promisify(readFile)
 //const writeFilePromise = util.promisify(writeFile)


const start = async () =>{
    try{
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile(
            './content/result-mind.txt', 
            `This is awesome : ${first} ${second}`, {flag: 'a'})
        console.log(first, second)
    } catch (error){
       console.log(error)
    }   
}

 start()




// const getText = (path) =>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8' , (err, data)=> {
//             if(err){
//                 reject(err)
//             } else{
//                 resolve(data)
//             }
//         })
//     })
// }



// getText('./content/first.txt')
// .then((result)=> console.log(result))
// .catch((error)=> console.log(error))

