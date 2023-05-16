var fs =require('fs');
fs.readFile('text.txt' , function(error,data){
    if (error){
        console.log(error);
    }
    setTimeout(()=>{
        console.log('display text here after 2sec')
    },2000)
});
console.log('started here');