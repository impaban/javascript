const EventEmmiter =require ("events");
const celiberity= new EventEmmiter();
celiberity.on("race",function(){
    console.log('you begain the race ')
});

celiberity.on("race lost",function(){
    console.log('better try next time  ')
});
process.on("exit",(code )=>{
    console.log("code is processed and exited",code);
})
celiberity.on("race terminated",function(){
    console.log('hope next time i will win   ')
});

celiberity.emit("race")
celiberity.emit("race lost")
celiberity.emit("race terminated")

