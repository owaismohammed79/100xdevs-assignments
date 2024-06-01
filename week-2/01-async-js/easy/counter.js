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


  //Second way
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