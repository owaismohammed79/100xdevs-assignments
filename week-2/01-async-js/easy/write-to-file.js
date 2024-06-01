const fs = require('fs');
fs.writeFile('/4-write-to-file.md', 'Hello baigan but it is overwriting it', (err) =>{
  if(err) throw err;
  console.log('The file has been saved!');
});