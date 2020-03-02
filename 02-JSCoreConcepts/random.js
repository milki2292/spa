arr = []
const rand = (x) =>{
for(var i = 0; i<x;i++){
    arr.push(Math.floor(Math.random()*20)+5)
}console.log(arr)}

rand(10);