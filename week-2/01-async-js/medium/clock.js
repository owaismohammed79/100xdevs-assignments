function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function showTime(){
  while(1){
    console.clear();
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    console.log(hour + ":" + min + ":" + sec);
    await sleep(1000);
  }
  }
  showTime();