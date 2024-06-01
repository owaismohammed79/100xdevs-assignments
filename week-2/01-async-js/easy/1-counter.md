## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function callme(i){
      let j = i;
      console.log(j);
      await sleep(1000);
      console.clear();
  }
  
  async function main() {
    const endvar = 50;
    for(let i = 1; i <= endvar; i = i+1){
        await callme(i);
    }
  }
  
  main();


  //Second way---my way
  /*

function call(i){
  console.log(i);
  i = i+1;
  setTimeout(()=>{
    console.clear();
    call(i);
  }, 1000)
}

call(1);
    
*/