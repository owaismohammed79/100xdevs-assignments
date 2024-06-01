## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



function call(j){
  console.log(j);
  i++;
}
let i =1;
setInterval(()=>{
  console.clear();
  call(i);
}, 1000)





































































(Hint: setTimeout)